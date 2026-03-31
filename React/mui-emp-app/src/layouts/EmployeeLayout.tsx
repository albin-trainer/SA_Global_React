import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";

function EmployeeLayout() {
  return (
    <Box p={2}>
      <Typography variant="h6">Employee Section</Typography>
      {/* Nested pages go here */}
      <Outlet />
    </Box>
  );
}

export default EmployeeLayout;