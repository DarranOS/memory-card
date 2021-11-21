const currentSelectedCard = (state = "", action) => {
  switch (action.type) {
    case "change":
      return action.payload;
    default:
      return state;
  }
};

export default currentSelectedCard;
