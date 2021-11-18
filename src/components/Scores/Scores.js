import React from "react";
import HighScoreDisplay from "./HighScoreDisplay/HighScoreDisplay";
import CurrentScoreDisplay from "./CurrentScorea/CurrentScoreDisplay";
import classes from "./Scores.module.css";

const Scores = (props) => {
  return (
    <div className={classes.Scores}>
      <CurrentScoreDisplay reset={props.didScoreReset} count={props.currentScore} />
      <HighScoreDisplay increase={props.didHighIncrease} count={props.highScore} />
    </div>
  );
};

export default Scores;
