import Buttons from "../components/Buttons";

export default function ReactHookForm() {
  return (
    <div style={{ width: "100%", padding: "20px" }}>
      <h1 style={{ margin: "0 auto" }}>Формы</h1>
      <Buttons prev={"/hooks"} next={"/routes"} />
    </div>
  );
}
