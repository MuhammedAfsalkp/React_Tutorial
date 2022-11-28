import React,{useState,useEffect,useContext} from 'react'

import classes from './HeaderButton.module.css'
import CartIcon from '../Cart/CartIcon'

import CartContext from '../../context/cart-context'




const HeaderButton = props =>{
    const [btnBump,setBump] = useState(false);
    const cartCtx=useContext(CartContext);
    const {items,totalAmount} =cartCtx;
    const numberOfCartItems = items.reduce((curNumber,item)=>{return curNumber+item.amount},0)
    const btnClasses=`${classes.button} ${btnBump?classes.bump:' '}`
    useEffect(()=>{
        if(items.length === 0)return;
        setBump(true)
        const bumpTime = setTimeout(()=>{
            setBump(false)
        },300)
        return ()=>{
            clearTimeout(bumpTime)

        }


    },[totalAmount,items])
    return(<button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
           <CartIcon></CartIcon>
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>

    </button>
        );
}

export default HeaderButton;