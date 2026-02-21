import { useContext } from "react";
import FilterContext from "../context/filterContext";

export default function FilterList() {
  const { setFilter } = useContext(FilterContext);
  const allFilters = [
    { id: 1, name: "All", value: "all" },
    { id: 2, name: "Active", value: false },
    { id: 3, name: "Complete", value: true },
  ];
  return (
    <div className="block">
      {allFilters.map((item) => (
        <span style={{marginLeft:'5px', cursor:"pointer"}} key={item.id} onClick={() => setFilter(item.value)}>
          {item.name}
        </span>
      ))}
    </div>
  );
}
