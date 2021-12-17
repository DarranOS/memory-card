import CardDrawer from "./components/CardDrawer";
import Scores from "./components/Scores";
import Instructions from "./components/Instructions";
import styled from "styled-components";

function App() {
  return (
    <Container className="App">
      <Background></Background>
      <Sidebar>
        <Instructions />
        <Scores />
      </Sidebar>

      <Main>
        <CardDrawer />
      </Main>
    </Container>
  );
}

export default App;

const Container = styled.main`
  display: flex;

  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

const Background = styled.div`
  background: url("/img/bg.jpg"), rgba(40, 0, 20, 0.5);
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
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 15%;
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(138, 43, 226, 0.4);
`;

const Main = styled.main`
  width: 85%;
`;
