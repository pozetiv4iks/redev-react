import { useEffect, useState } from "react";
import getTodo from "../service/get-data";

export default function LifecycleComponentFunc() {
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    console.log("componentDidMount");
    getTodo();

  }, []);

  useEffect(() => {
    console.log('componentShouldUpdate')
    if (count % 2 === 0) {
      setDisplayCount(count);
    }
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2>Функциональный компонент</h2>
      <h3>Счетчик: {displayCount}</h3>
      <button onClick={handleIncrement}>Увеличить</button>
    </div>
  );
}
