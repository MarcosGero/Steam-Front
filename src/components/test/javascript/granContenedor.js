import React from 'react';
import Menu from '../../menu';
import Contenido from './contenido';
import '../css/GranContenedor.css'

function granContenedor() {
    return (
        <div className="gran-contenedor">
            <Menu/>
            <Contenido/>
        </div>
    );
}

export default granContenedor;