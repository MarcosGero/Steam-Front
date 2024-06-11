import React from 'react';
import { Paper, Typography, Box, Divider, Button, Grid } from '@mui/material';
import "./ContactInfo.css";

const ContactInfo = ({userInfo}) => { // Informacion acerca de los detalles de la cuenta
  if (!userInfo) {
    return <Typography>Cargando informacion del usuario o la informacion no esta disponible...</Typography>;
  }
  return (
    <Paper style={{
           backgroundColor: '#212937',
           color: 'white',
           marginTop : '20px',
           padding : '0px'
           }}
    >
      <Typography variant="h6" gutterBottom
        style={{
          backgroundColor: '#223D5A',
          padding: '5px'
        }}
      >
        Información de contacto
      </Typography>
      <Grid container spacing={2}
        style={{
          paddingLeft: '15px',
          paddingRight: '15px',
          fontSize : '20px',
          fontWeight : '300'
        }}
      >
        <Grid item xs={6}>
          <Typography variant="body1"
            style={{
              backgroundColor: '#f0f8ff12',
              padding: '3px',
              marginTop: '15px',
              marginBottom: '10px'
            }}
          >
            Gestionar preferencias de correo electrónico</Typography>
          <Typography variant="body2"
            style={{fontSize : '16px',
              color: 'rgba(240,248,255,0.49)'
            }}
          >
            Dirección de email:{userInfo.email} </Typography>
          <Typography variant="body2"
             style={{
               fontSize : '16px',
               color: 'rgba(240,248,255,0.49)'
             }}
          >
            Estado: {userInfo.accountEnabled? "Verificado" : "No verificado"}</Typography>
          <Button variant="text" color="secondary"
            style={{
               backgroundColor: '#f0f8ff12',
               padding: '3px',
               color : 'white',
               marginTop: '10px',
               marginBottom: '20px'
            }}
          >
            Cambiar mi dirección de email
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1"
            style={{
              backgroundColor: '#f0f8ff12',
              padding: '3px',
              marginTop: '15px',
              marginBottom: '10px'
            }}
          >
            Agregar un número de teléfono
          </Typography>
          <Typography variant="body2"
            style={{fontSize : '16px',
              color: 'rgba(240,248,255,0.49)'
            }}
          >
            Para mayor seguridad, puedes agregar un número de teléfono a tu cuenta de Steam. De este modo, Steam podrá enviar mensajes importantes a tu teléfono.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContactInfo;

