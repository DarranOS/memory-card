import React from "react";
import styled from "styled-components";

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
    <InstructionsContainer>
      <h3>{instruction.heading}</h3>
      <hr />
      <p>{instruction.para}</p>
    </InstructionsContainer>
  );
};
export default Instructions;

const InstructionsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 200%;
    color: white;
  }

  hr {
    border-bottom: 1px solid white;
    width: 60%;
  }

  p {
    color: white;
  }
`;
