import { useContext } from "react";
import ProjectTheme from "../context/context";

export default function ThemeBlock({ func }) {
  const darkTheme = useContext(ProjectTheme);

  return (
    <div className={`block ${darkTheme ? 'dark-block' : 'white-block'}`}>
       <p style={{marginBottom:"16px"}}>{darkTheme? "Dark" : "Light"}</p>
      <button className={`block ${darkTheme ? '' : '--white-button'}`} onClick={func}>{darkTheme ? "dark" : "white"}</button>
    </div>
  );
}
