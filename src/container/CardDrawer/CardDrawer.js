import React, { useState, useEffect } from "react";

import CardInfo from "../../components/Card/CardInfo/CardInfo";
import Card from "../../components/Card/Card";
import classes from "./CardDrawer.module.css";

export const CardDrawer = () => {
  const [RandomCards, setRandomCards] = useState([]);
  const [SelectedCard, setSelectedCard] = useState([]);
  const [HighScore, setHighScore] = useState(0);
  const [CurrentScore, setCurrentScore] = useState(0);

  //   useEffect(() => {
  //     console.log(CurrentScore);
  //   }, [CurrentScore]);

  //   useEffect(() => {
  //     console.log(SelectedCard);
  //   }, [SelectedCard]);

  const RandomCardHandler = () =>
    setRandomCards(CardInfo.sort(() => Math.random() - 0.5));

  const SelectedCardHandler = (name) => {
    if (SelectedCard.includes(name.id)) {
      setCurrentScore(0);
      resetSelectedCards();
      RandomCardHandler();
    } else {
      setSelectedCard(SelectedCard.concat(name.id));
      setCurrentScore(CurrentScore + 1);
      if (CurrentScore >= HighScore) {
        setHighScore(HighScore + 1);
      }
      RandomCardHandler();
    }
  };

  const resetSelectedCards = () => {
    for (let i = SelectedCard.length; i > 0; i--) {
      setSelectedCard(SelectedCard.pop());
      setSelectedCard([]);
    }
  };

  return (
    <div className={classes.Container}>
      <button onClick={RandomCardHandler}>Click</button>
      <p>Current Score: {CurrentScore}</p>
      <p>High Score: {HighScore}</p>
      <ul>
        {RandomCards.map((card) => (
          <li
            key={card.name}
            id={card.name}
            onClick={(e) => {
              SelectedCardHandler(e.target.closest("li"));
            }}
          >
            <Card card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardDrawer;
