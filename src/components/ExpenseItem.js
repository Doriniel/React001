import "./ExpenseItem.css";

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>29.03.2023</div>
      <div className="expense-item__description">
        <h2>A101 noodles pack</h2>
        <div className="expense-item__price">4.95 TL</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
