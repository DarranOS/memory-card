import React, { useState } from 'react'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

export const CardDealer = () => {
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
    <>
      {cardChoicePool.map((card) => (
        <GenerateCard key={card.name} name={card.name} />
      ))}
    </>
  )
}

export default CardDealer
