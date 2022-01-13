export const shuffleCards = () => {
  return (dispatch) => {
    dispatch({
      type: "shuffle",
    });
  };
};

export const clearingCards = () => {
  return (dispatch) => {
    dispatch({
      type: "clear",
    });
  };
};

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

export const selectedCardsReducer = (string) => {
  return (dispatch) => {
    dispatch({
      type: "select",
      payload: string,
    });
  };
};
