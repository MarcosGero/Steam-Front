import React from "react";
import './GameItem.css';

function GameItem ({img, title, time, date}){
    return (
        <div className="game-item">
            <div className='game-item-header'>
                <img src={img} alt="portada"/>
            </div>
            <div className='game-item-body'>
                <h3>{title}</h3>
                <div className='game-item-info'>
                    <p> TIEMPO TOTAL DE JUEGO </p>
                    <p> ULTIMA SESION</p>
                </div>
                <div className='game-item-params'>
                    <p> {time} </p>
                    <p> {date} </p>
                </div>
                <div className="game-dropdown">
                    <button className="dropbtn">Mi contenido de juego  -></button>
                </div>
            </div>
        </div>
    );
}

export default GameItem;