import { Box } from "@mui/material";
import Title from "../Title";
import WorkItem from "./WorkItem";
import worksData from "./worksData";
const worksContainer = {
  maxWidth: "xl",
  display: "flex",
  flexDirection: "column",
  margin: "auto",
  padding: 7,
  alignItems: "center",

  // padding:'50px '
};
const worksItemContainer = {
  display: "flex",
  flexDirection: {xs:'column', md:'row'},
  
};

export default function Works() {
  return (
    <Box id='Works' bgcolor="primary.main">
      <Box sx={worksContainer}>
        <Title title="MY WORKS" color="#fff" />

        <Box sx={worksItemContainer}>
          {worksData.map((i) => (
            <WorkItem props={i} key={i.name} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
