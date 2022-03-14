const scoreUIAnimation = (state = 'default', action) => {
  switch (action.type) {
    case 'increaseScoreUI':
      return 'increasing'
    case 'resetScoreUI':
      return 'reseting'
    case 'defaultScoreUI':
      return 'default'

    default:
      return state
  }
}

export default scoreUIAnimation
