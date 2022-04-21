import styled from 'styled-components'
import { images } from 'constants/images'
import { useSelector } from 'react-redux'

// Returns Background component

const Background = () => {
  // The score variable sends props to the color below. Background flashes red when score resets.

  const score = useSelector((state) => state)

  return <Container desktop={images.bg} mobile={images.mbg} scoreUI={score.scoreUI} />
}

export default Background

// Styling for the Background Component

const Container = styled.div`
  background: ${(props) => props.mobile && `url(${props.mobile})`}, rgba(40, 0, 20, 0.5);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: multiply;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -10;

  @media (min-width: 768px) {
    background: ${(props) =>
      props.desktop && `url(${props.desktop}), rgba(40, 0, 20, 0.5)`};
    background-color: ${(props) =>
      props.scoreUI === 'reseting' ? 'rgba(238, 43, 126, 0.95)' : 'rgba(40, 0, 20, 0.5)'};
    background-size: cover;
  }
`
