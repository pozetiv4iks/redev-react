import { useContext, useMemo } from "react";
import TaskContext from "../context/taskContext";
import Card from "./Card";
import FilterContext from "../context/filterContext";
import { useEffect } from "react";

export default function List() {
  const { tasks } = useContext(TaskContext);
  const { filter } = useContext(FilterContext);

  const filteredList = useMemo(() => {
    const filtred = [...tasks].sort((a, b) => {
      return a.isDone - b.isDone;
    });
    switch (filter) {
      case false:
        return filtred.filter((item) => !item.isDone);
      case true:
        return filtred.filter((item) => item.isDone);
      default:
        return filtred;
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
