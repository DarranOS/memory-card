import React from "react";
import cardback from "../../../assets/img/cardback.png";
import classes from "./Cardback.module.css";

const Cardback = () => {
  return (
    <div className={classes.Cardback}>
      <img alt="cardback" src={cardback} />;
    </div>
  );
};

export default Cardback;
