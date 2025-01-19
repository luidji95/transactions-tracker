import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Income from "./Income";
import Transaction from "./Transaction";

function App() {
  const [income, setIncome] = useState(0);
  const [averageIncome, setAverageIncome] = useState(0);
  const [transaction, setTransaction] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleAddIncome = (value) => {
    const newIncome = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (!isNaN(newIncome)) {
      setAverageIncome((prev) => (prev + newIncome) / 2);
      setBalance((prev) => prev + newIncome);
    }
  };

  const handleTransaction = (value) => {
    const newTransaction = parseFloat(value.replace(/[^0-9.]/g, ""));
    if (!isNaN(newTransaction)) {
      setTransaction((prev) => prev + newTransaction);
      setBalance((prev) => prev - newTransaction);
    }
  };

  return (
    <>
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
      <div className="transaction-list">
        <div className="income-list"></div>
        <div className="expense-list"></div>
      </div>
    </>
  );
}

export default App;
