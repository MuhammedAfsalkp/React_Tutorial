import { useContext } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../store/auth-context';
import ProfileForm from './ProfileForm';
import classes from './UserProfile.module.css';


const UserProfile = () => {
  const history = useHistory()
  const authCtx = useContext(AuthContext)
  const resetPasswordHandler = async (password) =>{
   const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAfUAb2_QxC99Si0mlxbqakBuf1_NmeVSo',
    {
      method:'POST',
      body:JSON.stringify({
        password,
        idToken:authCtx.idToken,
        returnSecureToken:false
      }),
      headers:{
        'Content-Type':'application/json'
      }
    })
    if(response.ok){
      const data=await response.json();
      console.log("reset");
      console.log(data);
      history.replace('/auth')
    }

  }
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm  onReset={resetPasswordHandler}/>
    </section>
  );
};

export default UserProfile;
