import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "../reg/Register.scss";

export const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("https://641c8b3b1a68dc9e460c4cfd.mockapi.io/singin")
      .then((response) => {
        const data = response.data;
        const user = data.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          setUser(user);
          navigate("/home");
        } else {
          setError("Invalid email or password");
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="register-page">
      <div className="register-box">
        <div className="register-box-container">
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            {error && <div>{error}</div>}
            <button className="form-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
