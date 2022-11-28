import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../UIElements/Modal'
import Button from '../FormElements/Button'
import './NavLinks.css';
import MainHeader from './MainHeader';
import { AiOutlineClose } from "react-icons/ai";
import AddToll from '../Tolls/pages/AddToll';

const NavLinks = props => {
  const [showForm,setShowForm] = useState(false);
  const [closeForm,setCloseForm] = useState(false);

  const [modalHead,setModalHead] = useState('');

  const addTollHandler = (head) =>{
    setModalHead(head);
    setShowForm(true);

  }
  const closeModalHandler = () => setShowForm(false);

  return (
    <React.Fragment>
     <Modal
        show={showForm}
        onCancel={closeModalHandler}
        header={<React.Fragment>
           <h3>{modalHead}</h3>
          <button className="icon" onClick={closeModalHandler}><AiOutlineClose></AiOutlineClose></button>
        </React.Fragment>}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeModalHandler}>close</Button>}
      >
        {/* <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div> */}
        <AddToll></AddToll>
      </Modal>

    <ul className="nav-links">
        <li>
          <input type="search" placeholder="Search vehicle"></input>
          <span className="fa fa search"></span>
        </li>
      
      {/* {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/places`}>DETAILS</NavLink>
        </li>
      )} */}
      
        <li>
          <button >Add vehicle entry</button>
        </li>
        <li>
          <button onClick={e=>addTollHandler('Add new toll')}>Add new toll</button>
        </li>
        <li>
        { !props.navChange && <NavLink to="/toll" exact onClick={props.onNavChange}>
          View all tolls
        </NavLink>}
      </li>
      {  props.navChange && <NavLink to="/"  onClick={props.onNavChange} exact>
          Back to vehicle logs
        </NavLink>}
    </ul>
    </React.Fragment>
  );
};

export default NavLinks;
