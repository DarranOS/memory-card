import React from "react";
import classes from "./Cross.module.css";

const Cross = (props) => {
  return <p className={props.incorrect ? classes.CrossOpen : classes.CrossClosed}>X</p>;
};

export default Cross;
