import { useContext } from "react"
import ThemeContext from "../context/ThemeContext"
import LangContext from "../context/LanguageContext"

function UserProfile() {

    const contextTheme = useContext(ThemeContext)
    const contextLang = useContext(LangContext)
    console.log(contextLang.lang);
    
  return (
    <div className={contextTheme.theme}>
        <span>{contextLang.lang.profile}</span>
    </div>
  )
}

export default UserProfile
