import React from "react";
import classes from "./HighScoreDisplay.module.css";

const HighScoreDisplay = (props) => {
  return (
    <div className={props.increase ? classes.Increase : classes.HighScoreDisplay}>
      <p className={classes.Label}>High Score:</p>
      <hr className={classes.Hr} />
      <p className={props.increase ? classes.IncreaseScore : classes.Score}>
        {props.count}
      </p>
    </div>
  );
};

export default HighScoreDisplay;
