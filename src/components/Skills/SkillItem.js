import { Typography, Icon, Paper, Box } from "@mui/material";


const skillsItems = {
    backgroundColor: "primary.main",
    color: "primary.contrastText",
    textAlign: "center",
    padding: "10px 0px",
    transition: "all .2s linear",
    minWidth: {xl:200 , xs:150},
    margin: "20px",
    // boxShadow: "9px 9px 18px #0e0e0e, -9px -9px 18px #00000073",
    "&:hover": {
    //   backgroundColor: "secondary.main",
    // backgroundColor: "secondary.main",
      color:"secondary.main",
      i: {
        transform: "rotateY(350deg)",
        color:"secondary.main",
      },
    },
  };
export default function SkillItem({props}) {
  return (
    <Paper sx={skillsItems}>
      <Box>
        <Typography>
          <Icon
            className={props.icon}
            component="i"
            sx={{
              fontSize: 60,
              transition: "all .5s linear",
            }}
          ></Icon>
        </Typography>
        <Typography variant="h5" component="div">
          {props.name}
        </Typography>
      </Box>
    </Paper>
  )
}
