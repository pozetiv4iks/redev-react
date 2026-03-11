import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FilterList from "./components/FilterList";
import InputToDo from "./components/InputToDo";
import List from "./components/List";
import Button from "./components/Button";
import { clearCompleted } from "./redux/actions";

export default function ToDoList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const count = tasks.filter((item) => !item.isDone).length;

  return (
    <div className="block" style={{ padding: "20px 0" }}>
      <div style={{ padding: "10px" }}>
        <h1>Мой ToDo-List</h1>
      </div>
      <InputToDo />
      <List />
      <FilterList />
      <div className="clearBlock" style={{ paddingTop: "10px" }}>
        <span style={{ marginRight: "10px" }}>Осталось дел: {count}</span>
        <Button func={() => dispatch(clearCompleted())}>
          Очистить выполненные
        </Button>
      </div>
    </div>
  );
}
