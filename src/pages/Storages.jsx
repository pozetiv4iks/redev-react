import Buttons from "../components/Buttons";

export default function Storages() {
  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <h1 style={{ margin: "0 auto" }}>
        Storages (Local Storage, Session Storage, cookies, …)
      </h1>
      <section>
        <h2>Краткое описание</h2>
        <p>Есть два вида storage: Local Storage, Session Storage</p>
        <br></br>
        <p>
          <span style={{ fontWeight: "bold" }}>Local Storage</span> — это
          встроенная возможность браузера хранить данные на стороне клиента.
          Главное его отличие от обычных переменных в коде в том, что
          сохранённые данные остаются на устройстве даже после закрытия
          браузера. Это значит, что ты можешь, например, сохранить тему сайта,
          язык интерфейса или данные формы, чтобы при следующем посещении
          пользователь увидел уже нужные настройки.
        </p>
        <pre className="pre-code">
          <code>{`const settings = {
  theme: 'dark',
  fontSize: '16px'
};

// Сохраняем объект как строку JSON
localStorage.setItem('settings', JSON.stringify(settings));

// Получаем объект обратно и парсим его
const savedSettings = JSON.parse(localStorage.getItem('settings'));
console.log(savedSettings); // Выведет объект с настройками`}</code>
        </pre>
        <br></br>
        <p>
          <span style={{ fontWeight: "bold" }}>Session Storage</span> — это
          встроенная возможность браузера хранить данные на стороне клиента, но
          с одним важным отличием от Local Storage:
          <span style={{ fontWeight: "bold" }}>
            {" "}
            данные в Session Storage живут только в рамках текущей сессии
            браузера
          </span>
          . Это значит, что как только ты закроешь вкладку или окно, все
          сохранённые данные автоматически удаляются.
        </p>
        <pre className="pre-code">
          <code>{`const formData = {
  name: 'Павел',
  email: 'pavel@example.com'
};
sessionStorage.setItem('formData', JSON.stringify(formData));

// Получаем данные формы при необходимости
const savedData = JSON.parse(sessionStorage.getItem('formData'));
console.log(savedData);`}</code>
        </pre>
      </section>
      <section>
        <h2>Подводные камни / Важные моменты</h2>
        <h3>Local Storage</h3>
        <ul>
          <li>
            <span className="bold">Размер хранилища:</span> Большинство
            браузеров позволяют хранить около 5–10 МБ данных. Если тебе нужно
            хранить большие объёмы, лучше рассмотреть другие решения.
          </li>
          <li>
            <span className="bold">Синхронность:</span> Все операции с Local
            Storage выполняются синхронно, что может замедлить работу при
            большом объёме данных
          </li>
          <li>
            <span className="bold">Безопасность:</span> Данные не шифруются
            автоматически, поэтому в Local Storage не стоит хранить
            конфиденциальную информацию.
          </li>
        </ul>
        <br></br>
        <h3>Session Storage</h3>
        <ul>
          <li>
            <span className="bold">Временный характер:,</span> Все данные в
            Session Storage удаляются, как только вкладка или окно браузера
            закрываются. Если тебе нужно сохранить данные дольше — используй
            Local Storage или серверное хранилище.
          </li>
          <li>
            <span className="bold">Формат данных:</span> Как и в Local Storage,
            данные сохраняются в виде строк. Для объектов или массивов используй
            JSON.stringify при сохранении и JSON.parse при извлечении.
          </li>
          <li>
            <span className="bold">Синхронность:</span> Все операции выполняются
            синхронно, поэтому для небольшого объёма данных проблем с
            производительностью не будет.
          </li>
        </ul>
      </section>
      <Buttons prev={"/routes"} last={true} />
    </div>
  );
}
