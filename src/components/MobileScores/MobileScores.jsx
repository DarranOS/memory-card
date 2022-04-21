import React from 'react'
import { Scores } from 'components'
import styled from 'styled-components'

function MobileScores() {
  return (
    <Container>
      <Scores />
    </Container>
  )
}

export default MobileScores

const Container = styled.div`
  display: flex;
  width: 100vw;

  @media (min-width: 768px) {
    display: none;
  }
`
