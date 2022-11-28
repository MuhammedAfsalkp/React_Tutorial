import React, { useEffect, useState } from "react";
import { useCallback } from "react";



let logoutTimer;

const AuthContext = React.createContext({
    idToken:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
})

export default AuthContext;

const calculateRemainingTime = expTime =>{
    const curTime = new Date().getTime();
    const adjExpTime = new Date(expTime).getTime()
    return adjExpTime - curTime
}

const retrieveStoredToken =  () =>{
    const storedToken = localStorage.getItem('token');
    const storedExpiration = localStorage.getItem('expirationTime');
    const remainingTime = calculateRemainingTime(storedExpiration);
    if(remainingTime <= 60000){
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime')
        return null;
    }
    return {
       token: storedToken,
       duration:  remainingTime
    }
}


export const AuthContextProvider = (props) =>{
    console.log("context")
    const tokenData = retrieveStoredToken()
    let initialToken ;
    if(tokenData){
        initialToken=tokenData.token;
    }
    const [token,setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;
    console.log("context middle",tokenData)

    const logoutHandler = useCallback(() =>{
        setToken(null);
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        if(logoutTimer){
            clearTimeout(logoutTimer)
        }
    },[])

    const loginHandler = (token,expiration) =>{
        console.log("loginHandler");
        setToken(token);
        localStorage.setItem('token',token)
        localStorage.setItem('expirationTime',expiration)
        console.log("local storage set")
        const remainingTime = calculateRemainingTime(expiration);
       logoutTimer = setTimeout(logoutHandler,remainingTime)
    }

    useEffect(()=>{
        console.log("effect")
        //eventhough effect execute initially,reload,the token data wiill be the 
        //determiner of gthe execution 
        //initially null-so no execution
        if(tokenData){
            console.log("effect inside if token")
            console.log(tokenData.duration)
            logoutTimer = setTimeout(logoutHandler,tokenData.duration)
        }

    },[tokenData,logoutHandler])

   

    const contextValue = {idToken:token,isLoggedIn:userIsLoggedIn,login:loginHandler,logout:logoutHandler
    }




    return(<AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>)
}
