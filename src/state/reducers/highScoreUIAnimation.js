// This reducer updates the UI to change the Scores component. "increasing" and "default" have different colour values in the Scores component

const highScoreUIAnimation = (state = 'default', action) => {
  switch (action.type) {
    case 'increaseHighScoreUI':
      return 'increasing'
    case 'defaultHighScoreUI':
      return 'default'
    default:
      return state
  }
}

export default highScoreUIAnimation
