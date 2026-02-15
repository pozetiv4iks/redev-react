import Buttons from "../components/Buttons";
export default function Builders() {
  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <h1 style={{ margin: "18px auto" }}>Сборщики. Vite VS Webpack</h1>
      <section>
        <h2>Что такое сборщик и зачем он нужен?</h2>
        <p>
          Когда ты пишешь код на **React, TypeScript, Sass**, браузер **не
          понимает** эти файлы напрямую. Сборщик берёт твой код,
          **трансформирует его** (JSX → JS, TS → JS, SCSS → CSS), объединяет в
          **оптимизированные файлы** и отдаёт браузеру.
        </p>
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
      </section>
      <section>
        <h2>Подводные камни / Важные моменты</h2>

      </section>
      <a href="https://habr.com/ru/articles/898102/">Ссылка</a>
      <Buttons next={"/hooks"} first={true} />
    </div>
  );
}
