import './UserGames.css';
import GameItem from "../components/GameItem";

// -- Esto es de prueba, luego sacar --
import img_1 from "../resources/ejemplo.jpg"
import img_2 from "../resources/ejemplo_2.jpg"
import img_3 from "../resources/ejemplo_3.jpg"
// ------------------------------------

import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import axios from "axios";
import {API_URL} from "../config/env";
import {Avatar} from "@mui/material";
import {useNavigate} from "react-router-dom";

// {user.name}

/*
    {games.map(game => (
        <GameItem
           img={`http://localhost:8080/api/v1/games/images/${games.thumbnail}`}
           title={games.name}
           time={games.playTime}
           date={games.purchaseDate}
         />
     ))}
*/

function UserGames () {

    const [games, setGames] = useState([]);
    const [user, setUser] = useState({});
    const userImage = localStorage.getItem("local-picture");
    const imageFormat = localStorage.getItem("local-format");
    const navigate = useNavigate();
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const gamesResponse = await axios.get('/user/me/ownedGames');
                setGames(gamesResponse.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);
    const handleGameClick = (gameName) => {
        navigate(`/games/${gameName}`);
    };
    /*useEffect(() => {

        Axios.get(API_URL + 'users/me/games')
            .then(response => {
                setGames(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al recuperar los juegos del usuario!', error);
            });
    }, []);*/

    return(
        <div className="user-back-game">
         <div className="user-header-game">
             <Avatar
                 src={`data:${imageFormat};base64,${userImage}`}
                 alt="User"
                 sx={{
                     borderRadius: 1,
                     width: '60px',
                     margin: '15px 25px',
                     borderStyle: 'solid',
                     borderWidth: '1px',
                     boxShadow: '0 0 0 1px gray',
                     borderColor: 'black'
                 }}
             />
             <h3> <a href=''>{user.userName}</a> </h3>
             <p > » </p>
             <p> <a href=''>Juegos</a> </p>
         </div>
         <div className="user-body-game" >
             <div className="button-game">
                 <button className="button">
                     Jugados recientemente
                 </button>
                 <button className="button button-alt-color">
                     Todos los juegos
                 </button>
                 <button className="button">
                     Juegos Completados (0)
                 </button>
                 <button className="button">
                     Seguidos
                 </button>
                 <button className="button">
                     Reseñas
                 </button>
             </div>
             <div className='search-game'>
                 <input className='input-with-icon' placeholder='Buscar un juego' type='text'/>
                 <div className='option-game'>
                     <img src={require('../resources/tuerca.png')} alt='user'/>
                     <p><a href='' style={{color: 'white'}}>Tiempo de juego</a></p>
                     <p><a href='' style={{textDecoration: 'none'}}>Nombre</a></p>
                     <p><a href='' style={{textDecoration: 'none'}}>Logros completados</a></p>
                 </div>
             </div>
             <div className='accesorie-game'>
                 <a> ESTADO DE DESCARGA REMOTA: Sin acceso a tu PC</a>
             </div>
             <div className='contenedor-game'>
                 {games.map(game => (
                     <GameItem
                         img={`http://localhost:8080/api/v1/games/images/${game.thumbnail}`}
                         title={game.name}
                         time='Tiempo de juego no disponible'
                         date='Fecha de compra no disponible'
                         onClick={() => handleGameClick(game.name)}
                     />
                 ))}
             </div>
         </div>
        </div>
    );
}

export default UserGames;