import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faFilm,
  faTv,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import context from "react-bootstrap/esm/AccordionContext";
import { useDispatch } from "react-redux";
import { setC } from "./searchBar.reducer";

const Footer = () => {
  // const dispatch = useDispatch();
  const data = [
    {
      icon: "icons/bullbasaur.png",
      name: "pokedex",
      context: "all",
    },
    {
      icon: "icons/charmander.png",
      name: "recherche",
      context: "movie",
    },
    {
      icon: "icons/pikachu.png",
      name: "strategie",
      context: "tv",
    },
    {
      icon: "icons/squirtle.png",
      name: "Search",
      context: "all",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center bg-dark footer">
            {data.map((val) => {
              return (
                <button
                  className="col-sm-2 col-md-2 btn btn-dark"
                  key={val.name}
                  // onClick={() => dispatch(setC(val.context))}
                >
                  <img width="50px" height="50px" src={val.icon} alt="" />
                  <br />
                  <h5 className="pt-1 fs-6">{val.name}</h5>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
