import React,{useState,useContext} from 'react'

import Modal from '../UI/Modal'

import CartContext from '../../context/cart-context'

import classes from './Cart.module.css'

import CartItem from './CartItem'
import Checkout from './Checkout'


const Cart = props =>{
    const [isCheckout,setIsCheckout] = useState(false)
    const [isSubmiting,setSubmiting] = useState(false)
    const [isDidSubmit,setDidSubmit] = useState(false)
    const cartCtx=useContext(CartContext);
    const totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0
    const cartAddItemHandler = item =>{cartCtx.addItem({...item,amount:1}) }
    const cartRemoveItemHandler = id =>{cartCtx.removeItem(id)}
    const showCheckout = ()=>{
        setIsCheckout(true)
    }
    const orderSubmitHandler =async (userData) =>{
        setSubmiting(true)
      await  fetch('https://react-meal-cart-default-rtdb.firebaseio.com/order.json',{
            method:'POST',
            body:JSON.stringify({userData,items:cartCtx.items})
        })
        setSubmiting(false);
        setDidSubmit(true)
        cartCtx.clearCart();
    }

    const modalControl =   <div className={classes.actions}>
    <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
    {hasItems&&<button className={classes.button} onClick={showCheckout}>Order</button>}
    </div>

    const cartItems=<ul className={classes['cart-items']}>{cartCtx.items.map(item=> <CartItem
         key={item.id}
         name={item.name}
         price={item.price}
         amount={item.amount}
         onRemove={cartRemoveItemHandler.bind(null,item.id)}
         onAdd={cartAddItemHandler.bind(null,item)}>
         </CartItem>)}</ul>


         const modalContent =<React.Fragment>
               {cartItems}
        <div className={classes.total}>
            <span>Total amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout&&<Checkout  onConfirm={orderSubmitHandler}onCancel={props.onClose} ></Checkout>}
        {!isCheckout&& modalControl}
         </React.Fragment>

         const submitingContent =<p>Submiting...</p>

         const didSubmitContent =<React.Fragment>
             <p>Order has been sent.</p>
             <div className={classes.actions}>
           <button className={classes.button} onClick={props.onClose}>Close</button>
           </div>
          </React.Fragment>


    return(<Modal onClose={props.onClose}>
      {!isSubmiting && !isDidSubmit &&modalContent}
      {isSubmiting && submitingContent}
      {isDidSubmit && didSubmitContent}
    </Modal>)
}

export default Cart;