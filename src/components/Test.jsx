import React from 'react'
import styled from 'styled-components'

const Test = () => {
  return (
    <TestDiv>
      <p>Test</p>
    </TestDiv>
  )
}

export default Test

const TestDiv = styled.div`
  background: green;
  height: 100vh;
  backface-visibilty: hidden;
  -webkit-transform-style: preserve-3d;

  p {
    font-size: 2rem;

    -webkit-transform-style: preserve-3d;
  }

  :hover {
    transform: rotateY(180deg);

    p {
      backface-visibilty: hidden;
    }
  }
`
