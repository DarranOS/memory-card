import React from "react";
import Artwork from "../Artwork/Artwork";
import Cardback from "./Cardback/Cardback";
import classes from "./Card.module.css";

const Card = (props) => {
  const classList = props.refresh ? classes.Refresh : classes.Card;

  return (
    <div className={classList}>
      <Artwork art={props.card.name} />
      <Cardback />
    </div>
  );
};

export default Card;
