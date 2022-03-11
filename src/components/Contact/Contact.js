import { Box, Typography, Icon, Button } from "@mui/material";
import Title from "../Title";
import starsImg from '../../assets/img/starsbn.jpg'
const contactContainer = {
  // maxWidth: "xl",
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  padding: 7,
  alignItems: "center",
  backgroundImage: `url(${starsImg})`,
  backgroundSize: "cover",
  minHeight:200
};
const btnContainer = {
  display:'flex',
  flexDirection: {xs:'column', md:'row'},
}
const btn = {
  margin:2,
  ":hover":{
    color: '#000',
    backgroundColor:'secondary.main'
  }
}
const contentBtn = {
  display: "flex",
  alignItems: "center",
  margin: 1.5,  
};
const styleIcon = {
  marginRight: 2,
};

export default function Contact() {
  return (
    <Box id='Contact'>
      <Box sx={contactContainer}>
        <Title title="CONTACT" color="#fff" />
        <Box sx={btnContainer}>
        <Button
          href="mailto:agusvelaz12@gmail.com"
          target="_blank"
          variant="contained"
          sx={btn}
        >
          <Box sx={contentBtn}>
            <Icon
              className="fas fa-envelope"
              sx={styleIcon}
              component="i"
            ></Icon>
            <Typography variant="h5" >
              Send me an email
            </Typography>
          </Box>
        </Button>
        <Button
          href="https://www.linkedin.com/in/agusvelaz"
          target="_blank"
          variant="contained"
          sx={btn}
        >
          <Box sx={contentBtn}>
            <Icon
              className="fab fa-linkedin"
              sx={styleIcon}
              component="i"
            ></Icon>
            <Typography variant="h5" >
            Send me a message
            </Typography>
          </Box>
        </Button>
        </Box>
      </Box>
    </Box>
  );
}
