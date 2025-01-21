function Income({ id, amount, date, onDelete }) {
  return (
    <div className="income-item">
      <p>
        Amount: <span className="amount">${amount}</span>
      </p>
      <p>
        Date: <span className="date">{date}</span>
      </p>
      <button className="delete-btn" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Income;
