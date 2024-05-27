import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>CENTRO DE NOTICIAS DE STEAM</h2>
      <div className="menu-section">
        <h3>Tus Noticias y Eventos</h3>
        <ul>
          <li>Personalizado</li>
          <li>Tus Eventos Futuros</li>
        </ul>
      </div>
      <div className="menu-section">
        <h3>Eventos y Noticias Globales</h3>
        <ul>
          <li className="selected">Destacado</li>
          <li>Oficial de Steam</li>
        </ul>
      </div>
      <h3>BUSCAR</h3>
      <input type="text" placeholder="Buscar" />
      <div className="footer">
        <h3>DESCUBRIR</h3>
        <div className="seccion">
          <button>Noticias de Mentores</button>
        </div>
        <div className="seccion">
          <button>Opciones y Filtros</button>
          <p>Solicitar vista adaptativa</p>
        </div>
        <p>© 2024 Valve Corporation. Todos los derechos reservados.Todas las marcas registradas pertenecen a sus respectivos dueños</p>
      </div>
    </div>
  );
}

export default Sidebar;