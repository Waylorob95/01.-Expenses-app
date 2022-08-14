import React, {useState} from "react";

import ExpenseForm from './ExpenseForm';
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, isEdited] = useState(false);

  const saveData = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    isEdited(false);
  };

  const startEditing = () => {
    isEdited(true);
  }

  const stopEditing = () => {
    isEdited(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && <ExpenseForm onCancel = {stopEditing}
      onSave = {saveData}></ExpenseForm>}
    </div>
  );
};

export default NewExpense;
