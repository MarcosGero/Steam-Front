import React from 'react';
import "./checkout.css";
import vid from './homebgvid.mp4'
import { Form, Button, ButtonGroup, Row, Card, Dropdown } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import {useNavigate} from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function ConfirmPurchase() {
    const navigate = useNavigate();
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
                                        <div className='gamedesc'>
                                            <div className='gamedescImg'>

                                            </div>
                                            <div className='gameTitle'>
                                                GameTitle
                                            </div>
                                            
                                            <div className='gameprice1'>
                                                $20.22 USD
                                            </div>           
                                            
                                        </div>
                                        <div className='subandtot'>
                                                <div className='subtot'>
                                                    Subtotal: 
                                                    <div className='precio'>
                                                        $1.20 USD
                                                    </div>
                                                </div>
                                                <div className='tot'>
                                                    Total: 
                                                        <div className='precio1'>
                                                            $1.20 USD
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
                                                        cuentadeejemplo
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className='lowersec'>
                                                <input type="checkbox" id="cbox1"/>
                                                <div className='terms'>Acepto las condiciones del Acuerdo de Suscriptor a Steam</div>
                                                <Button id='confirmationbutt'>Comprar</Button>
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

export default ConfirmPurchase