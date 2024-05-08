import './Login.css';
import NavigationBar from '../components/NavigationBar.js';
import { Form, Button, Container, Row, Card } from 'react-bootstrap';
import { useState } from 'react';
import Underbanner from '../components/Underbanner.js';
import { useLoginContext } from "../components/AuthProvider.js"

import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Añadir un estado para manejar los errores de login
  const navigate = useNavigate();

  const LogUser = useLoginContext(); // Usar el contexto de login

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const errorMsg = await LogUser(username, password); // Llamar a la función de login del contexto
      if (errorMsg) {
        setError(errorMsg);
      } else {
        navigate('/home'); // Navegar a 'home' si el login es exitoso
      }
    } catch (error) {
      console.error('Login failed', error.response || error);
      setError('Error de inicio de sesión. Por favor verifica tus credenciales.');
    }
  };


  return (
    <div className="App">
      <header className="login-header">
        <Container fluid className="login-container">
          <Row className="row justify-content-center">
            <h1 className='title'>Iniciar sesión</h1>
            <Card className="logincard"> 
              <Card.Body>
                <Form className="form" onSubmit={handleSubmit}>

                  <h3 className="text1 text-left">INICIA SESIÓN CON EL NOMBRE DE LA CUENTA</h3>

                  <Form.Group className="mb-3">
                    <Form.Control className="forms text-white" type="text" value={username}
                          onChange={(e) => setUsername(e.target.value)} placeholder="Nombre de usuario" />
                  </Form.Group>

                  <h5 className="text-left text2">CONTRASEÑA</h5>

                  <Form.Group className="mb-3">
                    <Form.Control className="forms text-white" type="password" value={password}
                          onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
                  </Form.Group>

                  <Form.Group className="text-left text2">
                    <Form.Check type="checkbox" label="Recordarme" />
                  </Form.Group>

                  {error && <div className="alert alert-danger">{error}</div>} {/* Mostrar errores de login */}

                  <Button variant="primary" type="submit" className="button">
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
