import CardDrawer from './components/CardDrawer'
import styled from 'styled-components'
import Sidebar from './components/Sidebar'
import InstructionsBackDrop from './components/InstructionsBackDrop'
import React from 'react'
import Scores from './components/Scores'
import MobileScores from './components/MobileScores'

function App() {
  return (
    <Container className="App">
      <Background />
      <Sidebar />
      <MobileScores />

      <Main>
        <CardDrawer />
      </Main>
      <InstructionsBackDrop />
    </Container>
  )
}

export default App

const Container = styled.main`
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Background = styled.div`
  background: url('/img/bg.jpg'), rgba(40, 0, 20, 0.5);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -10;

  @media (min-width: 768px) {
    background-position: 30% 0;
  }
`

const Main = styled.main`
  width: 82vw;
  display: grid;
  place-items: center;
  max-height: 100vh;
  @media (min-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`
