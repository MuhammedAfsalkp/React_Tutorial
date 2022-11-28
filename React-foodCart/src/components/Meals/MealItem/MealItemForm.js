import React,{useState,useRef} from "react";

import Input from "../../UI/Input";


import classes from './MealItemForm.module.css'

const MealItemForm = (props) =>{
    const [isAmountValid,setAmountValid] = useState(true)
    const amountInputRef =useRef()
    const submitHandler = event =>{
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enterdAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enterdAmountNumber > 5 || enterdAmountNumber <1){
            setAmountValid(false);
            return;

        }
        props.onAddToCart(enterdAmountNumber)

    }


    return(<form className={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef} label="amount"
        input={{
            id:'amount' + props.id ,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'

        }}
        
        ></Input>
        <button className={classes.button} type="submit">+ Add</button>
        {!isAmountValid&&<p>Please Entere A valid amount</p>}

    </form>);
}

export default MealItemForm;
