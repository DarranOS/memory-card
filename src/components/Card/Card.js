import React from "react";
import Artwork from "../Artwork/Artwork";

const Card = (props) => {
  return (
    <div>
      <p>
        <Artwork art={props.card.name} />

        <strong>Name: {props.card.name}</strong>
      </p>
    </div>
  );
};

export default Card;
