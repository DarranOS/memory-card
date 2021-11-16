import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const inputClasses = [classes.Div, props.card.name];
  return (
    <div className={inputClasses.join(" ")}>
      <p>
        <strong>Name: {props.card.name}</strong>
      </p>
      <p>Mana Value: {props.card.manaValue}</p>
    </div>
  );
};

export default Card;
