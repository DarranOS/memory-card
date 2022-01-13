import React from 'react'
import Artwork from './Artwork'
import cardback from '../assets/img/cardback.png'
import styled from 'styled-components'
// import { useTransition, animated, useSpring } from "react-spring";

const Card = ({ src }) => {
  return (
    <CardContainer>
      <Cardback alt="cardback" src={cardback} />
      <Artwork src={src} />
      <p>Hello!!</p>
    </CardContainer>
  )
}

export default Card

const CardContainer = styled.div`
  display: grid;
  place-items: center;
  min-height: 100%;
  width: calc(25vh + 25rem);
  width: 100%;
  transition: all 0.5s;
  position: relative;
  filter: drop-shadow(0px 4px 16px transparent) drop-shadow(0px 12px 24px transparent);
  transition: filter 300ms ease-out;

  ${
    '' /* @media (max-width: 600px) {
    height: calc(8rem + 20vmin);
  

  @media (min-width: 1200px) {
    height: calc(8rem + 20vh);
  }  */
  }

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(25% + 10rem);
    height: auto;
    transform: translate(-50%, -50%);

    @media (min-width: 768px) {
      width: calc(35% + 15rem);
    }
  }

  :hover {
    filter: drop-shadow(0px 4px 8px #ffccef) drop-shadow(0px 12px 28px #771166);
    animation: pushUp 0.2s ease-out 0s 1 forwards, lightUp 1s ease-in-out 0.3s infinite,
      wiggle 1s ease-in-out 0.3s infinite;
    z-index: 1500;
  }
`

const Cardback = styled.img``
