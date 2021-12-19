const selectedCardsReducer = (state = [], action) => {
  switch (action.type) {
    case "select":
      const newSelection = action.payload;
      const newArray = [...state];
      return {
        ...state,
        selected: newArray.push(newSelection),
      };
    case "reset":
      return [];
    default:
      return state;
  }
};

export default selectedCardsReducer;
