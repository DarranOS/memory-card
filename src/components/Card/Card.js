import React from "react";
import Artwork from "../Artwork/Artwork";
import Cardback from "./Cardback/Cardback";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <Artwork art={props.card.name} />
      <Cardback className={classes.Cardback} />
    </div>
  );
};

export default Card;
