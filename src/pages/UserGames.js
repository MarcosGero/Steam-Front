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

// {user.name}

/*
    {games.map(game => (
        <GameItem
           key={games._id}
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

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(API_URL + 'user/me');
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    useEffect(() => {

        Axios.get(API_URL + 'users/'+user._getId+'/games')
            .then(response => {
                setGames(response.data);
            })
            .catch(error => {
                console.error('Hubo un error al recuperar los juegos del usuario!', error);
            });
    }, []);

    return(
        <div className="user-back-game">
         <div className="user-header-game">
             <img className="user-image" src={require('../resources/v3_1.jpg')} alt='user'/>
             <h3> <a href=''>UserName1 (*)</a> </h3>
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
                 <GameItem
                     img={img_1}
                     title='NaissanceE'
                     time='114 minutos'
                     date='11 de oct de 2021'
                 />
                 <GameItem
                     img={img_2}
                     title='Despotism 3K'
                     time='113 minutos'
                     date='11 de ago de 2022'
                 />
                 <GameItem
                     img={img_3}
                     title='BitBurner'
                     time='70 minutos'
                     date='21 de dic de 2021'
                 />
             </div>
         </div>
        </div>
    );
}

export default UserGames;