// This component returns a <img> with the appropriate artwork for the randomly generated card.

import { images } from '../src/constants'

const Artwork = ({ src }) => {
  const source = (src) => {
    switch (src) {
      case 'atarka':
        return images.atarka

      case 'crosis':
        return images.crosis

      case 'darigaaz':
        return images.darigaaz

      case 'dromar':
        return images.dromar

      case 'dromoka':
        return images.dromoka

      case 'kolaghan':
        return images.kolaghan

      case 'ojutai':
        return images.ojutai

      case 'rith':
        return images.rith

      case 'silumgar':
        return images.silumgar

      case 'treva':
        return images.treva

      default:
        return images.cardback
    }
  }

  return <img alt="dragon-art" src={source(src)}></img>
}

export default Artwork
