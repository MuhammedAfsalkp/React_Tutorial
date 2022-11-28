import React,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=>{
const[enteredTitle,setEnteredTitle]=useState('');
const[enteredAmount,setEnteredAmount]=useState('');
const[enteredDate,setEnteredDate]=useState('');
//  //  better way instedof using 3 sate it is upto you
//     const[enteredData,setEnteredData]=useState({enteredTitle:'',enteredAmount:'',enteredDate:''});
    
    const textChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);;
        console.log(enteredTitle);

    //     // to ensure change coflict not affected in amount
    //       return {
    //           ...prevData,
    //           enteredTitle:event.target.value
    //       }
    //   })
    }

    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);;
        console.log(enteredAmount);

        // not bad ,useful,may affectt to conflict due duplicate same data
        // setEnteredData({
        //     ...enteredData,
        //     enteredAmount:event.target.value
          
        // })
    }

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);;
        console.log(enteredDate);
        // setEnteredData({
        //     ...enteredData,
        //     enteredDate:event.target.value
        // })
    }

    const formHandler=(event)=>{
        event.preventDefault();
        const expense={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        };
       props.onSaveExpense(expense)

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }
    return(
        <form onSubmit={formHandler}>
        <div className="new-expense-controls">
            <div >
                <label>Title</label>
                
                <input type="text" value={enteredTitle} onChange={textChangeHandler}></input>
            </div>
            <div >
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}></input>
            </div>
            <div >
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
            </div>
        </div>
        <div className="new-expense-action">
            <button onClick={props.onCancel}>Cancel</button>
              <button type="submit">Add Expense</button>
            </div>
   
    
        </form>
    )
    ;


}


export default ExpenseForm;
