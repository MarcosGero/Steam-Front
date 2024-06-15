import React, { useEffect, useState } from 'react';
import "./cart.css";
import { Form, Button, ButtonGroup, Row, Col, Card, Container } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Grid, Typography} from "@mui/material";

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
    const handleRemoveGame = async (gameId) => {
        try {
            await axios.delete(`/user/me/carrito/${gameId}`);
            // Filter out the removed game from the state
            const updatedCartGames = cartGames.filter(game => game.name !== gameId);
            setCartGames(updatedCartGames);

            // Update the total price
            const total = updatedCartGames.reduce((sum, game) => sum + game.price, 0);
            setTotalPrice(total);
        } catch (error) {
            console.error('Error removing game from cart:', error);
        }
    };
    const backgroundImageUrl = cartGames.length > 0 && cartGames[0].thumbnail
        ? `url('http://localhost:8080/api/v1/games/images/${cartGames[0].thumbnail}')`
        : '';
    return (
        <div className='cart'
             style={{
                 backgroundImage: `linear-gradient(to right, rgba(23, 31, 47, 1), rgba(23, 40, 56, 0.94), rgba(22, 35, 49, 1)),
                     linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0),  rgba(64, 67, 72, 0.5)),
                      ${backgroundImageUrl}`,
                 backgroundSize: 'cover',
                 backgroundRepeat: 'no-repeat',
                 overflow: 'hidden',
             }}>>
            <SearchBar />
            <Container className='contCar'>
                <Typography variant="h4" className='cartTitle'>
                    Tu carrito de compras
                </Typography>
                <Grid container spacing={0} className='cartContent'>
                    <Grid item xs={8}>
                        {cartGames.map(game => (
                            <Card className='gameCont' key={game.id}>
                                <Card.Img className='gameImg' variant="top" src={`http://localhost:8080/api/v1/games/images/${game.thumbnail}`} />
                                <Card.Body>
                                    <Card.Title className='gameTitle'>{game.name}</Card.Title>
                                    <Card.Text>
                                        <div className='priceanderase'>
                                            <div className='gamePrice'>${game.price}</div>
                                            <Button variant='danger' className='eraseButton' onClick={() => handleRemoveGame(game.name)}>Eliminar</Button>
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                        <Button className='seguirComprando' onClick={() => navigate('/')}>Seguir comprando</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <div className='totalPrice'>
                            <div className='totalPriceTitle'>
                                <div className='totalEstimado'>Total estimado:</div>
                                <div className='impuestos'> Los impuestos de venta se calcularán durante el pago (si es aplicable).</div>
                                <div className='gameTotal'>${totalPrice.toFixed(2)}</div>
                            </div>
                            <Button className='cartContinue' onClick={()=>navigate('/checkout')}>Continuar con la compra</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Cart;
