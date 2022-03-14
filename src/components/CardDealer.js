import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import styled from 'styled-components'
import { motion } from 'framer-motion/dist/framer-motion'

export const CardDealer = () => {
  // Redux Settings

  const state = useSelector((state) => state)
  const cardChoicePool = state.choices
  const selectedCards = state.selected
  console.log(state)

  const dispatch = useDispatch()

  const {
    selectedCardsReducer,
    increaseCurrentScore,
    resetCurrentScore,
    increaseHighScore,
    shuffleCards,
    clearingCards,
    resetScoreUI,
    increaseScoreUI,
    increaseHighScoreUI,
    defaultScoreUI,
    defaultHighScoreUI,
  } = bindActionCreators(actionCreators, dispatch)

  const SelectedCardHandler = (str) => {
    console.log(str)

    // Checks if the selected cards ID (str) is included in the array of previously selected cards.
    clearingCards()

    if (selectedCards.includes(str)) {
      resetCurrentScore(0)
      resetScoreUI()
    } else {
      selectedCardsReducer(str)
      increaseScoreUI()
      increaseCurrentScore(1)
      if (state.current >= state.high) {
        increaseHighScore(1)
        increaseHighScoreUI()
      }
    }

    setTimeout(() => {
      shuffleCards()
      defaultScoreUI()
      defaultHighScoreUI()
    }, 500)
  }

  const GenerateCard = (card) => {
    // Maps through the array of randomly chosen cards to display 6 images.
    return (
      <CardList
        id={card.name}
        key={card.name}
        onClick={(e) => {
          SelectedCardHandler(card.name)
        }}
      >
        <Card src={card.name} />
      </CardList>
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

const CardList = styled(motion.li)``
