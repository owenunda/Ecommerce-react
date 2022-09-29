import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand to="/" as={Link} >E-commerce</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link to="/login" as={Link} >Login</Nav.Link>
        <Nav.Link to="/purchases" as={Link} >Purchases</Nav.Link>
        <Nav.Link>carito</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
};

export default NavBar;