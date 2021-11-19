import React from "react";
import atarka from "../../assets/img/atarka.png";
import crosis from "../../assets/img/crosis.png";
import darigaaz from "../../assets/img/darigaaz.png";
import dromar from "../../assets/img/dromar.png";
import dromoka from "../../assets/img/dromoka.png";
import kolaghan from "../../assets/img/kolaghan.png";
import rith from "../../assets/img/rith.png";
import silumgar from "../../assets/img/silumgar.png";
import ojutai from "../../assets/img/ojutai.png";
import treva from "../../assets/img/treva.png";

const Artwork = (props) => {
  const source = (props) => {
    switch (props.art) {
      case "atarka":
        return atarka;

      case "crosis":
        return crosis;

      case "darigaaz":
        return darigaaz;

      case "dromar":
        return dromar;

      case "dromoka":
        return dromoka;

      case "kolaghan":
        return kolaghan;

      case "ojutai":
        return ojutai;

      case "rith":
        return rith;

      case "silumgar":
        return silumgar;

      case "treva":
        return treva;

      default:
        return dromoka;
    }
  };
  return (
    <div className="Card__Front">
      <img alt="dragon-art" src={source(props)}></img>
    </div>
  );
};

export default Artwork;
