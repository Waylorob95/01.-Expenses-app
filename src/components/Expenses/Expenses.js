import './ExpenseItem.css';
import React, {useState} from 'react';
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses (props){
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterHandler = selectedYear => {
    setFilteredYear(selectedYear)
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
        <div className="expenses">
        <ExpenseFilter selected={filteredYear}
          onFilter= {filterHandler}/>
          <ExpenseList items={filteredExpenses}/>
        </div>
    )
}

export default Expenses;