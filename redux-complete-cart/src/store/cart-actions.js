import { uiActions } from "./ui-slice"
import { cartActions } from "./cart-slice"


export const fetchCartData = () =>{
    return async (dispatch) =>{
        const fetchDta = async()=>{
            const response=await fetch('https://react-request-test-default-rtdb.firebaseio.com/cart.json')
            if(!response.ok){
                throw new Error('Cannot access cart data!!')
              }
              const data = await response.json();
              return data;

        }
        try{
          const cartData =  await fetchDta();
          dispatch(cartActions.replaceCart({
              items:cartData.items.length === 0? []:cartData.items,
              totalQuantity:cartData.totalQuantity 
          }))


        }catch(err){

            dispatch(uiActions.setNotification({title:'Failed',
            message:err.message,
            status:'error'
            }))


        }
    }
}


//2.aproach of using asyn task
//instead of implying asynchronous task in component can imply in as the creatorFunction like eralier
//actionfunction perform managed by redux,her we are the responsible for
//dispatch will get automatically
export const sendCartData = (cart) =>{
    return async (dispatch) =>{
      dispatch(uiActions.setNotification({title:'Sending',
          message:'Sending request...',
          status:'pending'
          }))
  
  
      const sendRequest = async () =>{
        const response=await fetch('https://react-request-test-default-rtdb.firebaseio.com/cart.json',{
          //instead of adding overwrite the current cart
          method:'PUT',
          body:JSON.stringify(cart)
        })
        if(!response.ok){
          throw new Error('something went wrong!!')
        }
      }
  
      try{
  
        await sendRequest()
        dispatch(uiActions.setNotification({title:'Success',
        message:'Request has been sent',
        status:'success'
        }))
  
      }catch(err){
  
        dispatch(uiActions.setNotification({title:'Failed',
        message:err.message,
        status:'error'
        }))
  
      }
  
    }
  }