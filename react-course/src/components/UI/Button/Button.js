import React from 'react';

//to use the css file scope only in the imported components-to reduce complication on selector class naming
//css module concept
import styles from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
