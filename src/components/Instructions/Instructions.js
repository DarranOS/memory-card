import React from "react";
import classes from "./Instructions.module.css";

const Instructions = (props) => {
  const instruction = {
    heading: props.incorrect
      ? "WRONG CHOICE MORTAL!!"
      : "Can you outsmart the great Nicol Bolas?",
    para: props.incorrect
      ? "Try again?"
      : "Click as many legendary dragons without clicking the same one twice.",
  };

  return (
    <div className={classes.Instructions}>
      <h3 className={classes.Heading}>{instruction.heading}</h3>
      <hr className={classes.Hr} />
      <p className={classes.Para}>{instruction.para}</p>
    </div>
  );
};
export default Instructions;
