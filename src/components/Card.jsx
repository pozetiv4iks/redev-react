import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  toggleTaskThunk,
  deleteTaskThunk,
  editTaskThunk,
} from "../redux/slices/todos";

export default function Card({ item }) {
  const [change, setChange] = useState(false);
  const [textInput, setTextInput] = useState(item.title);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.todos.loading);

  const handleChecked = () => dispatch(toggleTaskThunk(item));
  const handleDelete = () => dispatch(deleteTaskThunk(item.id));

  const handleSave = () => {
    const trimmedText = textInput.trim();
    
    if (trimmedText === "") {
      setTextInput(item.title);
      setChange(false);
      return;
    }
    dispatch(editTaskThunk({ id: item.id, title: trimmedText }));
    setChange(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    else if (e.key === "Escape") {
      setTextInput(item.title);
      setChange(false);
    }
  };

  const toggleChange = () => {
    setChange(!change);
    setTextInput(item.title);
  };

  return (
    <div
      style={{ marginBottom: "10px", opacity: loading ? 0.5 : 1 }}
      className="block"
    >
      {!change ? (
        <>
          <input
            style={{ marginRight: "10px" }}
            type="checkbox"
            onChange={handleChecked}
            checked={item.isCompleted}
            disabled={loading}
          />
          <span
            style={{
              textDecoration: item.isCompleted ? "line-through" : "none",
            }}
          >
            {item.title}
          </span>
          <Button func={handleDelete} disabled={loading}>
            Удалить
          </Button>
        </>
      ) : (
        <>
          <input
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            disabled={loading}
            autoFocus
          />
          <Button func={handleSave} disabled={loading}>
            {loading ? "Сохранение..." : "Save"}
          </Button>
        </>
      )}

      {!item.isCompleted && (
        <Button func={toggleChange} disabled={loading}>
          {change ? "Отмена" : "Изменить"}
        </Button>
      )}
    </div>
  );
}
