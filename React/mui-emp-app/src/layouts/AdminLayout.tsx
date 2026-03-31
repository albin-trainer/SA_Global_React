import { Outlet } from "react-router-dom";
import { Suspense } from "react";

function AdminLayout() {
  return (
    <>
      <h2>Admin Panel </h2>

      <Suspense fallback={<h3>Loading admin...</h3>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default AdminLayout;