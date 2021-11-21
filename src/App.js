import classes from "./App.css";
import CardDrawer from "./container/CardDrawer/CardDrawer";
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
