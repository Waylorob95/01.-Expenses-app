import React, {useState} from "react";

import './NewExpense.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }

    const amountHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateHandler = (event) => {
        setDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSave(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

  return (
    <div className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleHandler}></input>
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={enteredAmount} onChange={amountHandler}></input>
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={enteredDate} onChange={dateHandler}></input>
          </div>               
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm