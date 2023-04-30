import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

//Components
import { Register } from "./Components/reg/Register";
import { Login } from "./Components/log/Login";
import { Home } from "./Components/Home";


export const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register addUser={addUser} />} />
        <Route path="/login" element={<Login addUser={addUser} />} />
        <Route path="/home" element={<Home  />} />
      </Routes>
    </div>
  );
};
