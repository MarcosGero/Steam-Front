import React from 'react';
import { Typography, Link, Breadcrumbs, Box } from '@mui/material';

const Header = () => { // Esto aparece como encabezado siempre en la pagina steam
  return (
    <Box sx={{
      bgcolor: "#142540",
      p: 2,
      paddingBottom : '30px',
      paddingTop : '30px',
      color: 'white',
      backgroundImage: 'url(/cluster_bg_40.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '80% 80%',
      backgroundSize: 'cover'  // Esto asegura que la imagen cubra todo el espacio disponible.
    }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="#808891" href="https://store.steampowered.com/">
          Inicio
        </Link>
        <Typography sx = {{color:'#808891',fontFamily: 'Motiva Sans, Arial, Helvetica, sans-serif'}} >Cuenta</Typography>
      </Breadcrumbs>
      <Typography variant="h2" sx={{ mt: 2}}>
        Cuenta de {localStorage.getItem("local-user")}
      </Typography>
      <Typography variant="body1" sx = {{color:'#808891', marginTop : '3px'}}>
        Id. de Steam: 76561199023222600
      </Typography>
    </Box>
  );
};

export default Header;
