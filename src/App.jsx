import { useState } from "react";
import "./App.css";
import TaskContext from "./context/taskContext";
import FilterContext from "./context/filterContext";
import ToDoList from "./ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <FilterContext.Provider value={{ filter, setFilter }}>
        <ToDoList />
      </FilterContext.Provider>
    </TaskContext.Provider>
  );
}

export default App;
