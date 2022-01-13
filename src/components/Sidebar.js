import React from 'react'
import Instructions from './Instructions'
import Scores from './Scores'
import Credits from './Credits'
import styled from 'styled-components'

function Sidebar() {
  return (
    <Container>
      <Instructions />
      <Scores />
      <Credits />
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  display: none;
  width: calc(16% + 10rem);
  margin: 0 auto;
  background-color: rgba(138, 43, 226, 0.4);
  filter: drop-shadow(4px 4px 12px black);
  padding: 15px;
  justify-content: space-between;
  flex-direction: column;

  height: 100vh;

  @media (min-width: 768px) {
    display: flex;
  }
`
