import './Login.css';
import { Form, Button, Container, Row, Card } from 'react-bootstrap';
import { useState } from 'react';
import Underbanner from '../components/Underbanner.js';
import { useLoginContext } from "../components/AuthProvider.js"

import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState(''); // Constante que guarda el nombre de usuario
  const [password, setPassword] = useState('');// Constante que guarda la contraseña
  const [error, setError] = useState(''); // Para manejar errores
  const navigate = useNavigate();

  const LogUser = useLoginContext(); // Usar el contexto de login

  const handleSubmit = async (event) => { // Maneja los eventos de subida de informacion (cuando se clickea en iniciar sesion)
    event.preventDefault();
    const errorMsg = await LogUser(username, password); // Llamar a la función de login del contexto
    setError(errorMsg);
  };

  // Formulario
  
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
                    <Form.Control 
                          className={`forms text-white ${error ? 'error-border' : ''}`}
                          type="text" 
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}/>
                  </Form.Group>

                  <h5 className="text-left text2">CONTRASEÑA</h5>

                  <Form.Group className="mb-3">
                    <Form.Control 
                          className={`forms text-white ${error ? 'error-border' : ''}`}
                          type="password" 
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}/>
                  </Form.Group>
                  
                  <Form.Group className="text-left text2">
                    <Form.Check type="checkbox" label="Recordarme" />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="button">
                    Iniciar sesión
                  </Button>

                  {error && <div className="error">{error}</div>} {/* Mostrar errores de login */}
                  <div className="text3 text-muted">
                    <a className="text2" href="/recovery">Ayuda, no puedo iniciar sesión</a>
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
