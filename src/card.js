import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Modal } from "react-bootstrap";
import { useState } from "react";

const apiKey = "2627f6b555536e68cacc1db9cf1a6793";

// function Carte({ img, titre, desc }) {
function Carte({ props }) {
  const [visible, setvisible] = useState();

  const afficheModal = () => {
    setvisible(true);
  };
  const cacheModal = () => {
    setvisible(false);
  };

  const toggleModal = () => setvisible(!visible);

  const backgroundColor = {
    Plante: "#3ca516",
    Feu: "#fb8106",
    Poison: "#d435e9",
    Eau: "#1fdbf1",
    Vol: "#b8d7f9",
    Sol: "#ce7639",
    Fée: "#f970b1",
    Combat: "#ef536b",
    Glace: "#6fd5cc",
    Psy: "#fe7c6f",
    Électrik: "#ffd13f",
    Normal: "#9f9a62",
    Insecte: "#75af7a",
    Roche: "#cdbd67",
    Spectre: "#8679ca",
  };

  let colors;
  const setColors = (props) => {
    colors = props.apiTypes[props.apiTypes.length - 1].name;
  };
  setColors(props);
  // fonction statistique
  const statis = ({ props }) => {
    return props.apiTypes.length > 1 ? (
      <div className="d-flex justify-content-center flex-wrap">
        <div
          style={{ width: "40%" }}
          className="d-flex justify-content-center flex-column m-3"
        >
          <h5>{props.apiTypes[0].name}</h5>
          <img
            style={{ width: "6rem", height: "6rem" }}
            src={props.apiTypes[0].image}
            alt=""
          />
        </div>
        <div
          style={{ width: "40%" }}
          className="d-flex justify-content-center flex-column m-3"
        >
          <h5>{props.apiTypes[1].name}</h5>
          <img
            style={{ width: "6rem", height: "6rem" }}
            src={props.apiTypes[1].image}
            alt=""
          />
        </div>
        <div className="m-3">
          <h6>Attaque : {props.stats.attack}</h6>
          <h6>Defense : {props.stats.defense}</h6>
          <h6>Vitesse : {props.stats.speed}</h6>
        </div>
      </div>
    ) : (
      <div className="d-flex justify-content-center">
        <div>
          <h5>{props.apiTypes[0].name}</h5>
          <img
            style={{ width: "6rem", height: "6rem" }}
            src={props.apiTypes[0].image}
            alt=""
          />
        </div>
        <div className="m-3">
          <h6>Attaque : {props.stats.attack}</h6>
          <h6>Defense : {props.stats.defense}</h6>
          <h6>Vitesse : {props.stats.speed}</h6>
        </div>
      </div>
    );
  };

  return (
    <>
      <Card
        // className={props.apiTypes[props.apiTypes.length - 1].name}
        style={{ width: "20rem" }}
      >
        {/* <Card> */}
        {/* <Card.Img variant="top" src={props.image} /> */}
        <img src={props.image} alt="" />
        <Card.Body
          className={colors}
          style={{ backgroundColor: backgroundColor[colors] }}
        >
          <Card.Title>
            <div>{props.name}</div>
          </Card.Title>
          <Card.Text>{props.poke}</Card.Text>
          <Button
            onClick={toggleModal}
            style={{ maxWidth: "90%" }}
            variant="primary"
          >
            Details
          </Button>
        </Card.Body>
      </Card>
      <Modal show={visible} onHide={toggleModal}>
        <img src={props.sprite} alt="" />
        <Modal.Title>{props.name}</Modal.Title>
        <Modal.Body>
          <div>
            <div>{statis({ props })}</div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Carte;
