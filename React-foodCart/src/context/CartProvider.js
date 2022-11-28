import CartContext from "./cart-context";

import React,{useReducer} from "react";


const defaultItemState={
    items:[],
    totalAmount:0
}
const cartReducer = (state,action) =>{
    if(action.type === 'ADD'){
        const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingItemIndex = state.items.findIndex(item=>action.item.id === item.id)
        let updatedItems=state.items;
        
        if(existingItemIndex !== -1){
            
            const updateItem={...action.item,amount:action.item.amount + state.items[existingItemIndex].amount}
           updatedItems[existingItemIndex] = updateItem;
        }else{
           
             updatedItems = updatedItems.concat(action.item);
        }
        return{items:updatedItems,totalAmount:updatedAmount}
    }
    if(action.type === 'REMOVE'){
        const existingItemIndex = state.items.findIndex(item =>{ return item.id === action.id})
        const existingItem=state.items[existingItemIndex];
        const updatedAmount = state.totalAmount - existingItem.price;
        let updatedItems=state.items;
        if(existingItem.amount === 1){
            updatedItems=updatedItems.filter(item=>item.id !== action.id)

        }else{
            updatedItems[existingItemIndex].amount-=1;
        }
        return{items:updatedItems,totalAmount:updatedAmount}
    }
    if(action.type === 'CLEAR'){
        return defaultItemState;

    }
    return defaultItemState;

}

const CartProvider = props =>{
    const [cartState,dispatchCart] = useReducer(cartReducer,defaultItemState)

    const addItemToCartHandler = item =>{
        dispatchCart({type:'ADD',item})

    }

    const removeItemFromCartHandler = id =>{
        dispatchCart({type:'REMOVE',id})

    }

    const clearCart = () => {
        dispatchCart({type:'CLEAR'})

    }


    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler,
        clearCart:clearCart

    }


    return(<CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>);
}


export default CartProvider;