import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import LangContext from "../context/LanguageContext";

function Header() {
  const contextTheme = useContext(ThemeContext);
  const contextLang = useContext(LangContext);

  return (
    <div className={contextTheme.theme}>
      <span>{contextLang.lang.welcome}</span>
    </div>
  );
}

export default Header;
