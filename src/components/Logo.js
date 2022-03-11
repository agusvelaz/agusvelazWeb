import { Box, Typography } from "@mui/material";
export default function Logo() {
  return (
    <Typography
      variant="h5"
      noWrap
      component="div"
      sx={{ display: "flex" }}
      color="secondary.main"
    >
      {`<`}
      <Typography
        variant="h5"
        noWrap
        component="div"
        sx={{ display: "flex", margin: "0 5px 0 5px" }}
        color="#fff"
      >
        {`AgusVelaz`}
      </Typography>
      {`/>`}
    </Typography>
  );
}
