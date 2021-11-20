import React from "react";
import HighScoreDisplay from "./HighScoreDisplay/HighScoreDisplay";
import CurrentScoreDisplay from "./CurrentScorea/CurrentScoreDisplay";
import classes from "./Scores.module.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../state/index";

const Scores = () => {
  const score = useSelector((state) => state);

  return (
    <div className={classes.Scores}>
      <CurrentScoreDisplay count={score.current} />
      <HighScoreDisplay count={score.high} />
    </div>
  );
};

export default Scores;
