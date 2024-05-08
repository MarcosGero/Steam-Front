import React, { useEffect,useState, useContext } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import './navbar.css';
import logo from '../resources/logo.png';
import { useNavigate } from 'react-router-dom';
import { useAuthUserContext, useLogOutContext } from "../components/AuthProvider"; // Importa el contexto necesario

const NavigationBar = () => {
  const [isAuthenticated, setAuthenticated] = useState()
  const AuthUser= useAuthUserContext(); // Suponiendo que estas funciones están definidas en tu contexto
  const logOut = useLogOutContext(); // Función para manejar el cierre de sesión
  const navigate = useNavigate();

  useEffect(() => {
    setAuthenticated(AuthUser());
  }, [AuthUser])


  const handleLogout = () => {
    logOut(); // Llama a la función de cierre de sesión del contexto
    navigate('/');
  };

  const handleRequest = () => {
    if (isAuthenticated) {
      navigate('/signup'); // URL de detalles de cuenta
    } else {
      navigate('/'); // Si el usuario no está autenticado, redirigir a la página de login
    }
  };

  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Container className="navitems justify-content-center text-center">
        <div className="navbar-logo-container">
          <Navbar.Brand href="/">
            <img src={logo} height="30" alt="Mi Logo" className="logo" />
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
            {isAuthenticated ? (
              <>
                <Button variant="dark" className="rectangular-button" block>Instalar Steam</Button>
                <Dropdown className='navtext'>
                  <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    {localStorage.getItem('local-user')} // Obtiene el nombre de usuario del contexto
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
