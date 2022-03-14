const highScoreUIAnimation = (state = 'default', action) => {
  switch (action.type) {
    case 'increaseHighScoreUI':
      console.log('High Score 1')
      return 'increasing'
    case 'defaultHighScoreUI':
      return 'default'
    default:
      return state
  }
}

export default highScoreUIAnimation
