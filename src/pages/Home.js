import React from 'react';
import NavigationBar from '../components/NavigationBar'; // Adjust the path as necessary

function Home() { // Pagina a la que se accede una vez se encuentra logueado
    return (
        <div>
            <div style={{ color: 'white', backgroundColor: '#142540', minHeight: '100vh' }} className="homepage-content">
                <h1>Bienvenido!</h1>
                <p>Esta es una pagina placeholder mas adelante se implementara en los siguientes incrementos.</p>
            </div>
        </div>
    );
}

export default Home