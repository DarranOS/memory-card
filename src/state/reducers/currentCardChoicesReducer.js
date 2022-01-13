const CardInfo = [
  { name: "treva" },
  { name: "darigaaz" },
  { name: "rith" },
  { name: "dromar" },
  { name: "crosis" },
  { name: "atarka" },
  { name: "dromoka" },
  { name: "kolaghan" },
  { name: "silumgar" },
  { name: "ojutai" },
];

const CardRandomizer = () => {
  // Shuffles the cards and selects/returns 6 random cards
  const randomizedCards = [...CardInfo];
  randomizedCards.sort(() => Math.random() - 0.5);
  randomizedCards.sort(() => Math.random() - 0.5);
  randomizedCards.sort(() => Math.random() - 0.5);
  while (randomizedCards.length > 6) {
    randomizedCards.pop();
  }

  return randomizedCards;
};

const currentCardChoicesReducer = (state = CardRandomizer(), action) => {
  switch (action.type) {
    case "shuffle":
      const newArray = CardRandomizer();
      return newArray;
    case "clear":
      return [];
    default:
      return state;
  }
};

export default currentCardChoicesReducer;
