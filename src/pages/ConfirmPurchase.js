import React, { useState, useEffect } from 'react';
import "./checkout.css";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ConfirmPurchase() {
    const [cartGames, setCartGames] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [userName, setUserName] = useState('');
    const [cartera, setCartera] = useState(0);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await axios.get(`/user/me/carrito`);
                setCartGames(response.data);

                const total = response.data.reduce((sum, game) => sum + game.price, 0);
                setTotalPrice(total);

                const userResponse = await axios.get(`/user/me`);
                setCartera(userResponse.data.cartera);
                setUserName(userResponse.data.userName);
            } catch (error) {
                console.error('Error fetching cart or user data:', error);
            }
        };

        fetchCartData();
    }, []);

    const handlePurchase =  () => {
        if (!termsAccepted) {
            alert('Debes aceptar los términos y condiciones.');
            return;
        }
            navigate('/comprobante');
    };

    return (
        <div className='checkcont'>
            <div className='checkout'>
                <div className='checktabs'>
                    <div className='infopay1'>
                        Información del pago
                    </div>
                    <div className='arrow'>
                        ►
                    </div>
                    <div className='revcomp1'>
                        Revisión + Compra
                    </div>
                </div>
                <div className='contPay2'>
                    <div className='centersec'>
                        {cartGames.map(game => (
                            <div className='gamedesc' key={game.id}>
                                <img className='gamedescImg' src={`http://localhost:8080/api/v1/games/images/${game.thumbnail}`} alt={game.name} />
                                <div className='gameTitle'>
                                    {game.name}
                                </div>
                                <div className='gameprice1'>
                                    ${game.price.toFixed(2)} USD
                                </div>
                            </div>
                        ))}
                        <div className='subandtot'>
                            <div className='subtot'>
                                Subtotal:
                                <div className='precio'>
                                    ${totalPrice.toFixed(2)} USD
                                </div>
                            </div>
                            <div className='tot'>
                                Total:
                                <div className='precio1'>
                                    ${totalPrice.toFixed(2)} USD
                                </div>
                            </div>
                        </div>
                        <div className='confirmation'>
                            <div className='uppersec'>
                                <div className='upcont'>
                                    <div className='t1'>Método de pago:</div>
                                    <div className='paymentmethod'>
                                        Mi Cartera de Steam
                                    </div>
                                </div>
                                <div className='lowcont'>
                                    <div className='t2'>
                                        Cuenta de Steam:
                                    </div>
                                    <div className='steamacc'>
                                        {userName}
                                    </div>
                                </div>
                            </div>
                            <div className='lowersec'>
                                <input
                                    type="checkbox"
                                    id="cbox1"
                                    checked={termsAccepted}
                                    onChange={(e) => setTermsAccepted(e.target.checked)}
                                />
                                <div className='terms'>Acepto las condiciones del Acuerdo de Suscriptor a Steam</div>
                                <Button id='confirmationbutt' onClick={handlePurchase}>Comprar</Button>
                            </div>
                        </div>
                    </div>
                    <div className='totalPrice'>
                        <div className='totalPriceTitle'>
                            <div className='totalEstimado'>
                                Compras en Steam
                            </div>
                        </div>
                        <div className='compensteam'>
                            Cuando hayas completado la transacción, se cobrará a tu método de pago y recibirás un correo electrónico que confirma que hemos recibido tu pedido de compra.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmPurchase;
