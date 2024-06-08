import './gamedetails.css';
import React, { useEffect, useState } from 'react';
import "./home.css";
import vid from './detailsbgvid.mp4'
import placeholder from '../resources/video-placeholder.webp';
import {Button, Image} from 'react-bootstrap';
import "react-image-gallery/styles/css/image-gallery.css";

import { useParams } from "react-router-dom";
import Axios from "axios";
import ImageGallery from "react-image-gallery";
import SearchBar from "../components/SearchBar";

function GamePage() {
    const { name } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        Axios.get(`games/name/${name}`)
            .then(response => {
                setGame(response.data[0]);
            })
            .catch(error => {
                console.error('There was an error fetching the game!', error);
            });
    }, [name]);

    if (!game) return <div>Loading...</div>;
    const portada = "http://localhost:8080/api/v1/games/images/" + (game.thumbnail);

    const images = game.imageUrl ? game.imageUrl.map((url, index) => {
        const isVideo = url.endsWith('.webm');
        return isVideo ? {
            original: `http://localhost:8080/api/v1/games/images/${url}`,
            thumbnail: placeholder, 
            renderItem: () => (
                <div className="video-wrapper" key={index}>
                    <video controls autoPlay loop muted>
                        <source src={`http://localhost:8080/api/v1/games/images/${url}`} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )
        } : {
            original: `http://localhost:8080/api/v1/games/images/${url}`,
            thumbnail: `http://localhost:8080/api/v1/games/images/${url}`
        };
    }) : [];

    return (
        <div className='details'>
            <SearchBar/>
            <div className='detailscentrecont'>
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
                            DESARROLLADOR: {game.developer}        <br/>
                        </div>
                    </div>
                </div>

                <div className='purchasecont'>
                    <div className='purchaseoption'>
                        Comprar {game.name}
                    </div>
                    <div className='purchasebutton'>
                        <div className='purchaseprice'>
                            {game.price} USD
                        </div>
                        <Button className='purchasecart'>
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
        </div>
    );
}

export default GamePage;
