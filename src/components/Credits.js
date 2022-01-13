import React from 'react'
import springLogo from '../assets/svg/react-spring-logo.svg'
import odinLogo from '../assets/svg/odin-logo.svg'
import reactLogo from '../assets/svg/react-logo.svg'
import githubLogo from '../assets/svg/github-logo.svg'
import styled from 'styled-components'

const Credits = () => {
  return (
    <Container>
      <h4>My Memory Card Project</h4>
      <hr />

      <ul>
        <li>
          <div>
            <img src={odinLogo} alt="logo" />
            Built for Odin Project
          </div>
        </li>
        <li>
          <div>
            <img src={reactLogo} alt="logo" />
            with React Redux
          </div>
        </li>
        <li>
          <div>
            <img src={springLogo} alt="logo" />
            and React-Spring
          </div>
        </li>
        <li>
          <a href="https://github.com/DarranOS">
            <img src={githubLogo} alt="logo" />
            Check my Github
          </a>
        </li>

        <li>
          <a href="https://darranoshea.co.uk">
            <img src={githubLogo} alt="logo" />
            Or my site
          </a>
        </li>
      </ul>
    </Container>
  )
}

export default Credits

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-items: flex-start;
  width: 100%;

  hr {
    align-self: flex-start;
    margin-top: 1.8vh;
    margin-bottom: 2rem;
    border-bottom: 1px solid white;
    width: 80%;

    @media (min-width: 768px) {
      display: none;
    }
  }

  h4 {
    align-self: flex-start;
    margin-bottom: 1.8vh;
    font-size: calc(0.8rem + 0.8vh);
    color: white;
  }

  ul {
    width: 100%;
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      margin-bottom: 1vh;

      a,
      div {
        display: flex;
        align-items: center;
        color: white;
        font-size: calc(0.8rem + 1vh);
        justify-self: center;

        img {
          width: 5vh;
          height: 5vh;
          margin-right: 4px;
          padding: 1vh;
          padding-left: 0;
        }
      }
    }
  }
`
