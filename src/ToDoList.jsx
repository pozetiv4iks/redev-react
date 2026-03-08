import { useContext, useEffect, useState } from "react";
import FilterList from "./components/FilterList";
import InputToDo from "./components/InputToDo";
import List from "./components/List";
import TaskContext from "./context/taskContext";
import Button from "./components/Button";
import { useNavigate } from "react-router";
import { getTasks, deleteTask } from "./service/api/todos";

export default function ToDoList() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [clearing, setClearing] = useState(false);
  const { tasks, setTasks } = useContext(TaskContext);
  const navigation = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigation("/login");
      return;
    }

    const loadTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  useEffect(() => {
    setCount(tasks.filter((item) => !item.isCompleted).length);
  }, [tasks]);

  const handleClear = async () => {
    const completed = tasks.filter((item) => item.isCompleted);
    if (completed.length === 0) return;

    setClearing(true);
    try {
      await Promise.all(completed.map((item) => deleteTask(item.id)));
      setTasks((prev) => prev.filter((item) => !item.isCompleted));
    } catch (err) {
      setError(err.response?.data?.message);
    } finally {
      setClearing(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigation("/login");
  };

  if (loading) {
    return (
      <div className="block" style={{ padding: "20px 0", textAlign: "center" }}>
        <p>Загрузка задач...</p>
      </div>
    );
  }

  return (
    <div className="block" style={{ padding: "20px 0" }}>
      <div style={{ padding: "10px" }}>
        <h1>Мой ToDo-List</h1>
      </div>
      {error && <p style={{ color: "red", padding: "0 10px" }}>{error}</p>}
      <InputToDo />
      <List />
      <FilterList />
      <div className="clearBlock" style={{ paddingTop: "10px" }}>
        <span style={{ marginRight: "10px" }}>Осталось дел: {count}</span>
        <Button func={handleClear} disabled={clearing}>
          {clearing ? "Очистка..." : "Очистить выполненные"}
        </Button>
      </div>
      <Button func={() => handleLogout()}>Выйти</Button>
    </div>
  );
}
