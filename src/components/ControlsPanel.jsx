import { useContext } from "react"
import LangContext from "../context/LanguageContext"
import ThemeContext from "../context/ThemeContext"

function ControlsPanel() {
    const contextLang = useContext(LangContext)
    const contextTheme = useContext(ThemeContext)
  return (
    <div>
     <button onClick={contextLang.toggleLanguage}>Change language</button>
     <button onClick={contextTheme.toggleTheme}>Change theme</button>
    </div>
  )
}

export default ControlsPanel
