import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion/dist/framer-motion'

const CardDrawer = ({ children }) =>
  // Returns a div with the
  // ? "layout" motion property https://www.framer.com/docs/animate-shared-layout/
  // ? and wrapped in AnimatePresence https://www.framer.com/docs/animate-presence/
  // and populates it with its children(cards).
  {
    return (
      <AnimatePresence>
        <Container layout>{children}</Container>
      </AnimatePresence>
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
  height: calc(90vh - 4vh);
  perspective: 1000px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto, auto;
    width: 90%;
    row-gap: 0vh;
    column-gap: 2vw;
    height: calc(96vh - 4vh);
  }

  li {
    list-style: none;
    perspective: 1000px;
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;

    @media (min-width: 768px) {
      height: 100%;
      width: 100%;
      padding: 10px;
    }
  }
`
