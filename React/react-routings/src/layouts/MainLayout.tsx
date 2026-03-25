import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />

      {/*  Lazy pages render here */}
     
      <Suspense fallback={<h3>Loading page...</h3>}> 
              <Outlet />
      </Suspense>
    </>
  );
}

export default MainLayout;