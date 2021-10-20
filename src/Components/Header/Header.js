import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
      <Nav.Link as={NavLink} to="/professionals">Professionals</Nav.Link>
    </Nav>
    <Nav>
    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
    <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
       
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;