import { useContext } from "react";
import TaskContext from "../context/taskContext";

export default function List() {

    const {tasks} = useContext(TaskContext)
  return(
  <div className="block">
    {tasks.map(item => <p>{item.text}</p>)}
  </div>);
}
