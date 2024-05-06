import React, { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import './Signup.css';
<<<<<<< Updated upstream
import axios from '../components/AxiosInstance.js';
=======
import axiosInstance from '../components/AxiosInstance.js';
>>>>>>> Stashed changes

function Signup() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
<<<<<<< Updated upstream
=======
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
>>>>>>> Stashed changes
  const [country, setCountry] = useState('');

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
<<<<<<< Updated upstream
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Aquí añades la lógica de la petición POST usando Axios
      try {
        const response = await axios.post('/api/v1/auth/signup',{
          email: email,
          confirmEmail: confirmEmail,
          country: country
        });
        // Suponiendo que el API responda con el token JWT
=======
    if (form.checkValidity() === false || password !== confirmPassword) {
      event.stopPropagation();
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
      }
    } else {
      try {
        const response = await axiosInstance.post('/signup', {
          email,
          confirmEmail,
          username,
          password,
          country
        });
>>>>>>> Stashed changes
        localStorage.setItem('jwtToken', response.data.token);
        alert('¡Registro exitoso!');
      } catch (error) {
        alert('Hubo un error en el registro: ' + error.message);
      }
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
                <Form.Group controlId="formUsername">
                    <Form.Label className='text2'>Nombre de usuario</Form.Label>
                    <Form.Control className='forms text-white' required type="text" onChange={(e) => setUsername(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                      Por favor ingresa un nombre de usuario.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label className='text2'>Contraseña</Form.Label>
                    <Form.Control className='forms text-white' required type="password" pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,}$" onChange={(e) => setPassword(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                      La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas y minúsculas.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formConfirmPassword">
                    <Form.Label className='text2'>Confirmar contraseña</Form.Label>
                    <Form.Control className='forms text-white' required type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                      Las contraseñas deben coincidir.
                    </Form.Control.Feedback>
                  </Form.Group>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Form.Group controlId="formEmail">
                    <Form.Label className='text2'>Dirección de correo electrónico</Form.Label>
                    <Form.Control className='forms text-white' required type="email" onChange={(e) => setEmail(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                      Por favor ingresa un email válido.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group controlId="formConfirmEmail">
                    <Form.Label className='text3 text-white'>Confirma tu dirección</Form.Label>
                    <Form.Control className='forms' required type="email" onChange={(e) => setConfirmEmail(e.target.value)} />
                    <Form.Control.Feedback type="invalid">
                      Los emails no coinciden.
                    </Form.Control.Feedback>
                  </Form.Group>



                  <Form.Group controlId="formCountry">
<<<<<<< Updated upstream
                    <Form.Label className='text2 text-white'>País de residencia</Form.Label>
                    <Form.Control className='forms text-white' as="select" required onChange={(e) => setCountry(e.target.value)}>
=======
                    <Form.Label className='text2'>País de residencia</Form.Label>
                    <Form.Control className='forms text-white' as="select" required>
>>>>>>> Stashed changes
                      <option value=""></option>
                      <option value="Argentina">Argentina</option>
                      {/* Agrega más opciones de países aquí */}
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
