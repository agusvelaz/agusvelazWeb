import React from "react";
import { Box, Button, Typography } from "@mui/material";
// import developerImg from "../assets/img/developer.jpg";
import mountainImg from '../assets/img/starsmount.png'

const home ={
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.093), rgb(0, 0, 0)100%), url(${mountainImg})`,
  backgroundSize: "cover"
}
const homeContainer = {
  maxWidth: "xl",
  height: "90vh",
  display: "flex",
  margin: "auto",
};
const homeContent = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  textAlign:'center'
  

};
const textHome = {
    color:'#fff'
}
const btn = {
    marginTop:2,
    width:200,
    ":hover":{
      color: '#000',
      backgroundColor:'secondary.main'
    }
}

export default function Home() {
  return (
    <Box width="100%" sx={home}>
      <Box sx={homeContainer}>
        <Box sx={homeContent}>
            <Box m='auto 85px'>
            <Typography variant='h1' sx={textHome}>
                Hi, I am Agustin
            </Typography>
            <Typography variant='h2'  color='secondary.main'>
                FrontEnd Developer
            </Typography>
            {/* <Typography variant='h5' sx={textHome}>
                based in Buenos Aires, Argentina.
            </Typography> */}
            {/* <Button sx={btn} variant="contained" href="mailto:agusvelaz12@gmail.com">CONTACT ME</Button> */}
            </Box>
        </Box>
        {/* <Box sx={homeContentImg}></Box> */}
      </Box>
    </Box>
  );
}
