import React from "react";
import { Grid, Paper } from "@mui/material";
import "./AccountDetails.css"; // Asegúrate de tener este archivo para los estilos
import ContactInfo from "./ContactInfo";
import MenuColumn from "./MenuColumn";
import { Container } from "react-bootstrap";
import AccountHeader from "./Header";

const AccountDetails = () => {

  return (
    <Container className="layout">
      <AccountHeader className="header"/>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MenuColumn />
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid  item xs={12}>
              <ContactInfo />
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ height: 150, padding: 16 }}>
                Fila 2 en la segunda columna
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ height: 150, padding: 16 }}>
                Fila 3 en la segunda columna
              </Paper>
            </Grid>
            {/* Agrega más filas aquí si es necesario */}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountDetails;
