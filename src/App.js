import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");
  async function fetchInfo() {
    const url = `${process.env.REACT_APP_API_URL}/test`;
    const response = await fetch(url);
    const json = await response.json();
    setResult(json);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Result: {result}</p>
        <button onClick={fetchInfo} className="App-link">
          Fetch info from API
        </button>
      </header>
    </div>
  );
}

export default App;
