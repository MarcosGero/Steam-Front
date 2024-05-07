import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './navbar.css'
import logo from '../resources/logo.png';
import * as jwt_decode from 'jwt-decode';

const NavigationBar = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      const decodedToken = decodeToken(token);
      setUsername(decodedToken.username);
      setLoggedIn(true);}   }, []);

  const decodeToken = (token) => {
    const decoded = JSON.parse(atob(token.split('.')[1]));
    return { username: decoded.sub};
  };

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
          {loggedIn ? (
              // Si el usuario está conectado, muestra su nombre de usuario
              <>
                <Button variant="dark" className="rectangular-button" block>Instalar Steam</Button>
                <Nav.Link href='/' className='navtext'>{username}</Nav.Link>
              </>
            ) : (
              <>
                <Button variant="success" className="rectangular-button" block>Instalar Steam</Button>
                <Nav.Link href='/' className='navtext'>Iniciar Sesión</Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
