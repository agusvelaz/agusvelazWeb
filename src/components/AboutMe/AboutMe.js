import { Box, Typography } from "@mui/material";
import Title from "../Title";
import Networks from "../Networks/Networks";
import developerImg from "../../assets/img/developer2.jpg";
const aboutMeContainer = {
  maxWidth: "xl",
  display: "flex",
  margin: "auto",
  alignItems: "center",
  justifyContent: "center",
  // textAlign:'center'
};
const aboutMeContent = {
  width: { xs: "90%", md: "60%" },
};
const aboutMeText = {
  color: "#fff",
  fontSize: 25,
};
const contentImg = {
  width: "40%",
  height: 590,
  display: { xs: "none", md: "flex" },
  backgroundImage: `url(${developerImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPositionX: "center",
  backgroundPositionY: "center",
};
const networksContainer = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  margin: "10px 0",
};
const networks = {
  fontSize: "35px",
  color: "#fff",
  padding: 1,
  // borderRadius: "50%",
  margin: "15px",
  transition: "all .2s linear",
  "&:hover": {
    color: "black",
    borderColor: "secondary.main",
    backgroundColor: "secondary.main",
  },
};
export default function AboutMe() {
  return (
    <Box id="About Me">
      <Box sx={aboutMeContainer}>
        <Box sx={aboutMeContent}>
          <Box sx={{ padding: { xs: "50px", xl: "56px 56px 56px 0px" } }}>
            <Title title="ABOUT ME" color="#fff" />
            <Typography variant="body1" sx={aboutMeText}>
              My name is Agustín Velázquez and I am from Buenos Aires,
              Argentina. I am currently studying technologies more focused on
              the Frontend and very little on the Backend.
            </Typography>
            <Typography variant="body1" sx={aboutMeText}>
              As for the personal, my passions vary between: fashion, design,
              music and sport, I also love to travel.
            </Typography>
            <Box sx={networksContainer}>
              <Typography variant="body1" sx={aboutMeText}>
                My Networks:
              </Typography>
              <Networks style={networks} />
            </Box>
          </Box>
        </Box>
        <Box sx={contentImg}></Box>
      </Box>
    </Box>
  );
}
