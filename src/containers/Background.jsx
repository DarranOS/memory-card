import styled from 'styled-components'
import { images } from '../constants/images'

// Returns Background component

const Background = () => {
  return <Container desktop={images.bg} mobile={images.mbg} />
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
    background-size: cover;
  }
`
