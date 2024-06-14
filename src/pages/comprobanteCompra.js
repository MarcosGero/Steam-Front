import React, {useEffect, useState} from "react";
import "./comprobanteCompra.css"
import axios from "axios";

function comprobanteCompra() {
    const userName = localStorage.getItem("local-user");
    return (
        <div className="container-p">
            <div className="header">
                <h1>¡GRACIAS POR TU COMPRA!</h1>
            </div>
            <div className="content">
                <p>Se te envió un correo electrónico de confirmación.<br/>
                    Todos los artículos digitales de este pedido están ahora registrados en tu cuenta de Steam. Para
                    acceder a ellos, simplemente visita tu <a href="#">biblioteca en Steam</a> cuando quieras.</p>
            </div>
            <div className="receipt">
                <h2>RECIBO DE TU COMPRA</h2>
                <p>A continuación, te proporcionamos la confirmación de tu compra. También te la enviaremos por email
                    dentro de poco.</p>
                <p>Nombre de cuenta: <span>{userName}</span></p>
                <p>Total: <span>$0.50 USD</span></p>
                <p>Código de confirmación: <span>3796051968073945236</span></p>
                <button onClick="">Imprimir</button>
            </div>
        </div>
    );
}

export default comprobanteCompra
