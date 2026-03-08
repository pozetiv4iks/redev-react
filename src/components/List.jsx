import { useContext, useMemo } from "react";
import TaskContext from "../context/taskContext";
import Card from "./Card";
import FilterContext from "../context/filterContext";

export default function List() {
  const { tasks } = useContext(TaskContext);
  const { filter } = useContext(FilterContext);

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
