import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, Dropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="NavBar">
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>Menu</Dropdown.Toggle>
        <Dropdown.Menu>
          <Nav.Item>
            <NavLink activeClassName="active" to='/home' >Home</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink activeClassName="active" to='/moods' >Moods</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink activeClassName="active" to='/moods/new' >New Mood</NavLink>
          </Nav.Item>
        </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}

export default NavBar;
