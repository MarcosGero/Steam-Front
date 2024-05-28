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

const NavigationBar = () => {
  const [isAuthenticated, setAuthenticated] = useState(); // Indica si es usuario esta o no autenticado
  const AuthUser = useAuthUserContext(); // Maneja la autenticacion de usuario
  const LogOutUser = useLogOutContext(); // Maneja el cierre de sesion
  const navigate = useNavigate(); // Forma para navegar entre las paginas
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  useEffect(() => {
    setAuthenticated(AuthUser());
  }, [AuthUser]);

  const handleLogout = () => {
    LogOutUser(); // Llama a la función de cierre de sesión del contexto
  };

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
                  <>
                    <button className="dark rectangular-button2">
                      <ImDownload className="download-icon mr-2" />
                      Instalar Steam
                    </button>
                    <NavDropdown
                      className="nav-dropdown"
                      title={localStorage.getItem("local-user")}
                      menuVariant="dark"
                    >
                      <NavDropdown.Item
                        style={{ padding: "3px" }}
                        onClick={handleRequest}
                      >
                        <div className="navDropOptions">
                          Detalles de cuenta:{" "}
                          <a style={{ color: "#4cb4ff" }}>
                            {localStorage.getItem("local-user")}
                          </a>
                        </div>
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        style={{ padding: "3px" }}
                        onClick={handleLogout}
                      >
                        <div className="navDropOptions">
                          Cerrar sesión de la cuenta...
                        </div>
                      </NavDropdown.Item>
                    </NavDropdown>
                  </>
                ) : (
                  <>
                    <button className="rectangular-button">
                      <ImDownload className="download-icon mr-2" />
                      Instalar Steam
                    </button>
                    <div onClick={handleRequest} className="navtext2">
                      Iniciar sesion
                    </div>
                    <div className="navtext2 divider"></div>
                    <div className="location-container">
                      <Container className="navbar-container">
                        <BiWorld className="location-icon"/>
                        <p className="navtext2">idioma</p>
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
