import React from 'react';
import { List, ListItem, ListItemText, Paper } from '@mui/material';

const MenuColumn = () => {
  const menuItems = [
    "Detalles de cuenta",
    "Preferencias de la tienda",
    "Gestión del modo familiar",
    "Preferencias de idioma",
    "Cookies y navegación",
    "Configuraciones de notificaciones"
  ];

  return (
    
    <Paper style={{backgroundColor: '#142540',color: 'white', height: '100vh', maxWidth: 280, margin: 'auto' }}>
      <List component="nav" aria-label="main mailbox folders">
        {menuItems.map((item, index) => (
          <ListItem button selected={index === 0} key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default MenuColumn;
