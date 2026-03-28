import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      { /*  <a> tag refresh the page 
      <Link> with reloads the page gets mounted */ }
      { /* conditional rendering */}
      { /* admin and users role can view  */}
      <Link to="customers">View Customers</Link>
      { /* only admins */}
      <Link to="addCustomer">Add Customers</Link>

      <h2>Dashboard</h2>
      <h3>Welcome {user?.name}</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;