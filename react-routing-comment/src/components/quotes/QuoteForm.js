import React, { useState,useRef } from 'react';
import { Prompt} from 'react-router-dom'

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntered,setEntered] = useState(false)
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  const finishEnteringHandler = () =>{
    setEntered(false);
  }

  const formFocusHandler = () =>{
    setEntered(true);
    console.log("working",isEntered)
  }

  return (
    <React.Fragment>
      <Prompt when={isEntered} message={(location)=>{
       return 'Are you sure you want to leave?all your entered data will be lost'
      }}/>
    <Card>
      <form  onFocus={formFocusHandler} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn' onClick={finishEnteringHandler}>Add Quote</button>
        </div>
      </form >
    </Card>
    </React.Fragment>
  );
};

export default QuoteForm;
