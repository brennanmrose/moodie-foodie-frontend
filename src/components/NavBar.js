import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, Dropdown, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    <div className="NavBar">
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="1" href="#/home">
            <NavLink activeClassName="active" to='/home' >Home</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item">
            <NavLink activeClassName="active" to='/moods' >Moods</NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" title="Item">
            <NavLink activeClassName="active" to='/moods/new' >New Mood</NavLink>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default NavBar;


// <NavDropdown title="Dropdown" id="nav-dropdown">
//   <NavDropdown.Item eventKey="4.1"><NavLink activeClassName="active" to='/home' >Home</NavLink></NavDropdown.Item>
//   <NavDropdown.Item eventKey="4.2"><NavLink activeClassName="active" to='/moods' >Moods</NavLink></NavDropdown.Item>
//   <NavDropdown.Item eventKey="4.3"><NavLink activeClassName="active" to='/moods/new' >New Mood</NavLink></NavDropdown.Item>
//   <NavDropdown.Divider />
// </NavDropdown>
