import { useState, memo } from "react";

function UserInfo({user}) {
    console.log('rerender');
    
    
  return (
    <>
      <h3>Профиль пользователя</h3>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Статус: {user.isActive ? "Активен" : "Неактивен"}</p>
    </>
  );
}

export default memo(UserInfo, (prevProps, nextProps) => {
  return prevProps.user === nextProps.user;
})