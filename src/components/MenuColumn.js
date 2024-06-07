import React from 'react';
import './menucol.css';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const MenuColumn = () => { // Algunas opciones en detalles de pagina
  const menuItems = [
    "Detalles de cuenta",
    "Preferencias de la tienda",
    "Gestión del modo familiar",
    "Preferencias de idioma",
    "Cookies y navegación",
    "Configuraciones de notificaciones"
  ];

  return (

      <Paper className="paper">
        <List component="nav" aria-label="main mailbox folders">
          {menuItems.map((item, index) => (
              <ListItem
                  button
                  className={index === 0 ? 'list-item list-item-selected' : 'list-item'}
                  key={item}
              >
                <ListItemText primary={item} />
              </ListItem>
          ))}
        </List>
      </Paper>

  );
};

export default MenuColumn;
