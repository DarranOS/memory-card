// This reducer is responsible for choosing and clearing which cards are currently visible.

const CardInfo = [
  { name: 'treva' },
  { name: 'darigaaz' },
  { name: 'rith' },
  { name: 'dromar' },
  { name: 'crosis' },
  { name: 'atarka' },
  { name: 'dromoka' },
  { name: 'kolaghan' },
  { name: 'silumgar' },
  { name: 'ojutai' },
]

const CardRandomizer = () => {
  // Uses ES6 destructuring to copy the above array to a new place in memory.
  const randomizedCards = [...CardInfo]

  // Sorts the new array with a random seed three times to create a sufficiently randomised array.
  randomizedCards.sort(() => Math.random() - 0.5)
  randomizedCards.sort(() => Math.random() - 0.5)
  randomizedCards.sort(() => Math.random() - 0.5)

  // Cuts off the last four items in the array to return 6.
  while (randomizedCards.length > 6) {
    randomizedCards.pop()
  }

  return randomizedCards
}

// The currentCardChoicesReducer has two actions, if can 'shuffle' the cards and clear out the current selection.

const currentCardChoicesReducer = (state = CardRandomizer(), action) => {
  switch (action.type) {
    case 'shuffle':
      // Calls the function above to return a new array and adds it to state
      const newArray = CardRandomizer()
      return newArray
    case 'clear':
      return []
    default:
      return state
  }
}

export default currentCardChoicesReducer
