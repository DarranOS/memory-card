import React from "react";
import Artwork from "../Artwork/Artwork";

const Card = (props) => {
  return (
    <div>
      <Artwork art={props.card.name} />
    </div>
  );
};

export default Card;
