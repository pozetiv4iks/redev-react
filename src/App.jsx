import { useCallback, useMemo, useState } from "react";
import "./App.css";
import CounterButton from "./components/CounterButton";
import SearchInput from "./components/SearchInput";
import ItemList from "./components/ItemList";
import withRenderTracker from "./RenderTrecker";

const HocCounterButton = withRenderTracker(CounterButton);
const HocSearchInput = withRenderTracker(SearchInput);
const HocItemList = withRenderTracker(ItemList);

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleInputChange = useCallback((newvalue) => {
    setValue(newvalue);
  }, []);

  const listItems = useMemo(() => {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push(i);
    }
    return data;
  }, []);

  return (
    <div>
      <div
        style={{
          padding: "25px",
          border: "1px solid #ffffff",
          marginBottom: "15px",
          borderRadius: "15px",
        }}
      >
        <p>{count}</p>
        <HocCounterButton func={handleClick} />
      </div>
      <div
        style={{
          padding: "25px",
          border: "1px solid #ffffff",
          borderRadius: "15px",
        }}
      >
        <HocSearchInput func={handleInputChange} />
        <HocItemList data={listItems} value={value} />
      </div>
    </div>
  );
}

export default App;
