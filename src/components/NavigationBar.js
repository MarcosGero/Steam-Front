import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Dropdown} from 'react-bootstrap';
import './navbar.css'
import logo from '../resources/logo.png';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('')
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setUsername('');
    setLoggedIn(false);
    navigate('/');
  };

  const handleRequest = () => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      navigate('/signup'); // URL de detalles de cuenta
    } else navigate('/') // Si el token se vencio entonces vuelve a la pagina login
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
                <Dropdown className='navtext'>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    {username}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleRequest}>Detalles de cuenta</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Cerrar sesión</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
