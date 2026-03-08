import { useState } from "react";
import { useForm } from "react-hook-form";
import { userAuth } from "../service/api/auth";
import Button from "./Button";
import { Link } from "react-router";

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data.email);
    console.log(data.password);

    const dataRes = await userAuth(data.email, data.password);
    console.log(dataRes);
    
    if (dataRes) {
      localStorage.setItem("token", dataRes.token);
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
          {...register("password", {
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
      <div>
        Уже зарегестрироавны?
        <Link to={{pathname: '/registration'}}>Войти</Link>
      </div>
    </div>
  );
}
