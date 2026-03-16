import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import FilterList from "./components/FilterList";
import InputToDo from "./components/InputToDo";
import List from "./components/List";
import Button from "./components/Button";
import {
  fetchTasks,
  clearCompletedThunk,
} from "./redux/slices/todos";

export default function ToDoList() {
  const { tasks, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigation("/login");
      return;
    }
    dispatch(fetchTasks());
  }, [dispatch, navigation]);

  const count = tasks.filter((item) => !item.isCompleted).length;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigation("/login");
  };

  if (loading && tasks.length === 0) {
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
        <Button
          func={() => dispatch(clearCompletedThunk())}
          disabled={loading}
        >
          {loading ? "Очистка..." : "Очистить выполненные"}
        </Button>
      </div>
      <Button func={handleLogout}>Выйти</Button>
    </div>
  );
}
