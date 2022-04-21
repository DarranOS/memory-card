import React from 'react'
import { svgs } from 'constants/svgs'
import styled from 'styled-components'

const Credits = () => {
  return (
    <Container>
      <h4>My Memory Card Project</h4>
      <hr />

      <ul>
        <li>
          <div>
            <img src={svgs.odin} alt="logo" />
            Built for Odin Project
          </div>
        </li>
        <li>
          <div>
            <img src={svgs.react} alt="logo" />
            with React Redux
          </div>
        </li>
        <li>
          <div>
            <img src={svgs.spring} alt="logo" />
            and Framer Motion
          </div>
        </li>
        <li>
          <a href="https://github.com/DarranOS">
            <img src={svgs.github} alt="logo" />
            Check my Github
          </a>
        </li>

        <li>
          <a href="https://darranoshea.co.uk">
            <img src="mstile-150x150.png" style={{ padding: '0' }} alt="logo" />
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
        text-decoration: none;

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
