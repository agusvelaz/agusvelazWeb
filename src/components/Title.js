import { Typography } from "@mui/material";

const text = {
  mx: 1,
  color: "#fff",
  fontSize:20
};
const decoration = {
  marginBottom: 4,
  display: "flex",
  color: "secondary.main",
  alignItems:'center',
  fontSize:25
};

export default function Title({ title, color }) {
  // console.log(title + color)
  return (
    <Typography sx={decoration}>
      {`<`}
      <Typography sx={text}>{title}</Typography>
      {`/>`}
    </Typography>
  );
}
