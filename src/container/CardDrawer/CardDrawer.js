import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import CardInfo from "../../components/Card/CardInfo/CardInfo";
import Card from "../../components/Card/Card";
import classes from "./CardDrawer.module.css";
import Transition from "react-transition-group/Transition";
import { TransitionGroup } from "react-transition-group";
import CSSTransition from "react-transition-group/CSSTransition";

export const CardDrawer = () => {
  const [RandomCards, setRandomCards] = useState([]);
  const [SelectedCard, setSelectedCard] = useState([]);
  const [HighScore, setHighScore] = useState(0);
  const [CurrentScore, setCurrentScore] = useState(0);
  const [Failed, setFailed] = useState(false);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => console.log(`Failed: ${Failed}`), [Failed]);

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const animationTiming = {
    enter: 400,
    exit: 1000,
  };

  const defaultStyle = {
    transition: `opacity ${animationTiming}ms ease-in-out`,
    opacity: 0,
  };

  const failedHandler = (booleen) => {
    setFailed(booleen);
  };

  const RandomCardHandler = () => {
    const randomCards = [...CardInfo];
    randomCards.sort(() => Math.random() - 0.5);
    while (randomCards.length > 5) {
      randomCards.pop();
    }
    setRandomCards(randomCards);
    failedHandler(false);
  };

  const SelectedCardHandler = (name) => {
    if (SelectedCard.includes(name.id)) {
      setCurrentScore(0);
      resetSelectedCards();
      failedHandler(true);
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

  const listItems = RandomCards.map((card) => (
    <CSSTransition key={card.name} classNames="fade" timeout={300}>
      <li
        id={card.name}
        onClick={(e) => {
          SelectedCardHandler(e.target.closest("li"));
        }}
      >
        <Card card={card} />
      </li>
    </CSSTransition>
  ));

  return (
    <div className={classes.Container}>
      <button className="Button" onClick={RandomCardHandler}>
        Click
      </button>

      <p>Current Score: {CurrentScore}</p>
      <p>High Score: {HighScore}</p>
      {/* <ul>
        {RandomCards.map((card) => (
          <Transition
            key={card.name}
            in={refresh}
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
            onEnter={() => console.log("onEnter")}
            onEntering={() => console.log("onEntering")}
            onEntered={() => console.log("onEntered")}
            onExit={() => console.log("onExit")}
            onExiting={() => console.log("onExiting")}
            onExited={() => console.log("onExited")}
          >
            {(state) => (
              <div
                style={{
                  ...defaultStyle,
                  ...transitionStyles[state],
                }}
              >
                <li
                  key={card.name}
                  id={card.name}
                  onClick={(e) => {
                    SelectedCardHandler(e.target.closest("li"));
                  }}
                >
                  <Card card={card} />
                  <p> {state} </p>
                </li>
              </div>
            )}
          </Transition>
        ))}
      </ul> */}
      <TransitionGroup component="ul">{listItems}</TransitionGroup>

      {Failed ? <Modal /> : null}
    </div>
  );
};

export default CardDrawer;
