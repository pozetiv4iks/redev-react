import { useContext } from "react";
import { useForm } from "react-hook-form"; 
import TaskContext from "../context/taskContext";
import Button from "./Button";

export default function InputToDo() {
  const { tasks, setTasks } = useContext(TaskContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    setTasks([...tasks, { id: crypto.randomUUID(), text: data.fieldName , isDone:false}]);
    reset();
  };

  return (
    <div className="block">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ marginRight: "10px" }}
          placeholder="Введите текст задачи"
          {...register("fieldName", {
            required: "Поле обязательно для заполнения",
            validate: (value) =>
              value.trim() !== "" ||
              "Строка не может быть пустой или состоять из пробелов",
          })}
        />
        <p>
          {errors.fieldName && (
            <span style={{ color: "red" }}>{errors.fieldName.message}</span>
          )}
        </p>
        <Button type="submit">Добавить</Button>
      </form>
    </div>
  );
}
