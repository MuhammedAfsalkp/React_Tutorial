import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm'

const NewExpense=(props)=>{
    const[isEdit,setEdit]=useState(false)
    const expenseHandler=(exp)=>{
        const expense={
            ...exp,
            id:Math.random().toString()
        }
        props.onAddExpense(expense);
        hideForm();
    }

    const showForm=()=>{
        setEdit(true)
    }
    const hideForm=()=>{
        setEdit(false)

    }
    return(
       
        <div className="new-expense">
            {!isEdit&&(<button onClick={showForm}>Add Expense</button>)}
            {isEdit&&<ExpenseForm onSaveExpense={expenseHandler} onCancel={hideForm} ></ExpenseForm>}  
        </div>
    )
    ;


}


export default NewExpense;