const highScoreReducer = (state = 6, action) => {
  switch (action.type) {
    case "increaseHigh":
      return state + action.payload;
    default:
      return state;
  }
};

export default highScoreReducer;
