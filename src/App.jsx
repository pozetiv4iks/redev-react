import { useEffect, useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";
import AuthForm from "./components/AuthForm";
import { Routes, Route, useNavigate } from "react-router";
import RegForm from "./components/RegForm";
import NotFound from "./components/NotFound";

function App() {

  


  return (
    <>
      <Routes>
        <Route path="/login" element={<AuthForm />} />
        <Route path="/registration" element={<RegForm />} />
        <Route path="/todo" element={<ToDoList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;