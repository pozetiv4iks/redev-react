import Buttons from "../components/Buttons";

export default function ReactRoutes() {
  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <h1 style={{ margin: "0 auto" }}>Роутинг в React</h1>
      <section>
        <h2>Краткое описание</h2>
        <br></br>
        <p>
          Роутинг обеспечивает плавную навигацию между разделами приложения, не
          перезагружая страницу. Он позволяет обновлять только необходимые
          компоненты или данные, улучшая пользовательский опыт. Благодаря
          роутингу, приложение может динамически адаптироваться к параметрам
          маршрута, например, отображая данные определённого пользователя по его
          ID.
        </p>
        <pre className="pre-code">
          <code>{`import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')

import { Routes, Route } from 'react-router';

// ...

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
);`}</code>
        </pre>
      </section>
      <section>
        <h2>Подводные камни / Важные моменты</h2>
        <ul>
          <li>
            Роутинг является важной частью веб-приложений, которая позволяет
            управлять навигацией и отображением различных компонентов на основе
            URL.
          </li>
          <li>
            Библиотека react-router-dom предоставляет инструменты для реализации
            роутинга в приложениях на React.
          </li>
          <li>
            Основные компоненты react-router-dom v6 включают BrowserRouter,
            Routes, Route, Link, NavLink, useNavigate, useParams, useLocation, и
            Outlet.
          </li>
          <li>
            Routes и Route позволяют нам определить маршруты и соответствующие
            компоненты.
          </li>
          <li>
            Link и NavLink используются для создания навигационных ссылок.
          </li>
          <li>
            Хуки useNavigate, useParams и useLocation предоставляют
            дополнительные возможности для работы с маршрутами и URL.
          </li>
          <li>
            Компонент Outlet используется для рендеринга вложенных компонентов,
            связанных с маршрутами.
          </li>
          <li>
            Компонент PrivateRoute позволяет ограничить доступ к определенным
            маршрутам только для авторизированных пользователей.
          </li>
        </ul>
      </section>
      <a href="https://redev.notion.site/React-184e3afcb6a98071b2e6dd19b5c335e0">
        Ссылка
      </a>
      <Buttons prev={"/react-hook-form"} next={"/storages"} />
    </div>
  );
}
