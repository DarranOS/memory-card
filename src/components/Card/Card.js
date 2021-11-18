import React from "react";
import Artwork from "../Artwork/Artwork";
import Cross from "./Cross/Cross";

const Card = (props) => {
  return (
    <React.Fragment>
      <Artwork art={props.card.name} />
    </React.Fragment>
  );
};

export default Card;
