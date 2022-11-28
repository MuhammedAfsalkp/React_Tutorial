import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpense';

import React,{useState} from 'react';

const DUMMY_EXPENSES=[
  {id:'e1',title:"Car",amount:"300",date:new Date(2021, 2, 25)},
  {id:'e2',title:"Bike",amount:"30",date:new Date(2020, 3, 26)},
  {id:'e3',title:"Cycle",amount:"500",date:new Date(2019, 1, 27)},
]

function App(){
  
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES)
  // console.log(expenses)

  const expAddHandler=(exp)=>{
    // console.log(exp);
    setExpenses(prevExpenses=>{
      return([exp,...prevExpenses])
    })
    
  }


  return (
    <div>
      <NewExpense onAddExpense={expAddHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    
      
    </div>
  );
}

export default App;
