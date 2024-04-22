import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

//   const login = () => {
//     axios.post("http://localhost:7000/login", user).then((res) => {
//       alert(res.data.message);
//       navigate("/");
//     });
//   };

const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:7000/login',user);
      console.log(response.data,"rr");
            localStorage.setItem('user', JSON.stringify(response.data))
            if(response.data){
              navigate('/')
            }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };


  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your Email"
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Enter your Password"
      ></input>
      <div className="button" onClick={login}>
        Login
      </div>
      <div>or</div>
      <div className="button" onClick={() => navigate("/Signup")}>
        Signup
      </div>
    </div>
  );
};

export default Login;
