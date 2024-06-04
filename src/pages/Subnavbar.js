import {Button, ButtonGroup, Form} from "react-bootstrap";
import React from "react";

function Subnavbar() {
    return (
    <div className='buttonscontainer'>
           <ButtonGroup className='buttonsbar' aria-label="buttons">
                <Button className='bar1' variant="secondary">Tu tienda</Button>
                <Button className='bar1' variant="secondary">Nuevo y destacable</Button>
                <Button className='bar1' variant="secondary">Categorías</Button>
                <Button className='bar1' variant="secondary">Tienda de puntos</Button>
                <Button className='bar1' variant="secondary">Noticias</Button>
                <Button className='bar1' variant="secondary">Laboratorios</Button>
                <Form.Control className='searchgame' size="sm" type="text"/>
            </ButtonGroup>
    </div>
    );
}

export default Subnavbar;