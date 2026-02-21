import { useContext, useState } from "react";
import TaskContext from "../context/taskContext";
import Button from "./Button";

export default function Card({ item }) {
  const [change, setChange] = useState(false);
  const [textInput, setTextInput] = useState(item.text);
  const { tasks, setTasks } = useContext(TaskContext);

  const handleChecked = () => {
    setTasks(
      tasks.map((task) =>
        task.id === item.id ? { ...task, isDone: !task.isDone } : task,
      ),
    );
  };

  const handleDelete = () => {
    setTasks(tasks.filter((task) => task.id !== item.id));
  };

  const handleSave = () => {
    const trimmedText = textInput.trim();

    if (trimmedText === "") {
      setTextInput(item.text);
      setChange(false);
      return;
    }

    setTasks(
      tasks.map((task) =>
        task.id === item.id ? { ...task, text: trimmedText } : task,
      ),
    );
    setChange(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      setTextInput(item.text);
      setChange(false);
    }
  };

  const toggleChange = () => {
    setChange(!change);
    setTextInput(item.text);
  };

  return (
    <div style={{ marginBottom: "10px" }} className="block">
      {!change ? (
        <>
          <input
            style={{ marginRight: "10px" }}
            type="checkbox"
            onChange={handleChecked}
            checked={item.isDone}
          />
          <span
            style={{ textDecoration: item.isDone ? "line-through" : "none" }}
          >
            {item.text}
          </span>
          <Button func={handleDelete}>Удалить</Button>
        </>
      ) : (
        <>
          <input
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            autoFocus
          />
          <Button func={handleSave}>Save</Button>
        </>
      )}

      {!item.isDone && (
        <Button func={toggleChange}>{change ? "Отмена" : "Изменить"}</Button>
      )}
    </div>
  );
}
