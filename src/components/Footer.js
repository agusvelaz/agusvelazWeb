import { Box } from "@mui/material";
import { height } from "@mui/system";
import Networks from "./Networks/Networks";

const footerContent = {
  display: "flex",
  flexDirection: "row",
  alignItems:'center',
  justifyContent: 'space-around',
  height: 100,
  color: "#fff",
};
const networks = {
  fontSize: "30px",
  color: "#fff",
  padding: 1,
  margin: "10px",
  transition: "all .2s linear",
  "&:hover": {
    color: "black",
    backgroundColor: "secondary.main",
  },
};

export default function Footer() {
  return (
    <Box bgcolor="primary.main">
      <Box sx={footerContent}>
        <Box>Designed by Agusvelaz | AlphaDevs </Box>
        <Box>
          <Networks style={networks} />
        </Box>
      </Box>
    </Box>
  );
}
