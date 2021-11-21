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

export const currentSelectedCard = (string) => {
  console.log(string);
  const timeout = (ms) => {
    // Defines Timeout helper
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const renderAlert = async (string) => {
    // Pushs cards to state and resets incorrect toggle
    await timeout(5000);
    alert(`Wee!! ${string}`);
  };

  renderAlert(string);

  return (dispatch) => {
    dispatch({
      type: "change",
      payload: string,
    });
  };
};
