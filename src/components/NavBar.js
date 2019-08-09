import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink activeClassName="active" to='/home' >Home | </NavLink>
      <NavLink activeClassName="active" to='/moods' >Moods | </NavLink>
      <NavLink activeClassName="active" to='/moods/new' >New Mood</NavLink>
    </div>
  )
}

export default NavBar;
