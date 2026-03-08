import { useState } from "react";
import { useForm } from "react-hook-form";
import { userReg } from "../service/api/auth";
import { useNavigate, Link } from "react-router";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gender: "female",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    setError("");
    try {
      const { login, email, password, gender, age } = data;
      await userReg(login, email, password, gender, age);
      navigate("/login");
    } catch (err) {
      setError(err.response?.data?.message || "Ошибка регистрации");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Регистрация</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <div>
          <label>Логин:</label>
          <input {...register("login", { required: "Введите логин" })} />
          {errors.login && (
            <span style={{ color: "red" }}>{errors.login.message}</span>
          )}
        </div>
        <div>
          <label>Email:</label>
          <input
            {...register("email", {
              required: "Укажите корректный email",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Пример: example@example.com",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Пароль:</label>
          <input
            type="password"
            {...register("password", {
              required: "Пароль обязателен",
              minLength: { value: 8, message: "Минимум 8 символов" },
              validate: {
                hasUpper: (v) => /[A-Z]/.test(v) || "Нужна заглавная буква",
                hasLower: (v) => /[a-z]/.test(v) || "Нужна строчная буква",
                hasNumber: (v) => /[0-9]/.test(v) || "Нужна хотя бы одна цифра",
                hasSpecial: (v) =>
                  /[!@#$%^&*(),.?":{}|<>]/.test(v) ||
                  "Нужен спецсимвол (!@#$ и т.д.)",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
        </div>
        <div>
          <label>Возраст:</label>
          <input
            type="number"
            {...register("age", {
              required: "Укажите возраст",
              min: 18,
              max: 99,
            })}
          />
          {errors.age && (
            <span style={{ color: "red" }}>Нужно быть старше 18 лет</span>
          )}
        </div>
        <div>
          <label>Пол:</label>
          <div style={{ marginTop: "5px" }}>
            <label style={{ marginRight: "10px" }}>
              <input {...register("gender")} type="radio" value="female" />{" "}
              Female
            </label>
            <label>
              <input {...register("gender")} type="radio" value="male" /> Male
            </label>
          </div>
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px",
            cursor: loading ? "not-allowed" : "pointer",
            color: "white",
            border: "none",
            borderRadius: "5px",
            opacity: loading ? 0.5 : 1,
          }}
        >
          {loading ? "Регистрация..." : "Зарегистрироваться"}
        </button>
      </form>
      <div>
        Уже зарегестрированы?{" "}
        <Link to={{ pathname: "/login" }}>Войти</Link>
      </div>
    </div>
  );
};

export default RegistrationForm;
