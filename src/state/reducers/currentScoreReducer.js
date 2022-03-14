const currentScoreReducer = (state = 0, action) => {
  switch (action.type) {
    case 'increase':
      return state + action.payload
    case 'reset':
      return 0
    default:
      return state
  }
}

export default currentScoreReducer
