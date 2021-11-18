import React from "react";
import classes from "./CurrentScoreDisplay.module.css";

const CurrentScoreDisplay = (props) => {
  return (
    <div className={props.reset ? classes.Reset : classes.CurrentScoreDisplay}>
      <p className={classes.Label}>Current Score:</p>
      <hr className={classes.Hr} />
      <p className={props.reset ? classes.ResetScore : classes.Score}>{props.count}</p>
    </div>
  );
};

export default CurrentScoreDisplay;
