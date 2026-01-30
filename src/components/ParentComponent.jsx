import { useState } from "react";
import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingComponent";

function ParentComponent({ view = false }) {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    if (counter > 0) {
      setCounter((counter) => counter - 1);
    }
  };
  const handleDecrement = () => {
    setCounter(Math.floor(Math.random() * 10) + 1);
  };
  return (
    <>
      <div>{counter}</div>
      <button onClick={() => handleIncrement()}>Уменьшить</button>
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Увеличить
      </button>
      <button onClick={() => handleDecrement()}>Рандом</button>
      <button onClick={() => setCounter(0)}>Сбросить</button>
      <ChildComponent name="Stepan" count = {counter}/>
      <SiblingComponent />
    </>
  );
}

export default ParentComponent;
