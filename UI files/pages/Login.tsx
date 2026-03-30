import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { login  } = useContext(AuthContext);
  const navigate = useNavigate();
  const nameref=useRef("");
  const handleLogin = () => {
    let n:string=nameref.current?.value;
    const user = { name:n };
    login(user);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input  ref={nameref} type="text"></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;