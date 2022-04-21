// This reducer updates the UI to change the Scores component. "increasing", "reseting" and "default" have different colour values in the Scores component

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
