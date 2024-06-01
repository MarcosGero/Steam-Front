import React from 'react';
import './EmailVerification.css';

const EmailVerification = () => {
  return (
    <div style={{ color: 'white', backgroundColor: '#142540', minHeight: '100vh' }} className="email-verification-container">
        <header className='signup-header'>
            <h1>EMAIL VERIFICADO</h1>
            <p>
                Vuelve a la ventana anterior para completar la verificación de tu correo electrónico.
            </p>
            <p>
            * Puedes cerrar esta ventana.
            </p>
        </header>
    </div>
    
  );
};

export default EmailVerification;
