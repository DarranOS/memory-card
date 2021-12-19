import React from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import styled from "styled-components";

export const CardDrawer = () => {
  // Redux Settings

  const state = useSelector((state) => state);
  const cardSelection = state.choices;
  const selectedCards = state.selected;

  console.log(state);

  const dispatch = useDispatch();

  const {
    increaseCurrentScore,
    resetCurrentScore,
    increaseHighScore,
    selectedCardsReducer,
  } = bindActionCreators(actionCreators, dispatch);

  const SelectedCardHandler = (str) => {
    // TODO Selected Card Handler takes the id of the selected card,
    // array.includes (resets)
    resetCurrentScore(1);
    selectedCardsReducer(str);
  };

  const listItems = cardSelection.map((card) => (
    <li
      id={card.name}
      key={card.name}
      onClick={(e) => {
        SelectedCardHandler(e.target.closest("li").id);
      }}
    >
      <Card card={card} refresh={false} />
    </li>
  ));

  const listedItems = selectedCards.map((card) => (
    <li id={card.name} key={card.name}>
      <p>{card.name}</p>
    </li>
  ));

  return (
    // Returns JSX
    <Container>
      <ul>{listItems}</ul>
      {selectedCards && <ul>{listedItems}</ul>}
    </Container>
  );
};

export default CardDrawer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${"" /* overflow: hidden; */}
  width: 100%;

  ul {
    display: flex;
    margin-top: -22%;

    li {
      list-style: none;
    }
  }
`;
