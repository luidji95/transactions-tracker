import { useState } from "react";
import "./App.css";
import Income from "./Income";
import Transaction from "./Transaction";

function App() {
  const [income, setIncome] = useState(0);
  const [averageIncome, setAverageIncome] = useState(0);
  const [transactionCost, setTransactionCost] = useState(0);
  const [transactionName, setTransactionName] = useState("");
  const [balance, setBalance] = useState(0);
  const [incomeList, setIncomeList] = useState([]);
  const [transactionList, setTransactionList] = useState([]);

  // Dodavanje prihoda
  const handleAddIncome = (value) => {
    if (!isNaN(value) && value > 0) {
      setAverageIncome((prevAverage) => {
        return (
          (prevAverage * incomeList.length + value) / (incomeList.length + 1)
        );
      });

      setBalance((prevBalance) => prevBalance + value);

      const newIncome = {
        id: Date.now(),
        amount: value,
        date: new Date().toLocaleDateString(),
      };
      setIncomeList((prevIncomeList) => [...prevIncomeList, newIncome]);
      setIncome(0); // Resetovanje unosa
    }
  };

  // Dodavanje transakcija
  const handleAddTransaction = () => {
    const transactionValue = parseFloat(transactionCost);
    if (
      !isNaN(transactionValue) &&
      transactionValue > 0 &&
      transactionName.trim() !== ""
    ) {
      setBalance((prevBalance) => prevBalance - transactionValue);

      const newTransaction = {
        id: Date.now(),
        name: transactionName,
        amount: transactionValue,
        date: new Date().toLocaleDateString(),
      };
      setTransactionList((prevTransactionList) => [
        ...prevTransactionList,
        newTransaction,
      ]);

      setTransactionCost(0); // Reset unosa
      setTransactionName("");
    }
  };

  const handleDeleteIncome = (id) => {
    setIncomeList((prevIncomeList) =>
      prevIncomeList.filter((income) => income.id !== id)
    );
  };

  const handleDeleteTransaction = (id) => {
    setTransactionList((prevTransactionList) =>
      prevTransactionList.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <div className="container">
      <div className="row top">
        {/* Sekcija za dodavanje prihoda */}
        <div className="income-div">
          <h2>Add Income</h2>
          <p>*Your income</p>
          <input
            type="number"
            placeholder="1000"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddIncome(parseFloat(income));
            }}
          />
          <button
            onClick={() => {
              handleAddIncome(parseFloat(income));
            }}
          >
            Add Income
          </button>
        </div>

        {/* Sekcija za dodavanje troškova */}
        <div className="transaction-div">
          <h2>Add Transaction</h2>
          <p>*Transaction Cost</p>
          <input
            type="number"
            placeholder="250"
            value={transactionCost}
            onChange={(e) => setTransactionCost(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddTransaction();
            }}
          />
          <p>*Transaction Reason</p>
          <input
            type="text"
            placeholder="food, drinks, gas"
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAddTransaction();
            }}
          />
          <button onClick={handleAddTransaction}>Add Transaction</button>
        </div>
      </div>

      {/* Statistika */}
      <div className="row bottom">
        <div className="average-income">
          <p>💰</p>
          <p>${averageIncome.toFixed(2)}</p>
          <p>Average Income</p>
        </div>
        <div className="expenses">
          <p>💸</p>
          <p>
            $
            {transactionList
              .reduce((total, t) => total + t.amount, 0)
              .toFixed(2)}
          </p>
          <p>Expenses</p>
        </div>
        <div className="balance">
          <p>📊</p>
          <p>${balance.toFixed(2)}</p>
          <p>Balance</p>
        </div>
      </div>

      {/* Liste prihoda i troškova */}
      <div className="transaction-list">
        <h3>Transaction List</h3>
        {transactionList.map((transaction) => (
          <Transaction
            key={transaction.id}
            id={transaction.id}
            name={transaction.name}
            amount={transaction.amount}
            date={transaction.date}
            onDelete={handleDeleteTransaction}
          />
        ))}
      </div>
      <div className="income-list">
        <h3>Income List</h3>
        {incomeList.map((income) => (
          <Income
            key={income.id}
            id={income.id}
            amount={income.amount}
            date={income.date}
            onDelete={handleDeleteIncome}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
