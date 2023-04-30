import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Register.scss";

export const Register = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };
    axios
      .post("https://641c8b3b1a68dc9e460c4cfd.mockapi.io/singin", newUser)
      .then((res) => {
        addUser(res.data);
        navigate("/login");
        console.log(res.data.name);
      })
      .catch((error) => alert(error));
  };
  
  return (
    <div className="register-page">
      <div className="register-box">
        <div className="register-box-container">
          
          <form onSubmit={handleSubmit}>
          <h1>
            Register
            <i className="fa-solid fa-check"></i>
          </h1>
            <div>
              <label>Name:</label>
              <br />
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <br />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <br />
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <br />
            <button className="form-button" type="submit">
              Register
            </button>
            <p onClick={handleNavigate}>I already have an account</p>
          </form>
          
        </div>
      </div>
    </div>
  );
};
