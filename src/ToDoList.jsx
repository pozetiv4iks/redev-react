import { useContext, useEffect, useState } from "react";
import FilterList from "./components/FilterList";
import InputToDo from "./components/InputToDo";
import List from "./components/List";
import TaskContext from "./context/taskContext";
import Button from "./components/Button";
import { use } from "react";

export default function ToDoList() {
  const [count, setCount] = useState(0);
  const { tasks, setTasks } = useContext(TaskContext);

  useEffect(() => {
    setCount(tasks.filter((item) => !item.isDone).length)
  }, [tasks]);

  const handleClear = () => {
    setTasks(tasks.filter((item) => !item.isDone));
  };

  return (
    <div className="block" style={{ padding: "20px 0" }}>
      <div style={{ padding: "10px" }}>
        <h1>Мой ToDo-List</h1>
      </div>
      <InputToDo />
      <List />
      <FilterList />
      <div className="clearBlock" style={{ paddingTop: "10px" }}>
        <span style={{ marginRight: "10px" }}>
          Осталось дел: {count}
        </span>
        <Button func={() => handleClear()}>Очистить выполненные</Button>
      </div>
    </div>
  );
}
