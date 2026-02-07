import { useState } from "react";
import TaskItem from "./items/TaskItem";

export default function TodoList() {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);
  const newTask = ["Купить хлеб", "Почитать книгу", "Работа"]

  const handleCreateTask = () => {
    const randomTask = newTask[Math.floor(Math.random() * newTask.length)];
    setTasks([randomTask, ...tasks]);
  };
  const handleDeleteTask = () => {
    setTasks(tasks.slice(0, -1));
  }
  return (
    <div className="container">
      <h3>Список задач</h3>

      <ul>
        {tasks.map((task) => (
          <TaskItem task={task}  />
        ))}
      </ul>
      <button onClick={() => handleCreateTask()} >Создать задачу</button>
      <button onClick={() => handleDeleteTask()} >Удалить последнюю задачу</button>
    </div>
  );
}
