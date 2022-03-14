export const shuffleCards = () => {
  return (dispatch) => {
    dispatch({
      type: 'shuffle',
    })
  }
}

export const clearingCards = () => {
  return (dispatch) => {
    dispatch({
      type: 'clear',
    })
  }
}

export const increaseCurrentScore = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'increase',
      payload: amount,
    })
  }
}

export const resetCurrentScore = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'reset',
      payload: amount,
    })
  }
}

export const increaseHighScore = (amount) => {
  return (dispatch) => {
    dispatch({
      type: 'increaseHigh',
      payload: amount,
    })
  }
}

export const selectedCardsReducer = (string) => {
  return (dispatch) => {
    dispatch({
      type: 'select',
      payload: string,
    })
  }
}
export const resetScoreUI = () => {
  return (dispatch) => {
    dispatch({
      type: 'resetScoreUI',
    })
  }
}
export const increaseScoreUI = () => {
  return (dispatch) => {
    dispatch({
      type: 'increaseScoreUI',
    })
  }
}
export const defaultScoreUI = () => {
  return (dispatch) => {
    dispatch({
      type: 'defaultScoreUI',
    })
  }
}
export const increaseHighScoreUI = () => {
  return (dispatch) => {
    dispatch({
      type: 'increaseHighScoreUI',
    })
  }
}

export const defaultHighScoreUI = () => {
  return (dispatch) => {
    dispatch({
      type: 'defaultHighScoreUI',
    })
  }
}
