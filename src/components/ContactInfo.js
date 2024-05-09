import React from 'react';
import { Paper, Typography, Box, Divider, Button, Grid } from '@mui/material';

const ContactInfo = () => {
  return (
    <Paper style={{ padding: 16, backgroundColor: '#142540', color: 'white' }}>
      <Typography variant="h6" gutterBottom>
        Información de contacto
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1">Gestionar preferencias de correo electrónico</Typography>
          <Typography variant="body2">Dirección de email: marcos.funky@gmail.com</Typography>
          <Typography variant="body2">Estado: Verificado</Typography>
          <Button variant="text" color="secondary" style={{ marginTop: 8 }}>
            Cambiar mi dirección de email
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Agregar un número de teléfono
          </Typography>
          <Typography variant="body2">
            Para mayor seguridad, puedes agregar un número de teléfono a tu cuenta de Steam. De este modo, Steam podrá enviar mensajes importantes a tu teléfono.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ContactInfo;
