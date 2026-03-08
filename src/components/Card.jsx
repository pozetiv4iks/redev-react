import { useContext, useState } from "react";
import TaskContext from "../context/taskContext";
import Button from "./Button";
import { deleteTask, editTask, toggleTask } from "../service/api/todos";

export default function Card({ item }) {
  const [change, setChange] = useState(false);
  const [textInput, setTextInput] = useState(item.title);
  const [loading, setLoading] = useState(false);
  const { setTasks } = useContext(TaskContext);

  const handleChecked = async () => {
    setLoading(true);
    try {
      const updated = await toggleTask(item);
      setTasks((prev) => prev.map((t) => (t.id === item.id ? updated : t)));
    } catch (error) {
      console.error("Ошибка переключения задачи:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await deleteTask(item.id);
      setTasks((prev) => prev.filter((t) => t.id !== item.id));
    } catch (error) {
      console.error("Ошибка удаления задачи:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    const trimmedText = textInput.trim();

    if (trimmedText === "") {
      setTextInput(item.title);
      setChange(false);
      return;
    }

    setLoading(true);
    try {
      const updated = await editTask(item.id, trimmedText);
      setTasks((prev) => prev.map((t) => (t.id === item.id ? updated : t)));
      setChange(false);
    } catch (error) {
      console.error("Ошибка редактирования задачи:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
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
