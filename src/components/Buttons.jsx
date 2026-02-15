import { useNavigate } from "react-router";

export default function Buttons({ prev, next, last = false, first = false }) {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {!first && <button onClick={() => handleClick(prev)}>Prev</button>}
      <button onClick={() => handleClick("/")}>Home</button>
      {!last && <button onClick={() => handleClick(next)}>Next</button>}
    </div>
  );
}
