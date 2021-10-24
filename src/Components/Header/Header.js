import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    const{user,logOut} = useAuth();
    return (
        <div>
           <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Antor</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
      <Nav.Link as={NavLink} to="/about">About</Nav.Link>
      <Nav.Link as={NavLink} to="/services">Services</Nav.Link>
      <Nav.Link as={NavLink} to="/psychiatrists">Psychiatrists</Nav.Link>
    </Nav>
    <Nav>
      <span className="text-light">{user.displayName}</span>
    { 
      user.email ?
        <button onClick={logOut} >Logout</button>
      :
      <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
    }
   
    <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
       
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;