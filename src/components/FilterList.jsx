import { useDispatch } from "react-redux";
import { setFilter } from "../redux/actions";

export default function FilterList() {
  const dispatch = useDispatch();
  const allFilters = [
    { id: 1, name: "All", value: "all" },
    { id: 2, name: "Active", value: false },
    { id: 3, name: "Complete", value: true },
  ];

  return (
    <div className="block">
      {allFilters.map((item) => (
        <span
          style={{ marginLeft: "5px", cursor: "pointer" }}
          key={item.id}
          onClick={() => dispatch(setFilter(item.value))}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}
