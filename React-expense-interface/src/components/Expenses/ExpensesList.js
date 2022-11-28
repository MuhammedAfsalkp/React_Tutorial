import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <h2 className="expenses-list-fallback">No Expenses Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expenses.map((exp) => (
        <ExpenseItem
          //key for unique idenification-help perfomance isssue-should be unique
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
