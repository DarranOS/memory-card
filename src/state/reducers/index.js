import { combineReducers } from "redux";
import currentScoreReducer from "./currentScoreReducer";
import highScoreReducer from "./highScoreReducer";
import selectedCardsReducer from "./selectedCardsReducer";
import currentCardChoicesReducer from "./currentCardChoicesReducer";

const reducers = combineReducers({
  current: currentScoreReducer,
  high: highScoreReducer,
  selected: selectedCardsReducer,
  choices: currentCardChoicesReducer,
});

export default reducers;
