import styled from 'styled-components'
import { images } from '../constants/images'
import { motion } from 'framer-motion/dist/framer-motion'

const Card = ({ src }) => {
  // Returns a div with both faces of the card. Is a motion div with the
  // ? "layout" motion property https://www.framer.com/docs/animate-shared-layout/

  return (
    <Container
      layout
      initial={{ opacity: 0, rotateY: 180 }}
      animate={{ opacity: 1, rotateY: 0 }}
      exit={{ opacity: 0, rotateY: 180 }}
      transition={{ duration: 0.2 }}
    >
      <BackImage>
        <img alt="cardback" src={images.cardback} />
      </BackImage>
      <FrontImage>
        <img alt="dragon-art" src={images[src]} />
      </FrontImage>
    </Container>
  )
}

export default Card

// Styling only below

const Container = styled(motion.div)`
  position: relative;
  height: 100%;
  width: 100%;
  filter: drop-shadow(0px 4px 16px transparent) drop-shadow(0px 12px 24px transparent);
  transition: all 1s ease-out;
  transform-style: preserve-3d;
  transform-origin: center;
  -webkit-backface-visibility: initial;
  backface-visibility: initial;
  background: red;

  :hover {
    filter: drop-shadow(0px 4px 8px #ffccef) drop-shadow(0px 12px 28px #771166);
    animation: pushUp 0.2s ease-out 0s 1 forwards, lightUp 1s ease-in-out 0.3s infinite,
      wiggle 1s ease-in-out 0.3s infinite;
  }
`

const FrontImage = styled.div`
  opacity: 1;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transform-origin: center;
  -webkit-transform-style: preserve-3d;
  transform: rotateY(0);
  position: absolute;
  background: blue;

  img {
    width: calc(25% + 10rem);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  @media (min-width: 768px) {
    img {
      width: 100%;
    }
  }
`

const BackImage = styled(FrontImage)`
  transform: rotateY(180deg);
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  background: white;

  img {
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
    background: white;
  }
`
