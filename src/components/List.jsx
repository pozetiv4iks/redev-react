import { useContext, useMemo } from "react";
import TaskContext from "../context/taskContext";
import Card from "./Card";
import FilterContext from "../context/filterContext";

export default function List() {
  const { tasks } = useContext(TaskContext);
  const { filter } = useContext(FilterContext);

  const filteredList = useMemo(() => {
    
    switch (filter) {
      case false:
        return tasks.filter((item) => !item.isDone);
      case true:
        return tasks.filter((item) => item.isDone);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  
  
  return (
    <div className="block">
      {filteredList.map((item) => (
        <Card item={item} />
      ))}
    </div>
  );
}
