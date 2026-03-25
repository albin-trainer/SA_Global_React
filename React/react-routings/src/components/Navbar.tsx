import { Outlet } from "react-router-dom";
function Navbar(){
    return <>
        <h1>Main Navbar</h1>
        <a href="/employee/empForm">EmployeeForm</a>
        <a href="/admin">Admin</a>
      
    </>
}
export default Navbar;