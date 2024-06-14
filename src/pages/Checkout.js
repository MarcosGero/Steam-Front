import React from 'react';
import "./checkout.css";
import vid from './homebgvid.mp4'
import { Form, Button, ButtonGroup, Row, Card } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import {useNavigate} from "react-router-dom";


function Checkout() {
    const navigate = useNavigate();
    return (
        <div className='cart'>
                    <SearchBar/>
                    <div className='contCar'>
                        <div className='cartTitle'>
                            Tu carrito de compras
                        </div>
                        <div className='cartContent'>
                            <div className='gameCont'>
                                <div className='gameImg'>

                                </div>
                                <div className='gameTitle'>
                                    GameTitle
                                </div>
                                <div className='priceanderase'>
                                <div className='gamePrice'>
                                    $20.22
                                </div>                       
                                <a className='eraseButton'>Eliminar</a>
                                </div>
                            </div>
                            <div className='totalPrice'>
                                <div className='totalPriceTitle'>
                                    <div className='totalEstimado'>
                                    Total estimado:   
                                    </div> 
                                    <div className='gamePrice'> $20.22 </div>
                                </div>
                                <Button className='cartContinue'>
                                    Continuar con la compra
                                </Button>
                            </div>
                        </div>
                        <Button className='seguirComprando'>
                            Seguir comprando
                        </Button>
                    </div>
        </div>
    );
}

export default Checkout