import { combineReducers } from "redux";
import currentScoreReducer from "./currentScoreReducer";
import highScoreReducer from "./highScoreReducer";
import currentSelectedCard from "./currentSelectedCard";

const reducers = combineReducers({
  current: currentScoreReducer,
  high: highScoreReducer,
  selected: currentSelectedCard,
});

export default reducers;
