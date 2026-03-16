import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import Button from "./Button";
import { Link, useNavigate } from "react-router";
import { login } from "../redux/slices/authSlice";

export default function AuthForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(login({ email: data.email, password: data.password }))
      .then(() => navigate("/todo"))
      .catch(() => {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{ marginRight: "10px" }}
          placeholder="Введите email"
          {...register("email", {
            required: "Поле обязательно для заполнения",
            validate: (value) =>
              value.trim() !== "" ||
              "Строка не может быть пустой или состоять из пробелов",
          })}
        />
        <input
          style={{ marginRight: "10px" }}
          placeholder="Введите пароль"
          type="password"
          {...register("password", {
            required: "Поле обязательно для заполнения",
            validate: (value) =>
              value.trim() !== "" ||
              "Строка не может быть пустой или состоять из пробелов",
          })}
        />
        {errors.email && (
          <p style={{ color: "red" }}>{errors.email.message}</p>
        )}
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit" disabled={loading}>
          {loading ? "Вход..." : "Войти"}
        </Button>
      </form>
      <div>
        Еще не зарегестрированы?{" "}
        <Link to={{ pathname: "/registration" }}>Зарегестрироваться</Link>
      </div>
    </div>
  );
}
