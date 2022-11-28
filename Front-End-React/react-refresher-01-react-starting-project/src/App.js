import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Home from './users/pages/Home'
import Event from './events/pages/Event';
import AddEvent from './events/pages/AddEvent';
import OrderedEvent from './events/pages/OrderedEvent';
import Auth from './users/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';
// import { useHttpClient } from './shared/hooks/http-hook';
// import { useState,useEffect,useContext } from 'react'
// import {useAuth} from './shared'
// import Card from './shared/components/UIElements/Card';
// import ErrorModal from './shared/components/UIElements/ErrorModal';
// import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';

const App = () => {
  console.log("app")


const { role, login, logout, currentUser,isLoggedIn, authMode,entry} = useAuth();

  console.log("in app cuser",currentUser)
  // useEffect(()=>{
  //   console.log("effect")

  //   async function fetchApi(){


  //     const responseData = await sendRequest(
  //       'http://localhost:4000/api/users/currentuser',
  //       'GET',null,
  //       {
  //         'Content-Type': 'application/json'
  //       },
        
  //     );
  //     console.log("resp",responseData)
  //     setInit(false)
  //     setCurrentUser(responseData.currentUser);

  //   }
  //   fetchApi()
    
   

  // },[])



  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/events" exact>
          <Event />
          </Route>
         < Route path="/events/new" exact>
          <AddEvent />
          </Route>
          < Route path="/orders" exact>
          <OrderedEvent />
          </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        // token: token,
        currentUser,
        role,
        entry:entry,
        login: login,
        logout: logout,
        authMode:authMode
      }}
    >
      
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
