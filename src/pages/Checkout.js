import React, {useEffect, useState} from 'react';
import "./checkout.css";
import vid from './homebgvid.mp4'
import { Form, Button, ButtonGroup, Row, Card, Dropdown } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import {useNavigate} from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from "axios";
import Loader from "../components/Loader";



function Checkout() {
    const [cartGames, setCartGames] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartera, setCartera] = useState(0);
    const [insufficientFunds, setInsufficientFunds] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchCartData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`/user/me/carrito`);
                setCartGames(response.data);

                const total = response.data.reduce((sum, game) => sum + game.price, 0);
                setTotalPrice(total);

                const carteraResponse = await axios.get(`/user/me`);
                setCartera(carteraResponse.data.cartera);

                if (total > carteraResponse.data.cartera) {
                    setInsufficientFunds(true);
                } else {
                    setInsufficientFunds(false);
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching cart or user data:', error);
                setLoading(false);
            }
        };

        fetchCartData();
    }, []);
    return (
        <>
        {loading && <Loader />}
        <div className='checkcont'>
            <div className='checkout'>
                <div className='checktabs'> 
                    <div className='infopay'>
                        Información del pago    
                    </div>
                    <div className='arrow'>
                        ►
                    </div>
                    <div className='revcomp'>
                        Revisión + Compra
                    </div>
                </div>
                                <div className='contPay'>
                                <div className='payment-title'>
                                    MÉTODO DE PAGO
                                </div>
                                <div className='paymentmeth'>
                                    <div className='pay1'>
                                        Selecciona un método de pago
                                    </div>
                                    <Dropdown className='payopt'>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            Mi Cartera de Steam
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Mi Cartera de Steam</Dropdown.Item>
                                        </Dropdown.Menu>
                                        </Dropdown>
                                    <div className='tex2'>
                                        En caso de que el saldo de tu Cartera de Steam no pueda cubrir el importe total de esta transacción, se te pedirá que cubras el resto con un método de pago secundario.
                                    </div>
                                    <div className='tex3'>
                                        Podrás revisar tu pedido antes de que se procese.
                                    </div>
                                    {insufficientFunds && (
                                        <div className='insufficient-funds'>
                                            ⚠️ No tienes suficiente dinero en tu cartera para completar esta compra.
                                        </div>
                                    )}
                                    <Button
                                        className={`continuar ${insufficientFunds ? 'disabled-button' : ''}`}
                                        onClick={() => navigate('/confirm')}
                                        disabled={insufficientFunds}
                                    >
                                        Continuar
                                    </Button>
                                </div>
                            
                        </div>                        
            </div>
        </div>
        </>
    );
}

export default Checkout