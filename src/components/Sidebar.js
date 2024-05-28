import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">

      <h2>CENTRO DE NOTICIAS DE STEAM</h2>

      <div className="menu-section">
        <h3>TUS NOTICIAS Y EVENTOS</h3>

        <button className='custom-button' >
          <span className='button-text'> TUS NOTICIAS</span>
          <span className='button-subtext'>Personalizado</span>
        </button>

        <button className='custom-button' >
          <span className='button-text'> TUS EVENTOS FUTUROS</span>
          <span className='button-subtext'>Personalizado</span>
        </button>

      </div>
      <div className="menu-section">
        <h3>EVENTOS Y NOTICIAS GLOBALES</h3>

        <button className='custom-button' >
          <span className='button-text'> DESTACADO</span>
          <span className='button-subtext'>De las mejores fuentes</span>
        </button>

        <button className='custom-button' >
          <span className='button-text'> OFICIAL DE STEAM</span>
          <span className='button-subtext'>Blog y noticias de Steam</span>
        </button>

      </div>

      <h3>BUSCAR</h3>
      <input type="text"/>

      <div className="footer">
        <h3>DESCUBRIR</h3>

        <div className="seccion">
          <button className='custom-button'>
            <span className='button-text'> NOTICIAS DE MENTORES</span>
          </button>
        </div>

        <div className="seccion">
          <button className='custom-button-2'>
            <span className='button-text'> OPCIONES Y FILTROS</span>
          </button>
          <p>Solicitar vista adaptativa</p>
        </div>

        <p>© 2024 Valve Corporation. Todos los derechos reservados.Todas las marcas registradas pertenecen a sus respectivos dueños</p>
      
      </div>

    </div>
  );
}

export default Sidebar;