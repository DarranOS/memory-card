// This reducer is responsible for keeping track of which cards the user has previously selected. When a user clicks the same card twice, the array is reset.

const selectedCardsReducer = (state = [], action) => {
  switch (action.type) {
    case 'select':
      // action.payload is a string containing the selected cardname
      const newSelection = action.payload

      // Uses ES6 destructuring to create a new array and append the payload (str: cardname) to the array.
      const newArray = [...state, newSelection]
      return newArray

    case 'reset':
      // Replaces the state with an empty array.
      return []
    default:
      return state
  }
}

export default selectedCardsReducer
