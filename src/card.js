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
    'Plante': '#3ca516',
    'Feu': '#af6821',
    'Poison': '#922eac',
    'Eau': '#30a5b3',
    'Vol': '#8598ad',
    'Sol': '#7a4e2c',
    'Fée': '#924a92',
    'Combat': '#9b0f0f',
    'Glace': '#5d879c',
    'Psy': '#b67e4d',
    'Électrik': '#858d16',
    'Normal': '#36505c',
    'Insecte': '#3e6141',
    'Roche': '#575757',
    'Spectre': '#724275',
  }



  let colors;
  const setColors = (props) => {
    colors = props.apiTypes[props.apiTypes.length - 1].name
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
      <Card style={{ width: "20rem" }}>
        {/* <Card> */}
        {/* <Card.Img variant="top" src={props.image} /> */}
        <img src={props.image} alt="" />
        <Card.Body className={colors} style={{ backgroundColor: backgroundColor[colors] }}>
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
