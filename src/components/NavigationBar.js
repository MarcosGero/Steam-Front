import React, { useEffect, useState, useContext } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import {
  useAuthUserContext,
  useLogOutContext,
} from "../components/AuthProvider"; // Importa el contexto necesario
import { BiWorld } from "react-icons/bi"; // Asegúrate de importar los íconos necesarios
import { ImDownload } from "react-icons/im";

const NavigationBar = () => {
  const [isAuthenticated, setAuthenticated] = useState();
  const AuthUser = useAuthUserContext(); // Suponiendo que estas funciones están definidas en tu contexto
  const LogOutUser = useLogOutContext(); // Función para manejar el cierre de sesión
  const navigate = useNavigate();

  useEffect(() => {
    setAuthenticated(AuthUser());
  }, [AuthUser]);

  const handleLogout = () => {
    LogOutUser(); // Llama a la función de cierre de sesión del contexto
  };

  const handleRequest = () => {
    if (isAuthenticated) {
      navigate("/account-details"); // URL de detalles de cuenta
    } else {
      navigate("/"); // Si el usuario no está autenticado, redirigir a la página de login
    }
  };

  return (
    <Navbar className="navbar" variant="dark" expand="lg">
      <Container className="navitems justify-content-center text-center">
        <div className="navbar-logo-container">
          <Navbar.Brand href="/">
            <img src="/logo.svg" alt="Mi Logo" className="logo" />
          </Navbar.Brand>
        </div>
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
        <Container className="navoptions">
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
                  <NavDropdown.Item style={{ padding: "3px"}}  onClick={handleRequest}>
                      <div className="navDropOptions">
                          Detalles de cuenta: <a style={{color:"#4cb4ff"}}>{localStorage.getItem("local-user")}</a>
                      </div>
                    </NavDropdown.Item>
                  <NavDropdown.Item style={{ padding: "3px"}} onClick={handleLogout}>
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
                <div className="location-container navtext2">
                  <BiWorld className="location-icon" />
                  <p>idioma</p>
                </div>
              </>
            )}
          </Nav>
        </Container>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
