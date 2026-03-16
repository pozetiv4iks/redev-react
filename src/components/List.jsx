import { useMemo } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function List() {
  const tasks = useSelector((state) => state.todos.tasks);
  const filter = useSelector((state) => state.filter);

  const filteredList = useMemo(() => {
    const sorted = [...tasks].sort((a, b) => a.isCompleted - b.isCompleted);
    switch (filter) {
      case false:
        return sorted.filter((item) => !item.isCompleted);
      case true:
        return sorted.filter((item) => item.isCompleted);
      default:
        return sorted;
    }
  }, [tasks, filter]);

  return (
    <div className="block">
      {filteredList.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
}
