export const increaseCurrentScore = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "increase",
      payload: amount,
    });
  };
};

export const resetCurrentScore = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "reset",
      payload: amount,
    });
  };
};

export const increaseHighScore = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "increaseHigh",
      payload: amount,
    });
  };
};