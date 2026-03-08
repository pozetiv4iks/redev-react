import { useState } from "react";
import { useForm } from "react-hook-form";
import { userAuth } from "../service/api/auth";
import Button from "./Button";
import { Link, useNavigate } from "react-router";

export default function AuthForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    try {
      const dataRes = await userAuth(data.email, data.password);
      localStorage.setItem("token", dataRes.token);
      navigate("/todo");
    } catch (err) {
      setError(err.response?.data?.message || "Ошибка авторизации");
    } finally {
      setLoading(false);
    }
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
