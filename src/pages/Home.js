import React from 'react';
import "./home.css";
import vid from './homebgvid.mp4'
import { Form, Button, ButtonGroup, Row, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import i1 from '../resources/gameplay1.jpg'
import i2 from '../resources/gameplay2.jpg'
import i3 from '../resources/gameplay3.jpg'
import i4 from '../resources/gameplay4.jpg'


function Home() { // Pagina a la que se accede una vez se encuentra logueado
    return (
        <div className='home'>
            <div className="video-container">
                <div>
                    <div className='buttonscontainer'>
                        <ButtonGroup className='buttonsbar' aria-label="buttons">
                        <Button className='bar1' variant="secondary">Tu tienda</Button>
                        <Button className='bar1' variant="secondary">Nuevo y destacable</Button>
                        <Button className='bar1' variant="secondary">Categorías</Button>
                        <Button className='bar1' variant="secondary">Tienda de puntos</Button>
                        <Button className='bar1' variant="secondary">Noticias</Button>
                        <Button className='bar1' variant="secondary">Laboratorios</Button>
                        <Form.Control className='searchgame' size="sm" type="text"/>
                        </ButtonGroup>
                    </div>
                </div>
                <video className="video-background" autoPlay loop muted>
                    <source src={vid} type="video/mp4" />
                </video>
            </div>
            <div className='destandrec_container'>
                <div className='destanrectitle'>DESTACADOS Y RECOMENDADOS</div>
                <div>
                <Carousel fade>
                <Carousel.Item className='gamecard'>
                    <div className='gameimage'>

                    </div>
                    <div className='gameinfo'>
                        <div className='gametitle'>
                            ELDEN RING
                        </div>
                        <div className='gameimages'>
                            <div className='screenshot'>
                                <img className='screenshot' src={i1}/>
                            </div>
                            <div className='screenshot'>
                                <img className='screenshot' src={i2}/>
                                
                            </div>
                            <div className='screenshot'>
                                <img className='screenshot' src={i3}/>
                                
                            </div>
                            <div className='screenshot'>
                                <img className='screenshot' src={i4}/>
                                
                            </div>
                            <div className='gametitle'>
                                Ya disponible
                            </div>
                            <div className='gameprice'>
                                $48.00 USD
                            </div>
                            
                        </div>
                    </div>
                </Carousel.Item>
                </Carousel>
            </div>
            </div>
            <div className='offerscontainer'>
                <div className='offerstitle'>
                    OFERTAS ESPECIALES
                </div>
                <div class="cont">
                <div class="GAME1">
                    <div className='offerpic'>

                    </div>
                    <div className='offer1'>
                        OFERTA DEL FIN DE SEMANA
                    </div>
                    <div className='offer2'>
                        La oferta termina pronto
                    </div>
                    <div className='newprice'>
                    <div className='discount'>-95%</div>
                    <div className='price'>$30.00 USD</div>
                    </div>
                </div>
                <div class="GAME2">
                <div className='offerpic1'>
                    </div>
                    <div className='offer1'>
                        OFERTA DEL FIN DE SEMANA
                    </div>
                    <div className='offer2'>
                        La oferta termina pronto
                    </div>
                    <div className='newprice'>
                    <div className='discount'>-80%</div>
                    <div className='price'>$17.99 USD</div>
                    </div>
                </div>
                <div class="GAME3">
                <div className='offerpic3'></div>
                <div className='offtitle'>
                    ¡Oferta del día!
                </div>
                <div className='newprice'>
                    <div className='discount'>-30%</div>
                    <div className='price'>$8.99 USD</div>
                    </div>
                </div>
                <div class="GAME4">
                <div className='offerpic4'></div>
                <div className='offtitle'>
                    ¡Oferta del día!
                </div>
                <div className='newprice'>
                    <div className='discount'>-50%</div>
                    <div className='price'>$20.00 USD</div>
                    </div>
                </div>
                </div>

            </div>
            <div className='explorecontainer'>
                <div className='exploretitle'>EXPLORAR STEAM</div>
            <ButtonGroup className='buttonsbar1' aria-label="buttons">
                        <Button className='bar2' variant="secondary">NOVEDADES</Button>
                        <Button className='bar2' variant="secondary">OFERTAS</Button>
                        <Button className='bar2' variant="secondary">JUEGOS GRATUITOS</Button>
                        <Button className='bar2' variant="secondary">POR ETIQUETAS DE USUARIO</Button>
            </ButtonGroup>
            </div>
        </div>
    );
}

export default Home