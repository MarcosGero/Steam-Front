import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './navbar.css'
import logo from '../resources/logo.png';

const NavigationBar = () => {
  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Container className="navitems justify-content-center text-center">
        <div className="navbar-logo-container">
        <Navbar.Brand href="/">
          <img
            src={logo}
            height="30"
            alt="Mi Logo"
            className="logo"
          />
        </Navbar.Brand>
        </div>
        <Container className='navoptions'>
        <Nav className="me-auto">
            <Nav.Link href="#home">TIENDA</Nav.Link>
            <Nav.Link href="#link">COMUNIDAD</Nav.Link>
            <Nav.Link href="#link">ACERCA DE</Nav.Link>
            <Nav.Link href="#link">SOPORTE</Nav.Link>
        </Nav>
        </Container>
        <Container className='navoptions'>
          <Nav className="extraoptions">
            <Button variant="success" className="rectangular-button" block>Instalar Steam</Button>
            <Nav.Link href='/' className='navtext'>Iniciar Sesión</Nav.Link>
          </Nav>
        </Container>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
