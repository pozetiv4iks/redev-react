import Buttons from "../components/Buttons";

export default function ReactHookForm() {
  return (
    <div style={{ width: "100%" }}>
      <h1 style={{ margin: "0 auto" }}>Формы</h1>
      <Buttons prev={"/hooks"} next={"/routes"} />
    </div>
  );
}
