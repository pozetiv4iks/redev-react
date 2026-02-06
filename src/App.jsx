import { useRef, useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [data, setData] = useState([
    { id: 1, animal: "tigre" },
    { id: 2, animal: "giraffe" },
    { id: 3, animal: "lion" },
    { id: 4, animal: "bird" },
  ]);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleSubmit = (key, value) => {
    if (key === "Enter") {
      setData((prev) => {
        return [...prev, { id: prev.length + 1, animal: value }];
      });
      console.log(data);

      inputRef.current.value = "";
    }
  };

  const handleClickInList = (id) => {
    setData((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
             ...item, animal: item.animal + "!!!"
          }
        }
        return item
      }),
    );
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "12px" }}>
        <button onClick={handleClick}>Focus</button>
        <input
          onKeyDown={(event) => handleSubmit(event.key, event.target.value)}
          ref={inputRef}
          type="text"
        />
      </div>
      <List data={data} f={handleClickInList} />
    </div>
  );
}

export default App;
