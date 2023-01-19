
import "./App.css";
import Lights from "./components/Tlights";
function App() {
  return (
    <div className="App">
      <Lights state={0} />
      <Lights state={1}/>
    </div>
  );
}

export default App;
