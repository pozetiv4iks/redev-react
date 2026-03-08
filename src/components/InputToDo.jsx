import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import TaskContext from "../context/taskContext";
import Button from "./Button";
import { createTask } from "../service/api/todos";

export default function InputToDo() {
  const { setTasks } = useContext(TaskContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    try {
      const newTask = await createTask(data.fieldName.trim());
      setTasks((prev) => [...prev, newTask]);
      reset();
    } catch (err) {
      setError(err.response?.data?.message || "Ошибка создания задачи");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="block">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ marginRight: "10px" }}
          placeholder="Введите текст задачи"
          disabled={loading}
          {...register("fieldName", {
            required: "Поле обязательно для заполнения",
            validate: (value) =>
              value.trim() !== "" ||
              "Строка не может быть пустой или состоять из пробелов",
          })}
        />
        {errors.fieldName && (
          <p style={{ color: "red" }}>{errors.fieldName.message}</p>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit" disabled={loading}>
          {loading ? "Добавление..." : "Добавить"}
        </Button>
      </form>
    </div>
  );
}
