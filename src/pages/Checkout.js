import React from 'react';
import "./checkout.css";
import vid from './homebgvid.mp4'
import { Form, Button, ButtonGroup, Row, Card, Dropdown } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import {useNavigate} from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function Checkout() {
    const navigate = useNavigate();
    return (
        <div className='checkcont'>
            <div className='checkout'>
                        <Tabs
                            defaultActiveKey="inf"
                            >
                            <Tab  eventKey="inf" title="Información del pago">
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
                                    <Button className='continuar'>
                                        Continuar
                                    </Button>
                                </div>
                            
                        </div>
                            </Tab>
                            <Tab eventKey="profile" title="Revisión + Compra">
                                    
                                <div className='contPay2'>
                                    <div className='gamedesc'>
                                        <div className='gamedescImg'>

                                        </div>
                                        <div className='gameTitle'>
                                            GameTitle
                                        </div>
                                        
                                        <div className='gameprice1'>
                                            $20.22
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
                            </Tab>
                        </Tabs>
                        
            </div>
        </div>
    );
}

export default Checkout