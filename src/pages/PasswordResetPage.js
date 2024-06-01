import React, { useState } from "react";

import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "./Signup.css";
import { useSingUpUserContext } from "../components/AuthProvider";
import {useLocation, useNavigate} from "react-router-dom";

function Signup() {

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');



  const handleSubmit = async (event) => { // Maneja el evento que sucede al clickear en registrar
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false || password !== confirmPassword) { // Se checkean datos que deben coincidir
      event.stopPropagation();
      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
      }
    } else {
      try {
        const response = await fetch('http://localhost:8080/api/v1/auth/password-reset/reset', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, password }),
        });
        if (response.ok) {
          alert('Contraseña restablecida correctamente.');
        } else {
          alert('Error al restablecer la contraseña.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  return (
    <div className="signup">
      <header className="signup-header">
        <Container className="signup-container">
          <Row className="row justify-content-center">
            <Col md={6}>
              <Card className="signupcard">
                <Card.Body>
                  <h2 className="text5 mb-4">Restablece tu contraseña</h2>

                  <Form.Group controlId="formPassword">
                    <Form.Label className="text2">Nueva contraseña</Form.Label>
                    <Form.Control
                      className="forms text-white"
                      required
                      type="password"
                      pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,}$"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      La contraseña debe tener al menos 8 caracteres, incluyendo
                      mayúsculas y minúsculas.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formConfirmPassword">
                    <Form.Label className="text2">
                      Confirmar contraseña
                    </Form.Label>
                    <Form.Control
                      className="forms text-white"
                      required
                      type="password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Las contraseñas deben coincidir.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Button
                    className="button"
                    variant="primary"
                    type="submit"
                    block
                    onSubmit={handleSubmit}
                    >
                      Continuar
                    </Button>
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
