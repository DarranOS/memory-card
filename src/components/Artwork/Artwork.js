import React from "react";
import classes from "./Artwork.module.css";
import atarka from "../../assets/img/atarka.jpg";
import crosis from "../../assets/img/crosis.jpg";
import darigaaz from "../../assets/img/darigaaz.jpg";
import dromar from "../../assets/img/dromar.jpg";
import dromoka from "../../assets/img/dromoka.jpg";
import kolaghan from "../../assets/img/kolaghan.jpg";
import rith from "../../assets/img/rith.jpg";
import silumgar from "../../assets/img/silumgar.jpg";
import ojutai from "../../assets/img/ojutai.jpg";
import treva from "../../assets/img/treva.jpg";

const Artwork = (props) => {
  console.log(props.art);
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
  return <img alt="dragin-art" src={source(props)} className={classes.Art}></img>;
};

export default Artwork;
