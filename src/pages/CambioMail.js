import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function CambioMail() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false || email !== confirmEmail) {
      event.stopPropagation();
      if (email !== confirmEmail) {
        alert("Los correos electrónicos no coinciden.");
      }
    } else {
      try {
        const response = await fetch("http://localhost:8080/api/v1/user/me/email", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("local-token")}`
          },
          body: JSON.stringify({ email })
        });
        if (response.ok) {
          setMessage("Correo electrónico actualizado correctamente.");
        } else {
          setMessage("Error al actualizar el correo electrónico.");
        }
      } catch (error) {
        console.error("Error:", error);
        setMessage("Error al actualizar el correo electrónico.");
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
                    <h2 className="text5 mb-4">Cambia tu Correo electrónico</h2>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Form.Group controlId="formEmail">
                        <Form.Label className="text2">Dirección de correo electrónico</Form.Label>
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

                      <Form.Group controlId="formConfirmEmail">
                        <Form.Label className="text3 text-white">Confirma tu dirección</Form.Label>
                        <Form.Control
                            className="forms"
                            required
                            type="email"
                            onChange={(e) => setConfirmEmail(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">
                          Los emails no coinciden.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Button className="button" variant="primary" type="submit" block>
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

export default CambioMail;
