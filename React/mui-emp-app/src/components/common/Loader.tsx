// src/components/ui/Loader.jsx
import { CircularProgress, Box } from "@mui/material";

function Loader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="200px"  // or 100vh for full screen
    >
<CircularProgress size={200} color="secondary" />
    </Box>
  );
}

export default Loader;