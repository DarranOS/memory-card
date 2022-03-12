import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion'

const CardDrawer = ({ children }) =>
  // Returns a div with the
  // ? "layout" motion property https://www.framer.com/docs/animate-shared-layout/
  // ? and wrapped in AnimatePresence https://www.framer.com/docs/animate-presence/
  // and populates it with its children(cards).
  {
    return (
      <Container layout>
        <AnimatePresence>{children}</AnimatePresence>
      </Container>
    )
  }

export default CardDrawer

// Styling below

const Container = styled(motion.div)`
  width: 86%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto, auto, auto;
  row-gap: 1vh;
  column-gap: 4vw;
  place-items: center start;
  perspective: 1000px;
  height: calc(90vh - 4vh);
  background: lime;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto, auto;
    width: 80%;
    row-gap: 0vh;
    column-gap: 4vw;
  }

  li {
    list-style: none;
    perspective: 1000px;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    background: yellow;

    @media (min-width: 768px) {
      height: 90%;
      width: 80%;
      padding: 20px;
    }
  }
`
