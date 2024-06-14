import React from "react";
import './GameItem.css';

function GameItem ({img, title, time, date}){
    return (
        <div className="game-item">
            <div className='game-item-header'>
                <a href='' ><img src={img} alt="portada"/></a>
            </div>
            <div className='game-item-body'>
                <h3><a href='' >{title}</a></h3>
                <div className='game-item-info'>
                    <p> TIEMPO TOTAL DE JUEGO </p>
                    <p> ULTIMA SESION</p>
                </div>
                <div className='game-item-params'>
                    <p> {time} </p>
                    <p> {date} </p>
                </div>
                <div className="game-dropdown">
                    <button className="dropbtn">
                        <p className='mod'>Mi contenido de juego</p>
                        <p>v</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default GameItem;