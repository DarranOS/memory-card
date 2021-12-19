const CardInfo = [
  { name: "treva", manaValue: 6 },
  { name: "darigaaz", manaValue: 6 },
  { name: "rith", manaValue: 6 },
  { name: "dromar", manaValue: 6 },
  { name: "crosis", manaValue: 6 },
  { name: "atarka", manaValue: 6 },
  { name: "dromoka", manaValue: 6 },
  { name: "kolaghan", manaValue: 6 },
  { name: "silumgar", manaValue: 6 },
  { name: "ojutai", manaValue: 6 },
];

const CardRandomizer = () => {
  // Shuffles the cards and selects/returns 5 random cards
  const randomizedCards = [...CardInfo];
  randomizedCards.sort(() => Math.random() - 0.5);
  randomizedCards.sort(() => Math.random() - 0.5);
  randomizedCards.sort(() => Math.random() - 0.5);
  while (randomizedCards.length > 5) {
    randomizedCards.pop();
  }
  return randomizedCards;
};

const currentCardChoicesReducer = (state = CardRandomizer(), action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default currentCardChoicesReducer;
