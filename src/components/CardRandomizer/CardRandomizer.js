import CardInfo from "../Card/CardInfo/CardInfo";

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

export default CardRandomizer;
