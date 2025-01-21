function Transaction({ id, name, amount, date, onDelete }) {
  return (
    <div className="transaction-item">
      <p>{name}</p>
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

export default Transaction;
