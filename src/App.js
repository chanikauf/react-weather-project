import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by Chani Kaufman and open-sourced on{" "}
        <a href="https://github.com/chanikauf/react-weather-project">GitHub.</a>
      </footer>
    </div>
  );
}

export default App;
