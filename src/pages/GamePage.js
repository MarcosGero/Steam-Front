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
    const [modalMessage, setModalMessage] = useState('');

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
                setModalMessage('Juego agregado al carrito correctamente.');
                setShowModal(true);
            })
            .catch(error => {
                setModalMessage('Hubo un error al agregar el juego al carrito.');
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
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Resultado</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default GamePage;
