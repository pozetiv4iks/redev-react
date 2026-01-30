import React, { useState } from "react";

function Counter({ view = false }) {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    if (count > 0) {
      setCount((count) => count + 1);
    }
  };
  const handleDecrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={() => handleIncrement()}>Увеличить</button>
      <button onClick={() => handleDecrement()}>Уменьшить</button>
    </>
  );
}

export default Counter;
