import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="row top">
        <div className="income-div">
          <h2>Add Income</h2>
          <p>*Your income</p>
          <input type="text" placeholder="1000$" />
          <button>Add Income</button>
        </div>
        <div className="transaction-div">
          <h2>Add Transaction</h2>
          <p>*Transaction Purpose</p>
          <input type="text" placeholder="Food, drinks, gas, etc..." />
          <p>*Transaction Cost</p>
          <input type="text" placeholder="250$" />
          <button>Add Transaction</button>
        </div>
      </div>
      <div className="row bottom">
        <div className="average-income">
          <p>💰</p>
          <p>$0</p>
          <p>Average Income</p>
        </div>
        <div className="expenses">
          <p>💸</p>
          <p>$0</p>
          <p>Expenses</p>
        </div>
        <div className="balance">
          <p>📊</p>
          <p>$0</p>
          <p>Balance</p>
        </div>
      </div>
    </div>
  );
}

export default App;
