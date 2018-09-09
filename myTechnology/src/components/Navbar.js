
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Navbar.css';
// import logo from './logo.png';

class MyNavbar extends Component {

  render() {
    // var icon = (
    //     <span class="logo">
    //       <a href="/">
    //         <img src={logo} height="33" width="120" alt="text here" /></a>
    //     </span>
    //   );
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to ="/">mytechnology.net.au</Link>
          </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/about">
            About mytech
          </NavItem>
          <NavItem eventKey={2} href="/portfolio">
            Services
          </NavItem>
            
        </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="/signup">
        Sign Up
      </NavItem>
      <NavItem eventKey={2} href="/login">
        Log In
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default MyNavbar;
