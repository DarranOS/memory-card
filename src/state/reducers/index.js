import { combineReducers } from "redux";
import currentScoreReducer from "./currentScoreReducer";
import highScoreReducer from "./highScoreReducer";

const reducers = combineReducers({
  current: currentScoreReducer,
  high: highScoreReducer,
});

export default reducers;
