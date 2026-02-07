import { useState, memo } from "react";
import UserInfo from "./items/UserInfo";

function UserProfile() {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  
  const names = ["Stepan", "Pavel", "Ivan"];

  const handleChangeStatus = (user) => {
    return { ...user, isActive: !user.isActive };
  };
  const handleChangeAge = (user) => {
    return { ...user, age: user.age + 1 };
  };
  const handleChangeName = (user) => {
    return { ...user, name: names[Math.floor(Math.random() * names.length)] };
  };
  return (
    <div className="container">
      <UserInfo user={user}/>
      <button onClick={() => setUser((user) => handleChangeName(user))}>
        Поменять имя
      </button>
      <button onClick={() => setUser((user) => handleChangeAge(user))}>
        Поменять возраст
      </button>
      <button onClick={() => setUser((user) => handleChangeStatus(user))}>
        Поменять активность
      </button>
    </div>
  );
}

export default UserProfile