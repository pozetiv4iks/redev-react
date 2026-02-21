import { useContext, useMemo } from "react";
import TaskContext from "../context/taskContext";
import Card from "./Card";
import FilterContext from "../context/filterContext";

export default function List() {
  const { tasks } = useContext(TaskContext);
  const { filter } = useContext(FilterContext);

  const filteredList = useMemo(() => {
    switch (filter) {
      case "active":
        return tasks.filter((item) => !item.completed);
      case "complete":
        return tasks.filter((item) => item.completed);
      default:
        return tasks;
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
