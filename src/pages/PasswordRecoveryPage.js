import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "./Signup.css";
import { usePasswordResetContext } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

function PasswordResetRequest() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const requestPasswordReset = usePasswordResetContext(); // Usar el contexto de recuperación de contraseña

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        const responseMessage = await requestPasswordReset(email);
        setMessage(responseMessage);
      } catch (error) {
        alert("Hubo un error: " + error.message);
      }
    }
    setValidated(true);
  };

  return (
      <div className="signup">
        <header className="signup-header">
          <Container className="signup-container">
            <Row className="row justify-content-center">
              <Col md={6}>
                <Card className="signupcard">
                  <Card.Body>
                    <h2 className="text5 mb-4">Recupera tu contraseña</h2>
                    <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                      <Form.Group controlId="formEmail">
                        <Form.Label className="text2">
                          Dirección de correo electrónico
                        </Form.Label>
                        <Form.Control
                            className="forms text-white"
                            required
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Por favor ingresa un email válido.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <br/>
                      <Button
                          className="button"
                          variant="primary"
                          type="submit"
                          block
                      >
                        Continuar
                      </Button>
                    </Form>
                    {message && <p className="mt-3">{message}</p>}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </header>
      </div>
  );
}

export default PasswordResetRequest;
