 import {NavLink} from 'react-router-dom'

 import classes from './MainHeader.module.css'
 
 const MainHeader = () =>{
     return(<header className={classes.header}>
         <nav>
             <ul>
              

              {/*3. to highlite the active link */}
               <li> <NavLink to='/welcome' activeClassName={classes.active}>Welcome  </NavLink> </li>
               <li>  <NavLink to='/products' activeClassName={classes.active}> Products </NavLink> </li>

            {/*2. normal in react-router */}
                {/* <li> <Link to='/welcome'>Welcome  </Link> </li>
               <li>  <Link to='/products'> Products </Link> </li> */}

                 {/* 1.it cause reloading of page so state willbe initialized,not applicable in react single page application */}
                 {/* <li><a href='/welcome'> Welcome </a></li>
                 <li ><a href='/products'> Products </a> </li> */}
             </ul>
         </nav>
     </header>)

 }


 export default MainHeader;