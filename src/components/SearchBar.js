import React, { useState } from 'react';
import './SearchBar.css';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

function SearchBar() {
  const [singleSelections, setSingleSelections] = useState([]);
  const options = [
    { id: 1, name: 'Alabama' },
    { id: 2, name: 'Alaska' },
    { id: 3, name: 'Arizona' },
    { id: 4, name: 'Arkansas' },
    { id: 5, name: 'California' },
    { id: 6, name: 'Colorado' },
    { id: 7, name: 'Connecticut' },
    { id: 8, name: 'Delaware' },
    { id: 9, name: 'Florida' },
    { id: 10, name: 'Georgia' },
  ];

  return (
    <>
      <div className='buttonscontainer'>
        <ButtonGroup className='buttonsbar' aria-label="buttons">
          <Button className='bar1' variant="secondary">Tu tienda</Button>
          <Button className='bar1' variant="secondary">Nuevo y destacable</Button>
          <Button className='bar1' variant="secondary">Categorías</Button>
          <Button className='bar1' variant="secondary">Tienda de puntos</Button>
          <Button className='bar1' variant="secondary">Noticias</Button>
          <Button className='bar1' variant="secondary">Laboratorios</Button>
        </ButtonGroup>
        <Form.Group className='typeahead-container'>
          <Typeahead
            id="basic-typeahead-single"
            labelKey="name"
            onChange={setSingleSelections}
            options={options}
            selected={singleSelections}
            minLength={1} 
            renderMenuItemChildren={(option, props) => (
              <div className='ta-item'>
                <div className='searchimage'>
                    
                </div>
                <div className='searchname'>
                        {option.name}
                </div>
                <div className='searchprice'>
                        {option.id }
                </div>
              </div>
            )}
          />
        </Form.Group>
      </div>
    </>
  );
}

export default SearchBar;
