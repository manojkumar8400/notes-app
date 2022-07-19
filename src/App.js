import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/utils.css";
import "./App.css";
import { RequireAuth } from "./RequireAuth";
import { Home, Archieve, Label, Trash, Login, Signup, TextEditor, PageNotFound, Logout } from "./pages/index";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={< RequireAuth />} >
          <Route path="/text-editor" element={<TextEditor />} />
          <Route path="/label" element={<Label />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/archieve" element={<Archieve />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={< PageNotFound />} />
      </Routes>
    </div >
  );
}

export default App;
