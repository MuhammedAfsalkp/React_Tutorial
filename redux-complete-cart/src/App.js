import React,{useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux';

import { sendCartData,fetchCartData } from './store/cart-actions';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
let INIT =true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const showNot = useSelector((state)=>state.ui.notification)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()



//to initialixe cartdata
  useEffect(()=>{
    dispatch(fetchCartData())

  },[dispatch])
  //normally asynchrounous tasks cannot be written in reducer function of redux
  //so1. use useEffect or something in component-fine
//   useEffect(()=>{
//     const sendRequest = async()=>{
//         dispatch(uiActions.setNotification({title:'Sending',
//         message:'Sending request...',
//         status:'pending'
//         }))
     
//     const response=await fetch('https://react-request-test-default-rtdb.firebaseio.com/cart.json',{
//       //instead of adding overwrite the current cart
//       method:'PUT',
//       body:JSON.stringify(cart)
//     })
//     if(!response.ok){
//       throw new Error('something went wrong!!')
//     }
    
//       dispatch(uiActions.setNotification({title:'Success',
//       message:'Request has been sent',
//       status:'success'
//       }))
   

//   }
//   if(INIT){
//     INIT=false;
//     return;
//   }
//     sendRequest().catch((err)=>{
//       dispatch(uiActions.setNotification({title:'Failed',
//       message:err.message,
//       status:'error'
//       }))
//   })
  

// },[cart,dispatch])

//2.approach
//now the implication logic of async and curresponding actions are in cart-slice


useEffect(()=>{
  if(INIT){
    INIT=false;
    return;
  }
  if(cart.change){
    dispatch(sendCartData({items:cart.items,totalQuantity:cart.totalQuantity}))

  }
  
},[cart,dispatch])


  return (
    <React.Fragment>
     {showNot && <Notification status={showNot.status} title={showNot.title} message={showNot.message}></Notification>}
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
    </React.Fragment>
  );
}

export default App;
