import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./footer.css";

const Footer = () => {
    return (
      <footer className="bg-dark text-footer py-3">
        <Container>
        <Row className="mt-1 text-center">
            <Col>
                <hr/>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col xs={1}>
              <img src="/path-to-valve-logo.png" alt="Logo de Valve" className="footer-logo" />
            </Col>
            <Col xs={10} className="text-center">
              <span>© 2024 Valve Corporation. Todos los derechos reservados. Todas las marcas registradas pertenecen a sus respectivos dueños en EE. UU. y otros países.</span>
              <img src="/path-to-steam-logo.png" alt="Logo de Steam" className="footer-logo mx-2" />
              <span>Todos los precios incluyen IVA (donde sea aplicable).</span>
              <a href="#" className="text-link mx-2">Política de Privacidad</a> |
              <a href="#" className="text-link mx-2">Información legal</a> |
              <a href="#" className="text-link mx-2">Acuerdo de Suscriptor a Steam</a> |
              <a href="#" className="text-link mx-2">Reembolsos</a> |
              <a href="#" className="text-link mx-2">Cookies</a>
            </Col>
            <Col xs={1}>
              {/* Espacio si quieres agregar algo aquí o dejarlo para alinear el diseño */}
            </Col>
          </Row>
          <Row className="mt-1 text-center">
            <Col>
                <hr/>
            </Col>
          </Row>
          <Row className="mt-1 text-center">
            <Col>
              <a href="#" className="text-link mx-2">Acerca de Valve</a> |
              <a href="#" className="text-link mx-2">Empleo</a> |
              <a href="#" className="text-link mx-2">Steamworks</a> |
              <a href="#" className="text-link mx-2">Distribución de Steam</a> |
              <a href="#" className="text-link mx-2">Soporte</a> |
              <a href="#" className="text-link mx-2">Tarjetas de regalo</a> |
              <a href="#" className="text-link mx-2">Steam</a> |
              <a href="#" className="text-link mx-2">@steam</a> |
            </Col>
          </Row>
        </Container>
      </footer>
    );
};

export default Footer;
