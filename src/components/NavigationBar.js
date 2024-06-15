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

import {BsBell} from "react-icons/bs";

const NavigationBar = () => {
  const [isAuthenticated, setAuthenticated] = useState(false); // Indica si es usuario esta o no autenticado
  const AuthUser = useAuthUserContext(); // Maneja la autenticacion de usuario
  const [anchorEl, setAnchorEl] = useState(null);
  const LogOutUser = useLogOutContext(); // Maneja el cierre de sesion
  const navigate = useNavigate(); // Forma para navegar entre las paginas
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [cartera,setCartera] = useState(0);

  const userName = localStorage.getItem("local-user");
  const userImage = localStorage.getItem("local-picture");
  const imageFormat = localStorage.getItem("local-format");

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await AuthUser();
      setAuthenticated(authenticated);
    };
    checkAuth();
  }, [AuthUser]);

  useEffect(() => {
    if (isAuthenticated) {
      const carteraValue = localStorage.getItem("local-cartera");

      setCartera(parseFloat(carteraValue) || 0);
    }
  }, [isAuthenticated]);


  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    LogOutUser();// Llama a la función de cierre de sesión del contexto
  };

  const handleRequest = () => { // Maneja los request
    if (isAuthenticated) {
      navigate("/account-details"); // URL de detalles de cuenta
    } else {
      navigate("/login"); // Si el usuario no está autenticado, redirigir a la página de login
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
                <Nav.Link className="navlink" href="/">
                  TIENDA
                </Nav.Link>
                <Nav.Link className="navlink" href="/link">
                  COMUNIDAD
                </Nav.Link>
                {/*Nombre del usuario si se autentica en los items principales*/}
                {isAuthenticated ? (
                    <Nav.Link className="navlink" style={{textTransform: 'uppercase'}} href="/user-games">
                          {userName}
                    </Nav.Link>
                ) : (
                    <Nav.Link className="navlink" href="/link">
                      ACERCA DE
                    </Nav.Link>
                )}
                <Nav.Link className="navlink" href="/link">
                  SOPORTE
                </Nav.Link>
              </Nav>
            </Container>
            <Container>
              <Nav className="extraoptions">
                {isAuthenticated && userName? (
                    <div className="d-flex">
                      <button className="dark rectangular-button2">
                        <ImDownload className="download-icon mr-2"/>
                        <a href="https://cdn.akamai.steamstatic.com/client/installer/SteamSetup.exe">Instalar Steam</a>
                      </button>
                      <button className="dark rectangular-button3" >
                        <BsBell className="download-icon mr-2" />
                      </button>
                      <Typography variant="body2" className="cartera"
                                  sx={{marginTop: 3, fontSize: '12px', color: 'rgb(190, 187, 187);'}}>
                        ${cartera.toFixed(2)} USD💲
                      </Typography>
                      <IconButton
                          edge="end"
                          onClick={handleMenuOpen}
                          sx={{
                            width: 'auto',
                            alignItems: 'center',
                            padding: '4px',
                            marginTop: '4px'  // Ajustar la posición vertical
                          }}
                      >
                        <Typography variant="body2"
                                    sx={{marginRight: 1, fontSize: '13px', color: 'rgb(190, 187, 187);'}}>
                          {userName}▾
                        </Typography>

                        {userImage && imageFormat ? (
                            <Avatar
                                src={`data:${imageFormat};base64,${userImage}`}
                                alt="User"
                                sx={{
                                  borderRadius: 1,
                                  width: '34px',
                                  borderStyle: 'solid',
                                  borderWidth: '1px',
                                  boxShadow: '0 0 0 1px gray',
                                  borderColor: 'black',
                                  height: '34px' // Corregir la altura
                                }}
                            />
                        ) : (
                            <Avatar>{userName.charAt(0)}</Avatar>
                        )}
                      </IconButton>
                      <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleMenuClose}
                          PaperProps={{
                            sx: {
                              backgroundColor: '#2b3544', // Fondo oscuro
                              color: 'white', // Color del texto
                              '& .MuiMenuItem-root': {
                                color: 'white' // Asegurar que los elementos del menú tengan el texto blanco
                              }
                            }
                          }}
                      >
                        <MenuItem sx={{fontSize: '13px'}} onClick={handleRequest}>Detalles de
                          cuenta: {userName}</MenuItem>
                        <MenuItem sx={{fontSize: '13px'}} onClick={handleLogout}>Cerrar sesión</MenuItem>
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
