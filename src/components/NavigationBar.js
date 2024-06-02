import React, { useEffect, useState, useContext } from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import {
  useAuthUserContext,
  useLogOutContext,
} from "../components/AuthProvider";
import { BiWorld } from "react-icons/bi";
import { ImDownload } from "react-icons/im";
import {Avatar, IconButton, Menu, MenuItem, Typography} from "@mui/material";

const NavigationBar = () => {
  const [isAuthenticated, setAuthenticated] = useState(); // Indica si es usuario esta o no autenticado
  const AuthUser = useAuthUserContext(); // Maneja la autenticacion de usuario
  const [anchorEl, setAnchorEl] = useState(null);
  const LogOutUser = useLogOutContext(); // Maneja el cierre de sesion
  const navigate = useNavigate(); // Forma para navegar entre las paginas
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  useEffect(() => {
    setAuthenticated(AuthUser());
  }, [AuthUser]);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    LogOutUser(); // Llama a la función de cierre de sesión del contexto
  };
  const userName = localStorage.getItem("local-user");
  const userImage = localStorage.getItem("local-picture");
  const imageFormat = localStorage.getItem("local-format");
  const handleRequest = () => { // Maneja los request
    if (isAuthenticated) {
      navigate("/account-details"); // URL de detalles de cuenta
    } else {
      navigate("/"); // Si el usuario no está autenticado, redirigir a la página de login
    }
  };
  const toggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);

  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Container className="navitems justify-content-center text-center">
        <div className="navbar-logo-container">
          <Navbar.Brand href="/">
            <img src="/logo.svg" alt="Mi Logo" className="logo" />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleOffcanvas}
        />
        <Navbar.Offcanvas
          id="basic-navbar-nav"
          aria-labelledby="basic-navbar-nav"
          placement="end"
          show={showOffcanvas}
          onHide={toggleOffcanvas}
          className="navbar-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menú</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <Container className="navoptions">
              <Nav className="navlinks">
                <Nav.Link className="navlink" href="home">
                  TIENDA
                </Nav.Link>
                <Nav.Link className="navlink" href="link">
                  COMUNIDAD
                </Nav.Link>
                <Nav.Link className="navlink" href="link">
                  ACERCA DE
                </Nav.Link>
                <Nav.Link className="navlink" href="link">
                  SOPORTE
                </Nav.Link>
              </Nav>
            </Container>
            <Container>
              <Nav className="extraoptions">
                {isAuthenticated ? (
                    <div className="d-flex">
                      <button className="dark rectangular-button2">
                        <ImDownload className="download-icon mr-2"/>
                        Instalar Steam
                      </button>
                      <IconButton edge="end"  color="inherit" onClick={handleMenuOpen} sx={{ width: '50%' }} >
                        <Typography variant="body2" sx={{marginRight: 1}}>
                          {userName}
                        </Typography>
                        {userImage && imageFormat ? (
                            <Avatar src={`data:${imageFormat};base64,${userImage}`} alt="User"/>
                        ) : (
                            <Avatar>{userName.charAt(0)}</Avatar>
                        )}
                      </IconButton>
                      <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                          color="dark"
                      >
                        <MenuItem onClick={handleRequest}>Detalles de cuenta</MenuItem>
                        <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
                      </Menu>
                    </div>
                ) : (
                    <>
                      <button className="rectangular-button">
                        <ImDownload className="download-icon mr-2"/>
                        Instalar Steam
                    </button>
                    <div onClick={handleRequest} className="navtext2">
                      Iniciar sesion
                    </div>
                    <div className="navtext2 divider"></div>
                    <div className="location-container">
                      <Container className="navbar-container">
                        <BiWorld className="location-icon"/>
                        idioma
                      </Container>

                    </div>
                  </>
                )}
              </Nav>
            </Container>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
