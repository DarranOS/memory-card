import styled from 'styled-components'
import { Background, Sidebar, CardDrawer } from './containers'

import InstructionsBackDrop from './components/InstructionsBackDrop'
import MobileScores from './components/MobileScores'
import CardDealer from './components/CardDealer'

function App() {
  return (
    <Container className="App">
      <Background />
      <Sidebar />
      <MobileScores />

      <Main>
        <CardDrawer>
          <CardDealer />
        </CardDrawer>
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
