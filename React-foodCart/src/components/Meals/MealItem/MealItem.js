import React,{useContext} from 'react';

import classes from './MealItem.module.css'

import MealItemForm from './MealItemForm';

import CartContext from '../../../context/cart-context';


const MealItem = props =>{
    const cartCtx=useContext(CartContext)
   const  addToCartHandler = amount =>{
       cartCtx.addItem({
           id:props.id,
           name:props.name,
           description:props.description,
           price:props.price,
           amount:amount
       })

   }
const price=`$${props.price.toFixed(2)}`
    return (<li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealItemForm  onAddToCart={addToCartHandler} id={props.id}></MealItemForm> 
        </div>
    </li>);
}

export default MealItem;