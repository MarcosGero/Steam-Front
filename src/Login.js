import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const Login = () => {
  return (
    
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card style={{ width: '18rem' }} className="mx-auto p-4"> {/* Estilo y clases para centrar */}
            <Card.Body>
              <h3 className="text-center mb-4">INICIA SESIÓN CON EL NOMBRE DE LA CUENTA</h3>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Nombre de la cuenta" />
                </Form.Group>

                <h5 className="text-center mb-3">CONTRASEÑA</h5>
                <Form.Group className="mb-3">
                  <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Iniciar sesión
                </Button>
              </Form>
              <div className="text-center mt-3 text-muted">
                <a href="#">Ayuda, no puedo iniciar sesión</a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
