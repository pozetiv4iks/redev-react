export default function Home() {
  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <h1 style={{ margin: "0 auto" }}>Главная</h1>
      <p style={{ marginBottom: "12px" }}>
        В навигации можно найти темы для прочтения
      </p>
      <h2>Содержание тем</h2>
      <ol style={{textAlign:"left", margin:'0 auto', maxWidth:'350px'}}>
        <li>краткое описание</li>
        <li>кодовый пример</li>
        <li>подводные камни / важные моменты</li>
        <li>ссылка на официальную документацию</li>
      </ol>
    </div>
  );
}
