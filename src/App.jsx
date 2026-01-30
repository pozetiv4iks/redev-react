import "./App.css";
import ChangeColor from "./components/ChangeColor.jsx";
import Counter from "./components/Counter.jsx";
import HiddenText from "./components/HiddenText.jsx";
import Input from "./components/Input.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Counter />
        <HiddenText />
        <Input/>
        <ChangeColor />
      </div>
    </>
  );
}

export default App;
