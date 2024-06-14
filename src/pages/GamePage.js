import './gamedetails.css';
import React, { useEffect, useState } from 'react';
import "./home.css";
import placeholder from '../resources/video-placeholder.webp';
import {Button, Image, Modal} from 'react-bootstrap';
import "react-image-gallery/styles/css/image-gallery.css";

import { useParams } from "react-router-dom";
import Axios from "axios";
import ImageGallery from "react-image-gallery";
import SearchBar from "../components/SearchBar";

function GamePage() {
    const { name } = useParams();
    const [game, setGame] = useState(null);
    const [firstImageUrl, setFirstImageUrl] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState(false);

    useEffect(() => {
        Axios.get(`games/name/${name}`)
            .then(response => {
                setGame(response.data[0]);
                if (response.data[0].imageUrl && response.data[0].imageUrl.length > 0) {
                    setFirstImageUrl(`http://localhost:8080/api/v1/games/images/${response.data[0].imageUrl[0]}`);
                }
            })
            .catch(error => {
                console.error('There was an error fetching the game!', error);
            });
    }, [name]);

    const handleAddToCart = () => {
        Axios.post(`user/me/carrito/${game.name}`)
            .then(response => {
                setModalMessage(true);
                setShowModal(true);
            })
            .catch(error => {
                setModalMessage(false);
                setShowModal(true);
                console.error('There was an error adding the game to the cart!', error);
            });
    };

    if (!game) return <div>Loading...</div>;
    const portada = "http://localhost:8080/api/v1/games/images/" + (game.thumbnail);

    const images = game.imageUrl ? game.imageUrl.map((url, index) => {
        const isVideo = url.endsWith('.webm');
        const className = index === 0 ? 'first-image' : '';
        return isVideo ? {
            original: `http://localhost:8080/api/v1/games/images/${url}`,
            thumbnail: placeholder,
            renderItem: () => (
                <div className={`video-wrapper ${className}`} key={index}>
                    <video controls autoPlay loop muted>
                        <source src={`http://localhost:8080/api/v1/games/images/${url}`} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )
        } : {
            original: `http://localhost:8080/api/v1/games/images/${url}`,
            thumbnail: `http://localhost:8080/api/v1/games/images/${url}`,
            originalClass: className,
            thumbnailClass: className,
        };
    }) : [];

    return (
        <div className='details' >
            <div  className="searchbar">
                <SearchBar />
            </div>
            <div className='detailscentrecont'
                 style={{
                     backgroundImage: `linear-gradient(to right, rgba(26, 32, 45, 0.9), rgba(40, 77, 135, 0.8), rgba(26, 32, 45, 0.9)),
                     linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0),  rgba(64, 67, 72, 0.5)),
                      url(${firstImageUrl})`,
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     overflow: 'hidden',
                 }}>
                <div className='gametitle'>
                    {game.name}
                </div>
                <div className='gamecard'>
                    <div className='screenshots-slider'>
                        <ImageGallery
                            items={images}
                            showPlayButton={false}
                            showFullscreenButton={false}
                        />
                    </div>
                    <div className='leftsection'>
                        <div className='gamecover'>
                            <Image className='gamethumbnail' src={portada} />
                        </div>
                        <div className='gamedetails'>
                            {game.details}
                        </div>
                        <div className='gamedate'>
                            FECHA DE LANZAMIENTO: {game.launchDate}
                            DESARROLLADOR: {game.developer}        <br />
                        </div>
                    </div>
                </div>
            </div>
            <div className="aboutcontent">
                <div className='purchasecont'>
                    <div className='purchaseoption'>
                        Comprar {game.name}
                    </div>
                    <div className='purchasebutton'>
                        <div className='purchaseprice'>
                            {game.price ? (game.price + ' USD') : ('Free to play')}
                        </div>
                        <Button className='purchasecart' onClick={handleAddToCart}>
                            Agregar al carrito
                        </Button>
                    </div>
                </div>
                <div className='aboutcont'>
                    <div className='abouttitle'>
                        ACERCA DE ESTE JUEGO
                    </div>
                    <div className='detailscont'>
                        {game.description}
                    </div>
                </div>
            </div>

            <Modal className="flotante-s" show={showModal} onHide={() => setShowModal(true)}>
                <div className="flotante-c">
                    <div className="flotante-h"> X </div>
                    <Modal.Body className="flotante-b">
                        {modalMessage ? (
                            <>
                                <h2>¡Agregado a tu carrito!</h2>
                                <div className="f-c">
                                    <img src={require('../resources/ico_3.jpg')}/>
                                    <div className="f-c-2">
                                        <h3>Hellblade: Senua's Sacrifice</h3>
                                        <img src={require('../resources/ico_1.jpg')}/>
                                        <p>$0.50</p>
                                        <div className="f-c-c">
                                            <div className="game-dropdown">
                                                <button className="dropbtn-2">
                                                    <p className='mod'>Para mi cuenta</p>
                                                    <p>v</p>
                                                </button>
                                            </div>
                                            <div className="cart-detail">
                                                <p><a>Agregar</a></p>
                                                <p>|</p>
                                                <p><a>Eliminar</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2>Algo salio mal</h2>
                                <p>Hubo un error al agregar el juego al carrito</p>
                            </>
                        )}
                    </Modal.Body>
                    <div className="flotante-footer">
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Seguir comprando
                        </Button>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Ver mi carrito
                        </Button>
                    </div>
                </div>
            </Modal>

        </div>
    );
}

export default GamePage;
