import { useRef } from "react";

export default function List({data, f}) {
    
  return (
    <div>
      <ul style={{listStyle:"none"}}>
        {data.map((item) => {
            return(<li key={item.id}>
                <p >animal: {item.animal}</p>
                <button onClick={() => f(item.id)}>Change</button>
            </li>)
        })}
      </ul>
    </div>
  );
}
