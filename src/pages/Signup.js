import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar.js';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Signup.css';
function Signup() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="signup">
      <NavigationBar />
      <header className='signup-header'>
      <Container className="signup-container">
        <Row className="row justify-content-center">
          <Col md={6}>
            <Card className='signupcard'>
              <Card.Body>
                <h2 className="text5 mb-4">CREAR TU CUENTA</h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="formEmail">
                    <Form.Label className='text2'>Dirección de correo electrónico</Form.Label>
                    <Form.Control className='forms' required type="email" />
                    <Form.Control.Feedback type="invalid">
                      Por favor ingresa un email válido.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formConfirmEmail">
                    <Form.Label className='text3'>Confirma tu dirección</Form.Label>
                    <Form.Control className='forms' required type="email" />
                    <Form.Control.Feedback type="invalid">
                      Los emails no coinciden.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formCountry">
                    <Form.Label className='text2'>País de residencia</Form.Label>
                    <Form.Control className='forms' as="select" required>
                      <option value=""></option>
                      {/* Agrega más opciones de países aquí */}
                      <option value="Argentina">Argentina</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      Por favor selecciona un país. 
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Agrega aquí el componente de reCAPTCHA */}

                  <Form.Group controlId="formTerms">
                    <Form.Check className='confirmacion text3'
                      required
                      label="Tengo más de 13 años y acepto los términos del Acuerdo de Suscriptor a Steam y la Política de Privacidad de Valve."
                      feedback="Debes aceptar los términos y condiciones."
                    />
                  </Form.Group>

                  <Button className='button' variant="primary" type="submit" block>
                    Continuar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </header>
    </div>
  );
}

export default Signup;