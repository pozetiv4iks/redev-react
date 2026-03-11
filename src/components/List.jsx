import { useMemo } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function List() {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);

  const filteredList = useMemo(() => {
    const filtred = [...tasks].sort((a, b) => a.isDone - b.isDone);
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
