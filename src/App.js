import React, { useState } from "react";
import "./App.css";

function App() {
  const [diceValue, setDiceValue] = useState(1);

  const rollDice = () => {
    const newValue = Math.floor(Math.random() * 6) + 1;
    setDiceValue(newValue);
  };

  const diceUnicode = {
    1: "🎲 1️⃣",
    2: "🎲 2️⃣",
    3: "🎲 3️⃣",
    4: "🎲 4️⃣",
    5: "🎲 5️⃣",
    6: "🎲 6️⃣",
  };

  return (
    <div className="app">
      <h1>🎲 Dice Roller</h1>
      <div className="dice">{diceUnicode[diceValue]}</div>
      <button onClick={rollDice}>Roll the Dice</button>
    </div>
  );
}

export default App;
