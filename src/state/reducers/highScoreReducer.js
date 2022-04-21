// This reducer increases the high score display.

const highScoreReducer = (state = 5, action) => {
  switch (action.type) {
    case 'increaseHigh':
      return state + action.payload
    default:
      return state
  }
}

export default highScoreReducer
