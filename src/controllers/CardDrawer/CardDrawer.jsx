import styled from 'styled-components'
import { Card } from 'components'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from 'state/index'
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion'

const CardDrawer = () =>
  // Returns a div with the
  // ? "layout" motion property https://www.framer.com/docs/animate-shared-layout/
  // ? and wrapped in AnimatePresence https://www.framer.com/docs/animate-presence/
  // and populates it with its children(cards).
  {
    // Redux Settings
    const state = useSelector((state) => state)
    const cardPool = state.choices
    const selectedCards = state.selected

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

    // -------End of Redux

    const selectedCardHandler = (str) => {
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
      }, 1000)
    }

    // Utility function to create individual Card components
    const generateCard = (card) => {
      return (
        <CardList
          initial={{ y: -50, scale: 0.5, opacity: 0, rotateY: 180 }}
          animate={{ y: 0, scale: 1, opacity: 1, rotateY: 0 }}
          exit={{
            scale: 0.5,
            opacity: 0,
            rotateY: -180,
            transition: { duration: 0.6, ease: 'easeIn' },
          }}
          transition={{ duration: 0.4, ease: 'easeIn' }}
          key={card.name}
          onClick={() => selectedCardHandler(card.name)}
        >
          <Card src={card.name} id={card.name} name={card.name} />{' '}
        </CardList>
      )
    }

    return (
      <Container>
        <AnimatePresence>{cardPool.map((card) => generateCard(card))}</AnimatePresence>
      </Container>
    )
  }

export default CardDrawer

// Styling below

const Container = styled(motion.div)`
  width: 94%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto, auto, auto;
  row-gap: 1vh;
  column-gap: 4vw;
  place-items: center start;
  height: calc(90vh - 4vh);
  perspective: 2000px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto, auto;
    width: 90%;
    row-gap: 0vh;
    column-gap: 2vw;
    height: calc(96vh - 4vh);
  }
`

const CardList = styled(motion.li)`
  list-style: none;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;

  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
    padding: 10px;
  }
`
