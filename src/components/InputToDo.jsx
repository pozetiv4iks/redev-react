import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { addTask } from "../redux/actions";

export default function InputToDo() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addTask(data.fieldName));
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
