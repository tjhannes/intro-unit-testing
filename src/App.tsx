import React from "react";
import "./App.css";
import { add } from "./logic";

function App() {
  const [inputValue1, setInputValue1] = React.useState<number>(0);
  const [inputValue2, setInputValue2] = React.useState<number>(0);
  const [sumValue, setSumValue] = React.useState<number>();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sum it up!</h1>
        <input
          onChange={(val) => setInputValue1(Number(val.target.value))}
        ></input>
        <br />
        <input
          onChange={(val) => setInputValue2(Number(val.target.value))}
        ></input>
        <br />
        <button onClick={() => setSumValue(add(inputValue1, inputValue2))}>
          Calculate!
        </button>
        <br />
        <p>Result: {sumValue}</p>
      </header>
    </div>
  );
}

export default App;
