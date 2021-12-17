import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Scores = () => {
  const score = useSelector((state) => state);

  return (
    <ScoresContainer>
      <CurrentScoreContainer>
        <p>Current Score:</p>
        <hr />
        <h4>{score.current}</h4>
      </CurrentScoreContainer>
      <HighScoreContainer>
        <p>High Score:</p>
        <hr />
        <h4>{score.high}</h4>
      </HighScoreContainer>
    </ScoresContainer>
  );
};

export default Scores;

const ScoresContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: flex-end;
  flex-direction: row;
`;

const CurrentScoreContainer = styled.div`
  text-align: center;
  width: 50%;
  background-color: rgba(138, 43, 226, 0.3);

  p {
    color: white;
  }

  h4 {
    font-weight: bold;
    font-size: 200%;
    line-height: 0px;
    color: white;
  }

  hr {
    border-bottom: 1px solid white;
    width: 60%;
  }

  Increase {
    text-align: center;
    background-color: rgba(138, 43, 226, 0.5);
    width: 50%;
  }

  .ResetScore {
    font-weight: bold;
    font-size: 200%;
    line-height: 0px;
    color: rgb(70, 13, 124);
  }
`;

const HighScoreContainer = styled(CurrentScoreContainer)`
  background-color: rgba(146, 125, 2, 0.5);

  .Increase {
    background-color: rgb(182, 170, 103);
  }

  .IncreaseScore {
    color: gold;
  }
`;
