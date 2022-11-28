import {useRef,useState}  from 'react'

import classes from './Checkout.module.css';


const isEmpty = value => value.length === 0
const isLengthFive = value => value.length === 5


const Checkout = (props) => {
    const [formValidity,setFormValidity] = useState({
        name:true,
        city:true,
        pin:true,
        street:true
    })
   const inputRef = useRef()
   const streetRef = useRef()
   const postalRef = useRef()
   const cityRef = useRef()
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = inputRef.current.value;
    const enteredStreet = streetRef.current.value;
    const enteredPostalCode = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const nameValidity = !isEmpty(enteredName);
    const streetValidity = !isEmpty(enteredStreet);
    const postlValidity = isLengthFive(enteredPostalCode);
    const cityValidity = !isEmpty(enteredCity)

    setFormValidity({
        name:nameValidity,
        city:cityValidity,
        street:streetValidity,
        pin:postlValidity
    })
    const isFormValid = nameValidity && streetValidity && postlValidity && cityValidity
    if(!isFormValid){
        return
    }
   props.onConfirm({
       name:enteredName,city:enteredCity,street:enteredStreet,pin:enteredPostalCode
   })

  };
  const nameClass= `${classes.control} ${formValidity.name?'':classes.invalid}`
  const streetClass= `${classes.control} ${formValidity.street?'':classes.invalid}`
  const cityClass= `${classes.control} ${formValidity.city?'':classes.invalid}`
  const pinClass= `${classes.control} ${formValidity.pin?'':classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClass}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={inputRef} />
        {!formValidity.name && <p>Enter Valid Name.</p>}
      </div>
      <div className={streetClass}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street'  ref={streetRef}/>
        {!formValidity.street && <p>Enter Valid Street.</p>}
      </div>
      <div className={pinClass}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalRef} />
        {!formValidity.pin && <p>Enter Valid Pin include 5 characters.</p>}
      </div>
      <div className={cityClass}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityRef} />
        {!formValidity.city && <p>Enter Valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;