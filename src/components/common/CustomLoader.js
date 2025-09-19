import { CircularProgress } from "@mui/material";
import {
 Box
} from "@mui/material";
export default function CustomLoader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",     
        height: "70vh",          
      }}
    >
      <CircularProgress size={80} /> 
    </Box>
  );
}