import Buttons from "../components/Buttons";

export default function ReactHookForm() {
  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <h1 style={{ margin: "0 auto" }}>Формы. react-hook-form</h1>
      <section>
        <h2>Краткое описание</h2>
        <p>
          Формы - это часть большинства веб-приложений. Однако их создание и
          управление может быть сложным для новичков. В React существует
          несколько способов использования форм в приложении, в зависимости от
          потребностей и предпочтений разработчика. Ниже перечислены основные
          варианты использования форм в React приложении:
        </p>
        <br></br>
        <h2>React Hook Form</h2>
        <p>
          React Hook Form - это, которая значительно упрощает процесс работы с
          формами в React приложениях. Она позволяет создавать интерактивные и
          дружественные формы с минимумом лишнего кода.
        </p>
        <pre className="pre-code">
          <code>
            {`
import { useForm } from 'react-hook-form'
const { register, handleSubmit, formState: { errors } } = useForm()
const onSubmit = (data) => {
  console.log(data);
};
<form onSubmit={handleSubmit(onSubmit)}>
  <input
    type='number'
    {...register('age', {
      required: 'Обязательное поле',
      min: {
      value: 18,
      message: 'Вам должно быть 18 лет или больше'
      }
    })}
  />
  <p>{errors.age?.message}</p>
</form>
          `}
          </code>
        </pre>
      </section>
      <section>
        <h2>Подводные камни / Важные моменты</h2>
        <p>
          С использованием React Hook Form, создание и управление формами
          становится намного проще. Ты можешь легко добавлять поля ввода,
          устанавливать правила валидации и обрабатывать отправку формы.
        </p>
      </section>
      <a href="https://www.npmjs.com/package/react-hook-form">Ссылка</a>
      <Buttons next={'/routes'} prev={'/hooks'} />
    </div>
  );
}