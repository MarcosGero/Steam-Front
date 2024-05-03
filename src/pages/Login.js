import './Login.css';
import NavigationBar from '../components/NavigationBar.js'
import { Form, Button, Container, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import Signup from './Signup.js';
function Login() {
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
                  <Form.Control className="forms" type="text"/>
                </Form.Group>

                <h5 className="text-left text2">CONTRASEÑA</h5>
                <Form.Group className="mb-3">
                  <Form.Control className="forms" type="password"/>
                </Form.Group>

                <Form.Group className="text-left text2">
                  <Form.Check type="checkbox" label="Recordarme" />
                </Form.Group>

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
      <Container fluid className="underbanner">
        <Container className='underbanner-content'>
          <Container className='left'>
            <p className='textopregunta'>¿Es la primera vez que usas Steam?</p>
            <Link to= '/signup'>
            <Button variant="primary" type="submit" className="button1">
                  <p className='buttontext'>Crea una cuenta</p>
            </Button>
            </Link>
          </Container>
          <Container className='right'>
            <p className='textolargo text2'>Es gratis y muy fácil. Descubre miles de juegos para jugar con millones de nuevos amigos. Más información acerca de Steam</p>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default Login;
