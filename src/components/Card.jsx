import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "./Button";
import { toggle, deleteTask, edit } from "../redux/slices/tasksSlice";

export default function Card({ item }) {
  const [change, setChange] = useState(false);
  const [textInput, setTextInput] = useState(item.text);
  const dispatch = useDispatch();

  const handleChecked = () => dispatch(toggle(item.id));
  const handleDelete = () => dispatch(deleteTask(item.id));

  const handleSave = () => {
    const trimmedText = textInput.trim();
    if (trimmedText === "") {
      setTextInput(item.text);
      setChange(false);
      return;
    }
    dispatch(edit({ id: item.id, text: trimmedText }));
    setChange(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
    else if (e.key === "Escape") {
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
