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

  let colors;
  const setColors = (props) => {
    props.apiTypes.length > 1
      ? // If Yes
        (colors = props.apiTypes[1].name)
      : // props.apiTypes[1].name == "Plante"
        // ? (colors = "#5AFA20")
        // : props.apiTypes[1].name == "Feu"
        // ? (colors = "#FF8E1C")
        // : props.apiTypes[1].name == "Poison"
        // ? (colors = "#D52EFF")
        // : props.apiTypes[1].name == "Eau"
        // ? (colors = "#36EBFF")
        // : props.apiTypes[1].name == "Vol"
        // ? (colors = "#C2DEFF")
        // : props.apiTypes[1].name == "Sol"
        // ? (colors = "#A66737")
        // : props.apiTypes[1].name == "Fée"
        // ? (colors = "#FF73FF")
        // : props.apiTypes[1].name == "Combat"
        // ? (colors = "#FF0D0D")
        // : props.apiTypes[1].name == "Glace"
        // ? (colors = "#99DDFF")
        // : props.apiTypes[1].name == "Psy"
        // ? (colors = "#FFAD66")
        // : props.apiTypes[1].name == "Électrik"
        // ? (colors = "#F0FF21")
        // :
        // (colors = "#34505C")
        // if No
        (colors = props.apiTypes[0].name);
    //    props.apiTypes[0].name == "Plante"
    // ? (colors = "#5AFA20")
    // : props.apiTypes[0].name == "Feu"
    // ? (colors = "#FF8E1C")
    // : props.apiTypes[0].name == "Poison"
    // ? (colors = "#D52EFF")
    // : props.apiTypes[0].name == "Eau"
    // ? (colors = "#36EBFF")
    // : props.apiTypes[0].name == "Vol"
    // ? (colors = "#C2DEFF")
    // : props.apiTypes[0].name == "Sol"
    // ? (colors = "#A66737")
    // : props.apiTypes[0].name == "Fée"
    // ? (colors = "#FF73FF")
    // : props.apiTypes[0].name == "Combat"
    // ? (colors = "#FF0D0D")
    // : props.apiTypes[0].name == "Glace"
    // ? (colors = "#99DDFF")
    // : props.apiTypes[0].name == "Psy"
    // ? (colors = "#FFAD66")
    // : props.apiTypes[0].name == "Électrik"
    // ? (colors = "#F0FF21")
    // : (colors = "#34505C");
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
      <Card className={colors} style={{ width: "20rem" }}>
        {/* <Card> */}
        {/* <Card.Img variant="top" src={props.image} /> */}
        <img style={{ backgroundColor: "#272727" }} src={props.image} alt="" />
        <Card.Body className={colors}>
          <Card.Title>
            <div>{props.name}</div>
          </Card.Title>
          <Card.Text>{props.poke}</Card.Text>
          <Button
            onClick={afficheModal}
            style={{ maxWidth: "90%" }}
            variant="primary"
          >
            Details
          </Button>
        </Card.Body>
      </Card>
      <Modal show={visible} onHide={cacheModal}>
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
