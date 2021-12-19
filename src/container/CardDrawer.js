import React, { useState, useEffect } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import styled from "styled-components";

export const CardDrawer = () => {
  const scores = useSelector((state) => state);
  const [RandomCards, setRandomCards] = useState([]);
  const [SelectedCard, setSelectedCard] = useState([]);
  const [HighScore, setHighScore] = useState(0);
  const [CurrentScore, setCurrentScore] = useState(0);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [didHighScoreIncrease, setDidHighScoreIncrease] = useState(false);
  const [didScoreReset, setDidScoreReset] = useState(false);

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

  // Utility functions -----------------------------

  const dispatch = useDispatch();

  const { increaseCurrentScore, resetCurrentScore, increaseHighScore } =
    bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    //Initialises App
    RandomCardHandler();
  }, []);

  useEffect(() => {
    // Handles the Card Refresh Animation change
    setRefresh(true);
    const scoreHandler = async () => {
      await timeout(100);

      setRefresh(false);
    };
    scoreHandler();
  }, [refresh]);

  useEffect(() => {
    // Handles the High Score Animation change
    setDidHighScoreIncrease(true);
    const scoreHandler = async () => {
      await timeout(100);

      setDidHighScoreIncrease(false);
    };
    scoreHandler();
  }, [HighScore]);

  useEffect(() => {
    if (CurrentScore === 0) {
      setDidScoreReset(true);
      const scoreHandler = async () => {
        await timeout(100);

        setDidScoreReset(false);
      };
      scoreHandler();
    }
  }, [CurrentScore]);

  useEffect(() => {
    // Handles the Scores Animation change
    setDidHighScoreIncrease(true);
    const scoreHandler = async () => {
      await timeout(100);

      setDidHighScoreIncrease(false);
    };
    scoreHandler();
  }, [HighScore]);

  useEffect(() => {
    console.log(`IsCancelling change: ${isCancelled}`);
  }, [isCancelled]);

  const timeout = (ms) => {
    // Defines Timeout helper
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

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

  const incorrectToggleHandler = () => {
    // Toggles the incorrect state when an incorrect card is selected.
    setIsIncorrect(!isIncorrect);
  };

  const spawnCards = async (cards) => {
    // Pushs cards to state and resets incorrect toggle
    console.log(`Spawn Cards - Cancelled? ${isCancelled}`);
    await timeout(1000);
    if (!isCancelled) {
      console.log(`Spawn Cards - Pushing cards to Array`);
      setRandomCards(cards);
    }
    console.log(`Spawn Cards - Incorrect? ${isIncorrect}`);
    if (isIncorrect) incorrectToggleHandler();
  };

  const RandomCardHandler = () => {
    // Takes the 5 random cards
    const drawnCards = CardRandomizer();
    console.log("Refreshing in 3...2...1...");
    spawnCards(drawnCards);

    return () => {
      setIsCancelled(true);
    };
  };

  const resetSelectedCards = () => {
    // Clears the array of selected cards and calls the RandomCard handler
    for (let i = SelectedCard.length; i > 0; i--) {
      setSelectedCard(SelectedCard.pop());
      setSelectedCard([]);
    }
    RandomCardHandler();
  };

  const SelectedCardHandler = (name) => {
    console.log(name.id);
    if (SelectedCard.includes(name.id)) {
      console.error("INCORRECT");
      resetCurrentScore(0);
      if (!isIncorrect) incorrectToggleHandler();
      resetSelectedCards();
    } else {
      console.info("CORRECT");
      setSelectedCard(SelectedCard.concat(name.id));
      increaseCurrentScore(1);
      if (scores.current >= scores.high) {
        increaseHighScore(1);
      }
      RandomCardHandler();
    }
  };

  const listItems = RandomCards.map((card) => (
    <li
      id={card.name}
      onClick={(e) => {
        SelectedCardHandler(e.target.closest("li"));
      }}
    >
      <Card card={card} refresh={false} />
    </li>
  ));

  return (
    // Returns JSX
    <Container>
      <ul>{listItems}</ul>
    </Container>
  );
};

export default CardDrawer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  ${"" /* overflow: hidden; */}
  width: 100%;

  ul {
    display: flex;
    margin-top: -22%;

    li {
      list-style: none;
    }
  }
`;
