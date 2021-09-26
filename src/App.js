import "./App.css";
import Developers from "./components/Developers/Developers";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
      </div>
      <div className="container">
        <Developers></Developers>
      </div>
    </div>
  );
}

export default App;
