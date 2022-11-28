import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom'

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetails from './pages/ProductDetails';




function App() {
  return (
    <React.Fragment>
    <MainHeader></MainHeader>
    <main>
      {/* ro facilitate routing correctly */}
      <Switch>
      <Route path='/' exact>
       <Redirect to='/welcome'></Redirect>
      </Route>
      <Route path='/welcome'> <Welcome></Welcome></Route>
      <Route path='/products' exact> <Products></Products></Route>
      <Route path='/products/:productId'><ProductDetails></ProductDetails></Route>
      </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
