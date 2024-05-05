import './Login.css';
import NavigationBar from '../components/NavigationBar.js'
import { Form, Button, Container, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import axiosInstance from '../components/AxiosInstance.js';
import Signup from './Signup.js';
import Underbanner from '../components/Underbanner.js';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let data = {
    username: username,
    password: password
  }

  const handleSubmit = async (event) => {
    event.preventDefault();  // Evitar el comportamiento de envío por defecto del formulario
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8080/users/login',
      headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Basic dXNlcjpwYXNzd29yZA=='
      },
      data:  data
  };

    try {
      const response = await axiosInstance(config);

        console.log('Login successful', response.data);
        // Manejar la respuesta, por ejemplo, guardar el token de acceso, redirigir al usuario, etc.
    } catch (error) {
        console.error('Login failed', error.response || error);
        // Manejar el error, como mostrar un mensaje al usuario
    }
};
  return (
    <div className="App">
      <NavigationBar />
      <header className="login-header">
      <Container fluid className="login-container">
      <Row className="row justify-content-center">
        <h1 className='title'>Iniciar sesión</h1>
          <Card className="logincard"> 
            <Card.Body>
              <Form className="form">

                <h3 className="text1 text-left">INICIA SESIÓN CON EL NOMBRE DE LA CUENTA</h3>

                <Form.Group className="mb-3">
                  <Form.Control className="forms" type="text" value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <h5 className="text-left text2">CONTRASEÑA</h5>

                <Form.Group className="mb-3">
                  <Form.Control className="forms" type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

                <Form.Group className="text-left text2">
                  <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>

                <Button variant="primary" type="submit" className="button" onClick={handleSubmit} >
                  Iniciar sesión
                </Button>

                <div className="text3 text-muted">
                  <a className="text2" href="#">Ayuda, no puedo iniciar sesión</a>
                </div>

              </Form>
              
            </Card.Body>
          </Card>
      </Row>
    </Container>
        
      </header>
      <Underbanner/>
    </div>
  );
}

export default Login;
