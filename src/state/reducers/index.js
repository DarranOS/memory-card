import { combineReducers } from 'redux'
import currentScoreReducer from './currentScoreReducer'
import highScoreReducer from './highScoreReducer'
import selectedCardsReducer from './selectedCardsReducer'
import currentCardChoicesReducer from './currentCardChoicesReducer'
import scoreUIAnimation from './scoreUIAnimation'
import highScoreUIAnimation from './highScoreUIAnimation'

const reducers = combineReducers({
  current: currentScoreReducer,
  high: highScoreReducer,
  selected: selectedCardsReducer,
  choices: currentCardChoicesReducer,
  scoreUI: scoreUIAnimation,
  highScoreUI: highScoreUIAnimation,
})

export default reducers
