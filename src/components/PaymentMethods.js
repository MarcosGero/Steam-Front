import React from 'react';

function PaymentMethods() {
  return (
    <div className="card mb-3">
      <div className="card-header">
        Métodos de pago
      </div>
      <div className="card-body">
        <p className="card-text">MasterCard que termina en X</p>
        <button className="btn btn-link">Modificar</button>
        <button className="btn btn-link">Eliminar</button>
        <button className="btn btn-primary">Actualizar el método de pago</button>
      </div>
    </div>
  );
}

export default PaymentMethods;
