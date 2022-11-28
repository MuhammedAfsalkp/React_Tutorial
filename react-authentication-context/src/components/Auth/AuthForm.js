import { useState,useRef, useContext} from 'react';
import { useHistory } from 'react-router';

import AuthContext from '../../store/auth-context';


import classes from './AuthForm.module.css';

const AuthForm = () => {
  console.log("authForm")
  const history = useHistory()
  const authCtx =  useContext(AuthContext)
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setIsLoading] = useState(false);
  const emailRef = useRef()
  const passwordRef = useRef()

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler =async (event) =>{
    console.log("Login",isLogin)
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try{
      let url;
      if(isLogin){
         url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfUAb2_QxC99Si0mlxbqakBuf1_NmeVSo'
      }else{
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAfUAb2_QxC99Si0mlxbqakBuf1_NmeVSo'
      }
      
        setIsLoading(true)
        const response = await fetch(url,
        {method:'POST',
         body:JSON.stringify({email:email,password:password,returnSecureToken:true}),
         headers:{'Content-Type':'application/json'} })
         setIsLoading(false)
         if(response.ok){
           console.log('Success')
           const data= await response.json()
           console.log(data);
           const expTime = new Date(new Date().getTime() + (+data.expiresIn * 1000))
           authCtx.login(data.idToken,expTime.toISOString());
           history.replace('/')

           //...success
         }else{
          const data= await response.json()
          console.log(data)
          let errorMessage = 'Authentication Failed';
          if(data && data.error && data.error.message){
            errorMessage = data.error.message;
          }
          throw new Error(errorMessage)
         
         
      }
    }catch(err){
      alert(err)

    }
   
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={emailRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required  ref={passwordRef}/>
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Loading...</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
