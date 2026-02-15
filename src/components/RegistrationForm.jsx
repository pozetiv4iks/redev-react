import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "./Modal";

export default function RegistrationForm() {
  const [modalState, setModalState] = useState(false);
  const [data, setData] = useState({});
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const submitHandler = (data) => {
    console.log(data);
    setData(data);
    setModalState(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Имя пользователя:</label>
          <input
            {...register("username", {
              required: "Имя пользователя обязательно",
            })}
          />
          <p>{errors.username?.message}</p>
        </div>
        <div>
          <label>Электронная почта:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email обязателен",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Введите корректный email",
              },
            })}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label>Пароль:</label>
          <input
            type="password"
            {...register("password", {
              required: "Пароль обязателен",
              minLength: {
                value: 6,
                message: "Пароль должен содержать минимум 6 символов",
              },
              pattern: {
                value: /[A-Z]/,
                message: "Пароль должен содержать хотя бы одну заглавную букву",
              },
            })}
          />
          <p>{errors.password?.message}</p>
        </div>

        <div>
          <label>Подтверждение пароля:</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Подтверждение пароля обязательно",
              validate: (value) => value === password || "Пароли не совпадают",
            })}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>

        <div>
          <label>Дата рождения:</label>
          <input
            type="date"
            {...register("birthDate", {
              required: "Дата рождения обязательна",
            })}
          />
          <p>{errors.birthDate?.message}</p>
        </div>
        <div>
          <label>Пол:</label>
          <select
            {...register("gender", {
              required: "Выберите пол",
            })}
          >
            <option value="">Выберите пол</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
          <p>{errors.gender?.message}</p>
        </div>
        <div>
          <label>Номер телефона:</label>
          <input
            type="tel"
            {...register("phone", {
              required: "Номер телефона обязателен",
              pattern: {
                value: /^[0-9+\-\s()]{10,}$/,
                message: "Введите корректный номер телефона",
              },
            })}
          />
          <p>{errors.phone?.message}</p>
        </div>

        <button type="submit">Зарегистрироваться</button>
      </form>
      {modalState && <Modal data={data} func={setModalState} />}
    </div>
  );
}
