import React from "react";
import { Routes, Route } from "react-router-dom";
import "../src/components/Utilities/Utilities.css";
import "./App.css";
import { Home, Notes, Login, Signup } from "./pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="notes" element={<Notes/>} /> 
        <Route path="login" element={<Login/>} /> 
        <Route path="signup" element={<Signup/>} /> 
      </Routes>   
    </div>
  );
}

export default App;
