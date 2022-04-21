import styled from 'styled-components'
import { images } from 'constants/images'

const Card = ({ src }) => {
  return (
    <Container id="Container">
      <BackImage />
      <FrontImage art={images[src]} />
    </Container>
  )
}

export default Card

// Styling only below

const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  filter: drop-shadow(0px 4px 16px transparent) drop-shadow(0px 12px 24px transparent);
  cursor: pointer;
  transition: all 1s ease-out;

  :hover {
    filter: drop-shadow(0px 4px 8px #ffccef) drop-shadow(0px 12px 28px #771166);
    animation: pushUp 0.2s ease-out 0s 1 forwards, lightUp 1s ease-in-out 0.3s infinite,
      wiggle 1s ease-in-out 0.3s infinite;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`

const FrontImage = styled.div`
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
