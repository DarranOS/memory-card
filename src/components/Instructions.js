import React from 'react'
import styled from 'styled-components'

const Instructions = (props) => {
  const instruction = {
    heading: props.incorrect
      ? 'WRONG CHOICE MORTAL!!'
      : 'Can you outsmart the great Nicol Bolas?',
    para: props.incorrect
      ? 'Try again?'
      : 'Click as many legendary dragons without clicking the same one twice.',
  }

  return (
    <InstructionsContainer>
      <h3>{instruction.heading}</h3>
      <hr />
      <p>{instruction.para}</p>
    </InstructionsContainer>
  )
}
export default Instructions

const InstructionsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h3 {
    align-self: flex-start;
    font-size: calc(1rem + 1vh);
    color: white;
    font-family: 'MedievalSharp';
  }

  hr {
    align-self: flex-start;
    margin-top: 1.8vh;
    margin-bottom: 1.8vh;
    border-bottom: 1px solid white;
    width: 80%;

    @media (max-width: 600px) {
      display: none;
    }
  }

  p {
    color: white;
    font-size: calc(0.8rem + 1vh);
  }
`
