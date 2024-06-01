import {React, useState, useEffect} from "react";
import { Grid, Paper } from "@mui/material";
import "./AccountDetails.css";
import ContactInfo from "./ContactInfo";
import MenuColumn from "./MenuColumn";
import { Container } from "react-bootstrap";
import AccountHeader from "./Header";
import { API_URL } from "../config/env";
import axios from "axios";
const AccountDetails = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(API_URL + 'user/me');
        setUserInfo(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
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
              <ContactInfo userInfo={userInfo}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AccountDetails;
