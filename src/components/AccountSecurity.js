import React from 'react';

function AccountSecurity() {
  return (
    <div className="card mb-3">
      <div className="card-header">
        Seguridad de la cuenta
      </div>
      <div className="card-body">
        <p className="card-text">Estado: Protegida por email de Steam Guard</p>
        <button className="btn btn-link">Administrar Steam Guard</button>
        <button className="btn btn-primary">Cambiar mi contraseña</button>
        <button className="btn btn-danger">Eliminar mi cuenta de Steam</button>
      </div>
    </div>
  );
}

export default AccountSecurity;
