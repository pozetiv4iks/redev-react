import "./App.css";
import LangContext from "./context/LanguageContext";
import ThemeContext from "./context/ThemeContext";
import Header from "./components/Header";
import ControlsPanel from "./components/ControlsPanel";
import { useState } from "react";
import UserProfile from "./components/UserProfile";

function App() {
  const [lang, setLang] = useState({
    en: {
      welcome: "Welcome",
      profile: "Your profile",
    },
  });
  const [theme, setTheme] = useState("light-value");

  const themes = {
    dark: "dark-value",
    light: "light-value",
  };

  const langs = {
    en: {
      welcome: "Welcome",
      profile: "Your profile",
    },
    ru: {
      welcome: "Добро пожаловать",
      profile: "Твой профиль",
    },
    de: {
      welcome: "Willkommen",
      profile: "Dein Profil",
    },
    es: {
      welcome: "Bienvenido",
      profile: "Tu perfil",
    },
  };

  const toggleLanguage = () => {
    const langKeys = Object.keys(langs);
    const currentIndex = langKeys.indexOf(lang.lang);
    const nextIndex = (currentIndex + 1) % langKeys.length;
    const nextlang = langs[langKeys[nextIndex]];
    setLang({ lang: langKeys[nextIndex], ...nextlang });
  };

  const toggleTheme = () => {
    const themeValues = Object.values(themes);
    const currentIndex = themeValues.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themeValues.length;
    setTheme(themeValues[nextIndex]);
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <LangContext.Provider value={{ lang, toggleLanguage }}>
          <Header />
          <ControlsPanel />
          <UserProfile />
        </LangContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
