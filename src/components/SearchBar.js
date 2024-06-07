import React, { useState, useEffect } from 'react';
import './SearchBar.css';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Axios from 'axios';

function SearchBar() {
    const [singleSelections, setSingleSelections] = useState([]);
    const [options, setOptions] = useState([]);

    const fetchGames = (query) => {
        if (query.length > 0) {
            Axios.get(`http://localhost:8080/api/v1/games/search/${query}`)
                .then(response => {
                    setOptions(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the games!', error);
                });
        } else {
            setOptions([]);
        }
    };

    return (
        <>
            <div className='buttonscontainer'>
                <ButtonGroup className='buttonsbar' aria-label="buttons">
                    <Button className='bar1' variant="secondary" href='/noticias'>Tu tienda</Button>
                    <Button className='bar1' variant="secondary" href='/noticias'>Nuevo y destacable</Button>
                    <Button className='bar1' variant="secondary" href='/noticias'>Categorías</Button>
                    <Button className='bar1' variant="secondary" href='/noticias'>Tienda de puntos</Button>
                    <Button className='bar1' variant="secondary" href='/noticias'>Noticias</Button>
                    <Button className='bar1' variant="secondary" href='/noticias'>Laboratorios</Button>
                </ButtonGroup>
                <Form.Group className='typeahead-container'>
                    <Typeahead
                        id="basic-typeahead-single"
                        labelKey="name"
                        onChange={setSingleSelections}
                        onInputChange={(text) => fetchGames(text)}
                        options={options}
                        selected={singleSelections}
                        minLength={1}
                        renderMenuItemChildren={(option, props) => (
                            <div className="ta-item">
                                <img  className='searchimage' src={`http://localhost:8080/api/v1/games/images/${option.thumbnail}`} alt={option.name} />
                                <div className='searchname'>
                                    {option.name}
                                </div>
                                <div className='searchprice'>
                                    {option.price}
                                </div>
                            </div>
                        )}
                        menuStyle={{
                            backgroundColor: 'rgb(75, 75, 75)',
                            opacity: 1,
                            zIndex: 1050,
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
                        }}
                    />
                </Form.Group>
            </div>
        </>
    );
}

export default SearchBar;
