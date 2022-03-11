import { Paper, Box, CardMedia} from "@mui/material";

export default function WorkItem({ props }) {
  console.log(props);
  
  const img={
    margin:1
   
  }
  return (

      <CardMedia
        component="img"
        height="350"
        image={props.imgSrc}
        alt={props.name}
        sx={img}
      ></CardMedia>
    
  );
}
