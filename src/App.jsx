import { useEffect, useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";
import AuthForm from "./components/AuthForm";
import { Routes, Route, useNavigate } from "react-router";
import RegForm from "./components/RegForm";
import NotFound from "./components/NotFound";
import TaskContext from "./context/taskContext";
import FilterContext from "./context/filterContext";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const navigation = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigation("/todo");
    }
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <Routes>
          <Route path="/login" element={<AuthForm />} />
          <Route path="/registration" element={<RegForm />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FilterContext.Provider>
    </TaskContext.Provider>
  );
}

export default App;
