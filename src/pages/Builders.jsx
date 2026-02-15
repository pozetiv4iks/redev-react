import Buttons from "../components/Buttons";
export default function Builders() {
  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ margin: "18px auto" }}>
        Storages (Local Storage, Session Storage, cookies, …)
      </h1>
      <section style={{textAlign:'left'}}>
        <h2>Краткое описание</h2>
        <p>Есть два вида storage: Local Storage, Session Storage</p>
      </section>

      <pre className="pre-code">
        <code>{``}</code>
      </pre>
      <Buttons next={"/hooks"} first={true} />
    </div>
  );
}
