import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Scores = () => {
  const score = useSelector((state) => state)

  return (
    <ScoresContainer>
      <CurrentScoreContainer>
        <p>Current</p>
        <p>Score:</p>
        <hr />
        <h4>{score.current}</h4>
      </CurrentScoreContainer>
      <HighScoreContainer>
        <p>High</p>
        <p>Score:</p>
        <hr />
        <h4>{score.high}</h4>
      </HighScoreContainer>
    </ScoresContainer>
  )
}

export default Scores

const ScoresContainer = styled.div`
  display: flex;
  height: 12vh;
  filter: drop-shadow(4px 4px 12px black);
  width: 100vh;

  @media (min-width: 768px) {
    width: 100%;
  }
`

const CurrentScoreContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  background-color: rgba(138, 43, 226, 0.3);
  height: 100%;
  padding: 3px;
  margin: 2vh 0;

  @media (min-width: 768px) {
    flex-direction: column;
  }

  p {
    color: white;
    font-size: 1.6vh;
  }

  h4 {
    font-weight: bold;
    font-size: calc(1.6rem + 1vh);
    margin-left: 2rem;
    color: white;

    @media (min-width: 768px) {
      margin-left: 0rem;
    }
  }

  hr {
    border-bottom: 1px solid white;
    width: 60%;
    display: none;
    margin-top: 0.6rem;
    @media (min-width: 768px) {
      display: none;
    }
  }
`

const HighScoreContainer = styled(CurrentScoreContainer)`
  background-color: rgba(146, 125, 2, 0.5);
`
