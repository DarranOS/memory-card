import styled from 'styled-components'
import { images } from '../constants/images'
import { motion } from 'framer-motion/dist/framer-motion'

const Card = ({ src }) => {
  // Returns a div with both faces of the card. Is a motion div with the
  // ? "layout" motion property https://www.framer.com/docs/animate-shared-layout/

  return (
    <Container
      id="Container"
      layout
      initial={{ scale: 0.2, opacity: 0, rotateY: -180 }}
      animate={{ scale: 1, opacity: 1, rotateY: 0 }}
      exit={{ scale: 0.2, opacity: 0, rotateY: -180 }}
      transition={{ duration: 0.2 }}
    >
      <BackImage />
      <FrontImage art={images[src]} />
    </Container>
  )
}

export default Card

// Styling only below

const Container = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 70%;
  filter: drop-shadow(0px 4px 16px transparent) drop-shadow(0px 12px 24px transparent);
  cursor: pointer;
  transition: all 1s ease-out;

  :hover {
    filter: drop-shadow(0px 4px 8px #ffccef) drop-shadow(0px 12px 28px #771166);
    animation: pushUp 0.2s ease-out 0s 1 forwards, lightUp 1s ease-in-out 0.3s infinite,
      wiggle 1s ease-in-out 0.3s infinite;
  }
`

const FrontImage = styled(motion.div)`
  opacity: 1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transform: rotateY(0);
  position: absolute;
  background: ${(props) => props.art && `url(${props.art})`};
  background-size: cover;
  height: 100%;
  width: 100%;
`

const BackImage = styled(FrontImage)`
  transform: rotateY(180deg);
  background: url(${images.cardback});
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  background-size: cover;
`
