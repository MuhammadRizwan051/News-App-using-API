import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid } from "@mui/material";
import ResponsiveAppBar from "../components/AppBar";


function Product() {
  const location = useLocation();
  const navigate = useNavigate()

  useEffect(() => {
    if (location.state && location.state.title) {
      console.log(location)
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <Container style={{marginTop:'150px'}} >
        <Grid mt={5} mb={4} px={{ xl: 25, lg: 25, md: 10, sm: 5, xs: 2 }}>
          <Card>
            <Grid item xl={3} lg={4} md={5} sm={12} xs={12} >
              <CardMedia
                sx={{ width: "100%", objectFit: "contain" }}
                component="img"
                image={location.state && location.state.urlToImage ? location.state.urlToImage : "--"}
                alt="iPhone"
              />
            </Grid>
            <Grid item xl={9} lg={8} md={7} sm={12} xs={12} >
              <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                  {location.state.title ? location.state.title : "--"}
                </Typography>
                <Typography sx={{ textAlign: "justify" }} variant="body1" mt={5} color="text.secondary">
                  {location.state.description ? location.state.description : "--"}
                  {location.state.content ? location.state.content : "--"}
                </Typography>

                <Typography variant="body2" mt={4} color="text.secondary"><b>Author: </b>{
                  location.state.author ? location.state.author : "--"}
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={5}><b>Date: </b>
                  {location.state.publishedAt ? location.state.publishedAt.slice(0, 10) : "--"}
                </Typography>
                <Button size='large' sx={{width:1}} variant='contained' onClick={() => navigate("/")}>Back</Button>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
      </Container>
    </>
  );
}
export default Product