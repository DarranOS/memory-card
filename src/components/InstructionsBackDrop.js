import React, { useState } from 'react'
import styled from 'styled-components'
import Instructions from './Instructions'

function InstructionsBackDrop() {
  const [instructions, setInstructions] = useState(true)

  return (
    <React.Fragment>
      {instructions && (
        <Container>
          <Instructions />
          <button
            onClick={() => {
              setInstructions(!instructions)
            }}
          >
            Challenge Bolas
          </button>
        </Container>
      )}
    </React.Fragment>
  )
}

export default InstructionsBackDrop

const Container = styled.div`
  position: absolute;
  left: 2%;
  top: 2%;
  bottom: 2%;
  right: 2%;

  color: white;
  font-size: 80rem;
  display: flex;
  background-color: rgba(78, 43, 113, 0.8);
  padding: 15vmin;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }

  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 50%;
    color: rgba(138, 43, 226, 1);
    background: white;
    height: 5rem;
    padding: 4rem 2rem;
    margin-top: 4rem;
    outline: none;
    border: none;
    font-size: 2rem;
    font-family: 'MedievalSharp', cursive;
    font-weight: bold;
  }
`
