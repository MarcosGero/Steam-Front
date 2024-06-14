import React, {useEffect, useState} from 'react';
import "./cart.css";
import vid from './homebgvid.mp4'
import { Form, Button, ButtonGroup, Row, Card } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import {useNavigate} from "react-router-dom";
import axios from "axios";


function Cart() {
    const [cartGames, setCartGames] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
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
                console.error('Error fetching cart games:', error);
            }
        };

        fetchCartGames();
    }, []);
    return (
        <div className='cart'>
                    <SearchBar/>
                    <div className='contCar'>
                        <div className='cartTitle'>
                            Tu carrito de compras
                        </div>
                        <div className='cartContent'>
                            {cartGames.map(game => (
                                <div className='gameCont' key={game.id}>
                                    <img className='gameImg' src={`http://localhost:8080/api/v1/games/images/${game.thumbnail}`} alt={game.name} />
                                    <div className='gameTitle'>
                                        {game.name}
                                    </div>
                                    <div className='priceanderase'>
                                        <div className='gamePrice'>
                                            ${game.price}>
                                        </div>
                                        <a className='eraseButton'>Eliminar</a>
                                    </div>
                                </div>
                            ))}
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

export default Cart