import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { createTaskThunk } from "../redux/slices/todos";

export default function InputToDo() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.todos);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(createTaskThunk(data.fieldName.trim()));
    reset();
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
