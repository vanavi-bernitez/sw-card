import "./App.css";
import CharacterCard from "./CharacterCard";
import swLogo from "./images/swLogo.png";

function App() {
  return (
    <div className="App">
      <div className="logoContainer">
        <img src={swLogo} alt="star wars logo" />
      </div>
      <CharacterCard />
    </div>
  );
}

export default App;
