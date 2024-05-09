import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "./Signup.css";
import { useSingUpUserContext } from "../components/AuthProvider";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");

  const navigate = useNavigate();
  const signUpUser = useSingUpUserContext(); // Usar el contexto de registro

  const handleSubmit = async (event) => { // Maneja el evento que sucede al clickear en registrar
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false || email !== confirmEmail || password !== confirmPassword) { // Se checkean datos que deben coincidir
      event.stopPropagation();
      if (email !== confirmEmail) {
        alert("Los correos electrónicos no coinciden.");
      }
      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden.");
      }
    } else {
      try { // Si todo sale bien, se llama a la funcion para registrar al usuario
        await signUpUser(username, email, password, country);
        navigate("/home"); // Va a la pagina home si el registro se realizo correctamente
      } catch (error) {
        alert("Hubo un error en el registro: " + error.message);
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
                  <h2 className="text5 mb-4">CREAR TU CUENTA</h2>
                  <Form.Group controlId="formUsername">
                    <Form.Label className="text2">Nombre de usuario</Form.Label>
                    <Form.Control
                      className="forms text-white"
                      required
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Por favor ingresa un nombre de usuario.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label className="text2">Contraseña</Form.Label>
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

                    <Form.Group controlId="formConfirmEmail">
                      <Form.Label className="text3 text-white">
                        Confirma tu dirección
                      </Form.Label>
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

                    <Form.Group controlId="formCountry">
                      <Form.Label className="text2">
                        País de residencia
                      </Form.Label>
                      <Form.Control
                        className="forms text-white"
                        as="select"
                        required
                        onChange={(e) => setCountry(e.target.value)}
                      >
                        <option value="">Selecciona tu país...</option>
                        <option value="Argentina">Argentina</option>
                        {/* Agrega más opciones de países aquí */}
                        <option value="Brasil">Brasil</option>
                        <option value="Chile">Chile</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Perú">Perú</option>
                      </Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Por favor selecciona un país.
                      </Form.Control.Feedback>
                    </Form.Group>

                    {/* Agrega aquí el componente de reCAPTCHA */}

                    <Form.Group controlId="formTerms">
                      <Form.Check
                        className="confirmacion text3"
                        required
                        label="Tengo más de 13 años y acepto los términos del Acuerdo de Suscriptor a Steam y la Política de Privacidad de Valve."
                        feedback="Debes aceptar los términos y condiciones."
                      />
                    </Form.Group>

                    <Button
                      className="button"
                      variant="primary"
                      type="submit"
                      block
                    >
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
