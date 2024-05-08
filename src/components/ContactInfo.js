import React from 'react';

function ContactInfo() {
  return (
    <div className="card mb-3">
      <div className="card-header">
        Información de contacto
      </div>
      <div className="card-body">
        <p className="card-text">Dirección de email: ejemplo@gmail.com</p>
        <p className="card-text">Estado: Verificado</p>
        <button className="btn btn-primary">Cambiar dirección de email</button>
        <button className="btn btn-secondary">Agregar número de teléfono</button>
      </div>
    </div>
  );
}

export default ContactInfo;
