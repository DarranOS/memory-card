import styled from 'styled-components'
import { InstructionsBackDrop, MobileScores, Background, Sidebar } from 'components'
import { CardDrawer } from 'controllers'

// The Redux state is handled in the CardDrawer component.

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

const Main = styled.main`
  width: 96vw;
  display: grid;
  place-items: center;
  max-height: 100vh;
  @media (min-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`
