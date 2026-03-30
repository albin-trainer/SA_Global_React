import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "../components/layout/Navbar";
import Loader from "../components/common/Loader";

function MainLayout() {
  return (
    <>
      <Navbar />

      {/*  Lazy pages render here */}
     
     { /* <Suspense fallback={<h3>Loading page...</h3>}> */ }
           <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MainLayout;