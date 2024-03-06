import React, { useEffect, useState } from "react";
import store from "./store";
import * as apiPoke from "./apiPoke";
import Carte from "./card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { BNext, BPrev } from "./BouttonN";

function MainPoke() {
  const [Pokes, setPokes] = useState([]);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { value } = useSelector(({ search }) => search);
  let page = useSelector((state) => state.search.page);
  // test context----------------------------------------

  async function fetchPoke(searchTerme) {
    try {
      let fetchedPokes;
      // let fetchedPokesTab = [];
      if (searchTerme) {
        fetchedPokes = await apiPoke.get(searchTerme);
      } else {
        fetchedPokes = await apiPoke.getPoke();
      }
      console.log(fetchedPokes);
      setPokes(fetchedPokes);

      setError(false);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchPoke(value);
  }, [value, page]);

  const Affpoke = ({ Poke }) => {
    return (
      <div className="d-flex flex-wrap m-2  overflow-hidden">
        {/* <Carte img={Poke.image} titre={Poke.name} desc={Poke.slugg} /> */}
        <Carte props={Poke} />
      </div>
    );
  };

  const Error = () => {
    if (error) return <p>Il y a une erreur</p>;
  };

  return (
    <>
      <Error />
      <div className="d-flex flex-wrap justify-content-center">
        <div className="m-3" style={{ width: "100%" }}>
          <BPrev />
          <BNext />
        </div>
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{ maxWidth: "130rem" }}
        >
          {Array.isArray(Pokes) ? (
            Pokes.slice(15 * (page - 1), 15 * page).map((Poke) => (
              // Pokes.map((Poke) =>
              <Affpoke key={Poke.id} Poke={Poke} />
            ))
          ) : (
            // Pokes.map((Poke) => {
            //
            //     Poke.id > 15 * (page - 1) && Poke.id <= 15 * page
            //       ? <Affpoke key={Poke.id} Poke={Poke} />
            //       : console.log(`${Poke.id}>${page}`);
            //
            // })
            <Affpoke key={Pokes.id} Poke={Pokes} />
          )}
        </div>
      </div>
    </>
  );
}

export default MainPoke;
