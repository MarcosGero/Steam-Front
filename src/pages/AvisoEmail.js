import React from 'react';
import './AvisoEmail.css';

const AvisoEmail = () => {
  return (
    <div style={{ color: 'white', backgroundColor: '#142540', minHeight: '100vh' }} className="email-verification-container">
      <header className='signup-header'>
      <h1>Verifica tu correo electrónico</h1>
      <p>
        Busca un correo electrónico de Steam en <span className="email-address">marcos.gelves1999@gmail.com</span> para completar la configuración de tu cuenta.
      </p>
      <div className="loading-animation">
        {/* Agregar aquí alguna animacion o indicador de carga */}
      </div>
      <p className="waiting-text">Esperando que verifiques...</p>
      <p className="not-received-text">
        ¿No has recibido nuestro correo electrónico?{' '}
        <span className="expand-link">Ampliar</span>
      </p>
      </header>
    </div>
  );
};

export default AvisoEmail;
