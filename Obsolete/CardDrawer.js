import React, { useState } from 'react'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import styled from 'styled-components'

export const CardDrawer = () => {
  // Redux Settings

  const state = useSelector((state) => state)
  const cardChoicePool = state.choices
  const selectedCards = state.selected

  const [isReseting, setIsReseting] = useState(false)

  const dispatch = useDispatch()

  const {
    selectedCardsReducer,
    increaseCurrentScore,
    resetCurrentScore,
    shuffleCards,
    clearingCards,
  } = bindActionCreators(actionCreators, dispatch)

  const SelectedCardHandler = (str) => {
    console.log(str)
    setIsReseting(!isReseting)
    // Checks if the selected cards ID (str) is included in the array of previously selected cards.
    clearingCards()

    if (selectedCards.includes(str)) {
      resetCurrentScore(0)
    } else {
      selectedCardsReducer(str)
      increaseCurrentScore(1)
    }
    setTimeout(() => {
      shuffleCards()
      setIsReseting(!isReseting)
    }, 500)
  }

  const GenerateCard = (card) => {
    // Maps through the array of randomly chosen cards to display 6 images.
    return (
      <li
        id={card.name}
        key={card.name}
        onClick={(e) => {
          SelectedCardHandler(card.name)
        }}
      >
        <Card src={card.name}></Card>
      </li>
    )
  }

  return (
    <Container>
      {cardChoicePool.map((card) => (
        <GenerateCard key={card.name} name={card.name} />
      ))}
    </Container>
  )
}

export default CardDrawer

const Container = styled.div`
  width: 86%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto, auto, auto;
  row-gap: 2vh;
  column-gap: 4vw;
  place-items: center start;
  perspective: 1000px;
  height: calc(90vh - 4vh);

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto, auto;
    width: 80%;
    row-gap: 5vh;
    column-gap: 4vw;
  }

  li {
    list-style: none;
    perspective: 1000px;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;

    @media (min-width: 768px) {
      height: 70%;
      width: 80%;
      padding: 20px;
    }
  }
`
