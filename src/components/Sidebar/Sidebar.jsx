import styled from 'styled-components'
import { Instructions, Scores, Credits } from 'components'
import { useSelector } from 'react-redux'

function Sidebar() {
  const score = useSelector((state) => state)

  return (
    <Container scoreUI={score.scoreUI}>
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

  filter: drop-shadow(4px 4px 12px black);
  padding: 15px;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;

  background-color: ${(props) =>
    props.scoreUI === 'reseting'
      ? 'rgba(238, 43, 126, 0.65)'
      : 'rgba(138, 43, 226, 0.4)'};

  @media (min-width: 768px) {
    display: flex;
  }
`
