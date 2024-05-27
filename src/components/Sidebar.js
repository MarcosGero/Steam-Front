import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Centro de Noticias de Steam</h2>
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
      <input type="text" placeholder="Buscar" />
      <div className="footer">
        <p>Noticias de Mentores</p>
        <button>Opciones y Filtros</button>
        <button>Solicitar vista adaptativa</button>
        <p>© 2024 Valve Corporation. Todos los derechos reservados.</p>
      </div>
    </div>
  );
}

export default Sidebar;