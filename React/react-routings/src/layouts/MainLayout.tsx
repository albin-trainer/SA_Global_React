import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "../components/Navbar";
import { CircularProgress } from "@mui/material";

function MainLayout() {
  return (
    <>
      <Navbar />

      {/*  Lazy pages render here */}
     
      <Suspense fallback={<CircularProgress color="secondary"  size={200}/>}> 
              <Outlet />
      </Suspense>
    </>
  );
}

export default MainLayout;