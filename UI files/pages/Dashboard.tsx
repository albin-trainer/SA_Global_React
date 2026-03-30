import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Welcome {user?.name}</h3>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;