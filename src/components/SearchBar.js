import React, { useState } from 'react';
import './SearchBar.css';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [singleSelections, setSingleSelections] = useState([]);
    const [options, setOptions] = useState([]);
    const navigate = useNavigate();

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

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && singleSelections.length > 0) {
            const gameName = singleSelections[0].name;

            window.location.href = `/games/${encodeURIComponent(gameName)}`;
        }
    };

    const handleSelection = (selected) => {
        setSingleSelections(selected);
        if (selected.length > 0) {
            const gameName = selected[0].name;

            window.location.href = `/games/${encodeURIComponent(gameName)}`;
        }
    };

    return (
        <>
            
            <div className='buttonscontainer'>
                <ButtonGroup className='buttonsbar' aria-label="buttons">
                    <Button className='bar1' variant="secondary" href='/'>Tu tienda</Button>
                    <Button className='bar1' variant="secondary" href='/'>Nuevo y destacable</Button>
                    <Button className='bar1' variant="secondary" href='/'>Categorías</Button>
                    <Button className='bar1' variant="secondary" href='/'>Tienda de puntos</Button>
                    <Button className='bar1' variant="secondary" href='/noticias'>Noticias</Button>
                    <Button className='bar1' variant="secondary" href='/'>Laboratorios</Button>
                </ButtonGroup>
                <Form.Group className='typeahead-container'>
                    <Typeahead
                        id="basic-typeahead-single"
                        labelKey="name"
                        onChange={handleSelection}
                        onInputChange={(text) => fetchGames(text)}
                        options={options}
                        selected={singleSelections}
                        minLength={1}
                        onKeyDown={handleKeyDown}
                        renderMenuItemChildren={(option, props) => (
                            <div className="ta-item">
                                <img className='searchimage' src={`http://localhost:8080/api/v1/games/images/${option.thumbnail}`} alt={option.name} />
                                <div className='searchname'>
                                    {option.name}
                                </div>
                                <div className='searchprice'>
                                    { option.price ? (option.price + ' USD'):('Free to play')}
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
