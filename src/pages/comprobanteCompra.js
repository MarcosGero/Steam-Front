import React, { useEffect, useState } from "react";
import "./comprobanteCompra.css";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ComprobanteCompra() {
    const [cartGames, setCartGames] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartera, setCartera] = useState(parseFloat(localStorage.getItem("local-cartera")) || 0);
    const userName = localStorage.getItem("local-user");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartGames = async () => {
            try {
                const response = await axios.get(`/user/me/carrito`);
                setCartGames(response.data);

                // Calculate the total price
                const total = response.data.reduce((sum, game) => sum + game.price, 0);
                setTotalPrice(total);
            } catch (error) {
                console.error("Error fetching cart games:", error);
            }
        };

        const processPurchase = async () => {
            try {
                const response = await axios.post(`/user/me/purchase`, { totalPrice });
                if (response.data.success) {
                    localStorage.setItem("local-cartera", cartera - totalPrice);
                } else {
                    alert("No tienes suficiente dinero en tu cartera para completar esta compra.");
                }
            } catch (error) {
                console.error("Error processing purchase:", error);
                alert("Ocurrió un error al procesar la compra.");
            }
        };

        fetchCartGames();
        processPurchase();
    }, [totalPrice, cartera, navigate]);

    const getCurrentDate = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, "0");
        const month = date.toLocaleString("default", { month: "short" }).toUpperCase();
        const year = date.getFullYear();
        const time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        return `${day} ${month} ${year} a las ${time}`;
    };

    const generateRandomInvoiceNumber = () => {
        const length = 16;
        const characters = "0123456789";
        let invoiceNumber = "";
        for (let i = 0; i < length; i++) {
            invoiceNumber += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return invoiceNumber;
    };

    const handlePrint = () => {
        const currentDate = getCurrentDate();
        const invoiceNumber = generateRandomInvoiceNumber();

        let printContent = `
      <div style="background-color: white; color: black; padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="font-size: 50px; text-align: center; color: #2c3e50;">Comprobante de Compra - Steam</h1>
        <p style="font-size: 30px; line-height: 45px;">
          <strong>Nombre de la cuenta:</strong> ${userName}<br>
          <strong>Factura:</strong> ${invoiceNumber}<br>
          <strong>Fecha de emisión:</strong> ${currentDate}<br>
          <strong>Método de pago:</strong> Cartera de Steam
        </p>
        <h2 style="color: #2c3e50;">Detalles de la Compra</h2>
    `;

        cartGames.forEach((game) => {
            printContent += `
        <p style="font-size: 30px; line-height: 45px;">
          <strong>Producto:</strong> ${game.name}<br>
          <strong>Precio:</strong> $${game.price.toFixed(2)} USD<br>
          <strong>Puntos de Steam ganados:</strong> ${Math.round(game.price * 100)}
        </p>
      `;
        });

        printContent += `
      <h2 style="color: #2c3e50;">Gracias por tu transacción reciente en Steam</h2>
      <p style="font-size: 30px; line-height: 45px;">
        Los artículos a continuación se han agregado a tu biblioteca de Steam. <br><br>
        Si eres nuevo en Steam, puedes obtener la aplicación de Steam gratuita <a href="http://www.steampowered.com/getsteam" target="_blank">aquí</a>.
      </p>
      <h2 style="color: #2c3e50;">Información Adicional</h2>
      <p style="font-size: 30px; line-height: 45px;">
        Este email te servirá como recibo. También puedes <a href="https://store.steampowered.com/account/history/" target="_blank">ver tu historial de compras</a> en cualquier momento. <br><br>
        Muchos productos de Steam se pueden devolver o reembolsar. Haz clic <a href="https://store.steampowered.com/steam_refunds/" target="_blank">aquí</a> para obtener más información sobre los reembolsos en Steam, o dirígete <a href="https://help.steampowered.com/" target="_blank">aquí</a> para solicitar uno.
      </p>
      <h2 style="color: #2c3e50;">Saludos,</h2>
      <p style="font-size: 30px; line-height: 45px;">
        El equipo de Steam
      </p>
    </div>
    `;

        const tempElement = document.createElement("div");
        tempElement.innerHTML = printContent;
        document.body.appendChild(tempElement);

        html2canvas(tempElement).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            const imgWidth = 210;
            const pageHeight = 295;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save("comprobante.pdf");
            document.body.removeChild(tempElement);
        });
    };

    return (
        <div className="container-p">
            <div className="header">
                <h1>¡GRACIAS POR TU COMPRA!</h1>
            </div>
            <div className="content">
                <p>
                    Se te envió un correo electrónico de confirmación.<br />
                    Todos los artículos digitales de este pedido están ahora registrados en tu cuenta de Steam. Para
                    acceder a ellos, simplemente visita tu <a href="#">biblioteca en Steam</a> cuando quieras.
                </p>
            </div>
            <div className="receipt">
                <h2>RECIBO DE TU COMPRA</h2>
                <p>
                    A continuación, te proporcionamos la confirmación de tu compra. También te la enviaremos por email
                    dentro de poco.
                </p>
                <p>Nombre de cuenta: <span>{userName}</span></p>
                <p>Total: <span>${totalPrice.toFixed(2)} USD</span></p>
                <p>Código de confirmación: <span>{generateRandomInvoiceNumber()}</span></p>
                <button onClick={handlePrint}>Imprimir</button>
            </div>
        </div>
    );
}

export default ComprobanteCompra;
