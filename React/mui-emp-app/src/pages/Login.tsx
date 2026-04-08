import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { loginUser } from "../services/EmployeeService";

const Login = () => {
  //accessing context
  const { login  } = useContext(AuthContext);
  
  const navigate = useNavigate();
  const nameref=useRef("");
  const pwdref=useRef("");
  const[error,setError]=useState("");
  const handleLogin = async () => {
    let n:string=nameref.current?.value;
    let pwd:string=pwdref.current?.value;
    const user = { name:n,password:pwd };
    let isSuccess= await loginUser(user);
    if(isSuccess>0) {
      login(user); //stores in usercontext
      navigate("/dashboard");
    } 
    else
      setError("Invalid Credentials")
  };
  return (
    <div>
      <h2>Login Page</h2> 
       Enter username <input  ref={nameref} type="text"></input> 
       <br></br>
      Enter Password <input ref={pwdref} type="password"></input>
      <br></br>
      <button onClick={handleLogin}>Login</button>
      <br></br>
      <span>{error}</span>
    </div>
  );
};

export default Login;