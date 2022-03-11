import networksData from "./networksData";
import { Box, Link, Icon } from "@mui/material";

export default function Networks({style}) {
  return (
    <Box>
      {networksData.map((i) => (
        <Link key={i.name} href={i.linkRef} target="_blank" sx={{textDecoration:"none"}}>
          <Icon className={i.icon} component="i" sx={style}></Icon>
        </Link>
      ))}
    </Box>
  )
}
