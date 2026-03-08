import React from "react";
import { useForm } from "react-hook-form";
import { userReg } from "../service/api/auth";
import { useNavigate } from "react-router";

const RegistrationForm = () => {
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
    console.log("Данные регистрации:", data);
    try {
      const { login, password, email, gender, age } = data;
      await userReg(login, password, email, gender, age);
      navigate("/login");
    } catch (error) {
      console.error(error);
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
          <input
            {...register("login", { required: "Введите логин" })}
          />
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
            <p style={{ color: "red" }}>
              {errors.email.message}
            </p>
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
            <p style={{ color: "red" }}>
              {errors.password.message}
            </p>
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

        <button
          type="submit"
          style={{
            padding: "10px",
            cursor: "pointer",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
