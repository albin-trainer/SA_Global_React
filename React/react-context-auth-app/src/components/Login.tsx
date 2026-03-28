import { useContext, useRef } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
type User={ name:string,role:string }
const Login = () => {
  //reading from the Context
  const { login  } = useContext(AuthContext); //useContext to consume Context
  const navigate = useNavigate(); //hook
  const nameref=useRef("");
  let users:User[]=[ { name:"Albin",role:"admin"} ,{name:"Sanjay",role:"user"},
     {name:"Ram",role:"user"} ,{name:"Keerthana",role:"admin"},
      {name:"Karthik",role:"user"} ,{name:"Rajeswari",role:"user"}
  ];
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