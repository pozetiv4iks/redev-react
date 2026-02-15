import Buttons from "../components/Buttons";

export default function Storages() {
  return (
    <div style={{ width: "100%", padding: '20px'}}>
      <h1 style={{ margin: "0 auto" }}>
        Storages (Local Storage, Session Storage, cookies, …)
      </h1>
      <section style={{ textAlign: "left" }}>
        <h2>Краткое описание</h2>
        <p>Есть два вида storage: Local Storage, Session Storage</p>
        <br></br>
        <p><span style={{fontWeight:'bold'}}>Local Storage</span> — это встроенная возможность браузера хранить данные на стороне клиента. Главное его отличие от обычных переменных в коде в том, что сохранённые данные остаются на устройстве даже после закрытия браузера. Это значит, что ты можешь, например, сохранить тему сайта, язык интерфейса или данные формы, чтобы при следующем посещении пользователь увидел уже нужные настройки.</p>
        <br></br>
        <p><span style={{fontWeight:'bold'}}>Session Storage</span> — это встроенная возможность браузера хранить данные на стороне клиента, но с одним важным отличием от Local Storage:<span style={{fontWeight:'bold'}}> данные в Session Storage живут только в рамках текущей сессии браузера</span>. Это значит, что как только ты закроешь вкладку или окно, все сохранённые данные автоматически удаляются.</p>
      </section>

      <pre className="pre-code">
        <code>{``}</code>
      </pre>
      <Buttons prev={"/routes"} last={true} />
    </div>
  );
}
