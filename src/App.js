import classes from "./App.css";
import CardDrawer from "./container/CardDrawer/CardDrawer";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import Scores from "./components/Scores/Scores";
import Instructions from "./components/Instructions/Instructions";

function App() {
  return (
    <div className="App">
      <Instructions />
      <CardDrawer />
      <Scores />
    </div>
  );
}

export default App;

/*


const dispatch = useDispatch();

  const { increaseCurrentScore, resetCurrentScore, increaseHighScore } =
    bindActionCreators(actionCreators, dispatch);
    
    */
