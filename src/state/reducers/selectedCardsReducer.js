const selectedCardsReducer = (state = [], action) => {
  switch (action.type) {
    case "select":
      const newSelection = action.payload;
      const newArray = [...state, newSelection];
      return newArray;
    case "reset":
      return [];
    default:
      return state;
  }
};

export default selectedCardsReducer;
