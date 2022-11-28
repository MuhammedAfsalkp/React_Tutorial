import React from 'react'

import classes from './Header.module.css'
import mealImg from '../../assets/meals.jpg'

import HeaderButton from './HeaderButton'


const Header = props =>{

    return(<React.Fragment>
        <header className={classes.header}>
            <h1>React meals</h1>
            <HeaderButton onClick={props.onClick}></HeaderButton>

        </header>
        <div className={classes['main-image']}>
        <img src={mealImg} alt ="A table fully covered with foods"></img>
        </div>

    </React.Fragment>);
}


export default Header;