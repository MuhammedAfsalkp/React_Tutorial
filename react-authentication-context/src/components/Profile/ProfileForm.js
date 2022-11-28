import { useRef } from 'react/cjs/react.development';
import classes from './ProfileForm.module.css';

const ProfileForm = (props) => {
  const passRef= useRef()
 const submitHandler = event =>{
   event.preventDefault()
   const password = passRef.current.value;
   props.onReset(password)
   
 }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={passRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
