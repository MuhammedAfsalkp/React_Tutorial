import React,{useState} from 'react'

import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

import CartProvider from './context/CartProvider';

function App() {
  const [isShowCart,setShowCart] = useState(false);

  const showCartHandler = ()=>{
    setShowCart(true)
  }

  const hideCartHandler = ()=>{
    setShowCart(false)
  }
  return (
    <CartProvider>
      {isShowCart&&<Cart onClose={hideCartHandler}/>}
      <Header onClick={showCartHandler}/>
      <main>
        <Meals/>
      </main>
      </CartProvider>
    
  );
}

export default App;
