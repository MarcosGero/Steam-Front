import { Container } from "react-bootstrap";
import Button from "react-bootstrap";
import { Link } from "react-router-dom";


function Underbanner(){
    return (
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
    );
}

export default Underbanner