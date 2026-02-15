import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import Builders from "./pages/Builders";
import Home from "./pages/Home";
import Hooks from "./pages/Hooks";
import ReactHookForm from "./pages/ReactHookForm";
import Storages from "./pages/Storages";
import ReactRoutes from "./pages/ReactRoutes";

function App() {
  const links = [
    {
      name: "Сборщики",
      path: "/builders",
      element: <Builders />,
    },
    {
      name: "Хуки",
      path: "/hooks",
      element: <Hooks />,
    },
    {
      name: "Формы",
      path: "/react-hook-form",
      element: <ReactHookForm />,
    },
    {
      name: "Главная",
      path: "/",
      element: <Home />,
    },
    {
      name: "Роуты",
      path: "/routes",
      element: <ReactRoutes />,
    },
    {
      name: "Хранилища",
      path: "/storages",
      element: <Storages />,
    },
  ];
  return (
    <>
      <header
        style={{
          padding: "15px 25px",
          width: "100%",
          borderBottom: "1px solid #ffffff",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {links.map((item) => (
            <NavLink
              style={{ textDecorationLine: "none", color:'#fffff' }}
              className={({ isActive }) =>
                isActive ? "text-red-500" : "text-black"
              }
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </header>
      <Routes>
        {links.map((item) => (
          <Route path={item.path} element={item.element}></Route>
        ))}
      </Routes>
    </>
  );
}

export default App;
