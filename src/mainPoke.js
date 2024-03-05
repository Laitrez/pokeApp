import React, { useEffect, useState } from "react";
import store from "./store";
import * as apiPoke from "./apiPoke";
import Carte from "./card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";

function MainPoke() {
  const [Pokes, setPokes] = useState([]);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { value } = useSelector(({ search }) => search);
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
      console.log("ici : " + JSON.stringify(fetchedPokes));
      setPokes(fetchedPokes);

      setError(false);
    } catch (error) {
      setError(true);
    }
  }

  useEffect(() => {
    fetchPoke(value);
  }, [value]);

  const AffPoke = ({ Poke }) => {
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
        {/* {Pokes.map((Poke) => (
          <AffPoke key={Poke.id} Poke={Poke} />
        ))} */}
        {Array.isArray(Pokes) ? (
          Pokes.map((Poke) => <AffPoke key={Poke.id} Poke={Poke} />)
        ) : (
          <AffPoke key={Pokes.id} Poke={Pokes} />
        )}
      </div>
    </>
  );
}

export default MainPoke;
