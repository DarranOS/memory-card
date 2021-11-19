import React, { useState, useEffect } from "react";
import CardInfo from "../../components/Card/CardInfo/CardInfo";
import Card from "../../components/Card/Card";
import classes from "./CardDrawer.module.css";
import { TransitionGroup } from "react-transition-group";
import CSSTransition from "react-transition-group/CSSTransition";
import Scores from "../../components/Scores/Scores";
import Instructions from "../../components/Instructions/Instructions";

export const CardDrawer = () => {
  const [RandomCards, setRandomCards] = useState([]);
  const [SelectedCard, setSelectedCard] = useState([]);
  const [HighScore, setHighScore] = useState(0);
  const [CurrentScore, setCurrentScore] = useState(0);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [didHighScoreIncrease, setDidHighScoreIncrease] = useState(false);
  const [didScoreReset, setDidScoreReset] = useState(false);

  // Utility functions -----------------------------

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
      setCurrentScore(0);
      if (!isIncorrect) incorrectToggleHandler();
      resetSelectedCards();
    } else {
      console.info("CORRECT");
      setSelectedCard(SelectedCard.concat(name.id));
      setCurrentScore(CurrentScore + 1);
      if (CurrentScore >= HighScore) {
        setHighScore(HighScore + 1);
      }
      RandomCardHandler();
    }
  };

  const listItems = RandomCards.map((card) => (
    <CSSTransition key={card.name} classNames="fade" timeout={300} unmountOnExit>
      <li
        id={card.name}
        onClick={(e) => {
          SelectedCardHandler(e.target.closest("li"));
        }}
      >
        <Card card={card} refresh={false} />
      </li>
    </CSSTransition>
  ));

  return (
    // Returns JSX
    <div className={classes.Container}>
      <Scores
        className={classes.Scores2}
        highScore={HighScore}
        didHighIncrease={didHighScoreIncrease}
        didScoreReset={didScoreReset}
        currentScore={CurrentScore}
      />
      <TransitionGroup component="ul">{listItems}</TransitionGroup>

      <Instructions className={classes.Instructions} incorrect={isIncorrect} />
    </div>
  );
};

export default CardDrawer;

// useEffect(() => {}, [randomCards]);

// const RandomCardHandler = () => {
//   const randomCards = CardRandomizer();
//   let isCancelled = false;
//   console.log("Refreshing in 3...2...1...");
//   const spawnCards = async () => {
//     console.log(isCancelled);
//     await timeout(3000);
//     if (!isCancelled) {
//       console.log("Refreshing!!");
//       setRandomCards(randomCards);
//     }
//   };
//   spawnCards();
//   if (Failed) failedToggleHandler();

//   return () => {
//     console.log("Unmounting");
//     isCancelled = true;
//   };
// };

// const transitionStyles = {
//   entering: { opacity: 1 },
//   entered: { opacity: 1 },
//   exiting: { opacity: 0 },
//   exited: { opacity: 0 },
// };

// const animationTiming = {
//   enter: 400,
//   exit: 1000,
// };

// const defaultStyle = {
//   transition: `opacity ${animationTiming}ms ease-in-out`,
//   opacity: 0,
// };
