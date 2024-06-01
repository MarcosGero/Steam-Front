import React, {useState} from 'react';
import './Sidebar.css';
import logo from '../resources/logo_stem.png';
import logo1 from '../resources/tuerca.png';

function Sidebar() {

    const [isCollapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!isCollapsed);
    };

    return (
        <>
            {/* Sidebar cuando no está colapsada */}
            {!isCollapsed && (
                <div className="sidebar" style={{
                    transform: 'translateX(0)',
                    transition: 'transform 0.3s ease'
                }}>
                    <div className="sidebar-header">
                        <span className="toggle-button" onClick={toggleCollapsed}>
                            {isCollapsed ? '»' : '«'}
                        </span>
                        <h2>CENTRO DE NOTICIAS DE STEAM</h2>
                    </div>
                    <div className="menu-section">
                        <h3>TUS NOTICIAS Y EVENTOS</h3>

                        <button className='custom-button'>
                            <span className='button-text'> TUS NOTICIAS</span>
                            <span className='button-subtext'>Personalizado</span>
                        </button>

                        <button className='custom-button'>
                            <span className='button-text'> TUS EVENTOS FUTUROS</span>
                            <span className='button-subtext'>Personalizado</span>
                        </button>

                    </div>
                    <div className="menu-section">
                        <h3>EVENTOS Y NOTICIAS GLOBALES</h3>

                        <button className='custom-button'>
                            <span className='button-text'> DESTACADO</span>
                            <span className='button-subtext'>De las mejores fuentes</span>
                        </button>

                        <button className='custom-button'>
                            <span className='button-text'> OFICIAL DE STEAM</span>
                            <span className='button-subtext'>Blog y noticias de Steam</span>
                        </button>

                    </div>
                    <div className="seccion">
                        <h3>BUSCAR</h3>
                        <input type="text"/>
                    </div>
                    <div className="seccion">
                        <h3>DESCUBRIR</h3>
                        <button className='custom-button'>
                            <span className='button-text'> NOTICIAS DE MENTORES</span>
                        </button>
                    </div>

                    <div className="seccion-2">
                        <button className='custom-button-2'>
                            <img className='logo1' src={logo1} alt="logo1"/>
                            <span className='button-text'> OPCIONES Y FILTROS</span>
                        </button>
                        <a href=" ">Solicitar vista adaptativa</a>
                    </div>
                    <div className="footer">
                        <hr/>
                        <img src={logo} alt="Logo de la empresa"/>
                        <p>© 2024 Valve Corporation. Todos los derechos reservados.Todas las marcas registradas pertenecen a sus
                            respectivos dueños en EE. UU. y otros países.</p>
                    </div>

                </div>
            )}

            {/* Sidebar cuando está colapsada */}
            {isCollapsed && (
                <div className="sidebar" style={{
                    transform: 'translateX(-85%)',
                    transition: 'transform 0.3s ease'
                }}>
                    <div className="sidebar-header">
                        <span className="toggle-button" onClick={toggleCollapsed}>
                            {isCollapsed ? '»' : '«'}
                        </span>
                        <h2>CENTRO DE NOTICIAS DE STEAM</h2>
                    </div>
                </div>
            )}
        </>
    );
}

export default Sidebar;