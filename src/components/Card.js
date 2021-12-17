import React from "react";
import Artwork from "./Artwork";
import cardback from "../assets/img/cardback.png";
import styled from "styled-components";

const Card = (props) => {
  return (
    <CardContainer>
      <CardFront>
        <Artwork art={props.card.name} />
      </CardFront>
      <Cardback>
        <img alt="cardback" src={cardback} />
      </Cardback>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 15vw;
  height: 200px;
  max-width: 200px;
  transition: all 0.5s;
  position: relative;
  filter: drop-shadow(0px 4px 16px transparent) drop-shadow(0px 12px 36px transparent);
  transition: filter 300ms ease-out;
  background-color: hotpink;

  &:hover {
    filter: drop-shadow(0px 4px 8px #ffccef) drop-shadow(0px 12px 28px #771166);
    animation: pushUp 0.2s ease-out 0.1s 1 forwards, wiggle 1s ease-out 0.8s infinite;
    z-index: 10;
  }
`;

const CardFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: 10% 90%;
  transition: all 0.3s ease-out;
  z-index: 1;

  img {
    width: 100%;
  }
`;

const Cardback = styled(CardFront)`
  z-index: -1;
`;
