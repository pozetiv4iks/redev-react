import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProjectTheme from './context/context'
import ThemeBlock from './components/ThemeBlock'
import { useState } from 'react'
import './App.css'

const Root = () => {
  const [theme, setTheme] = useState(true)

  const handleChangeTheme = () => {
    setTheme(prev => !prev);
  }

  useEffect(() => {
    const rootElement = document.getElementById('root');
    rootElement.style.backgroundColor = theme ? "#242424" : "#ffffff"
    
  }, [theme])

  return (
    <StrictMode>
      <ProjectTheme.Provider value={theme}>
        <ThemeBlock func={handleChangeTheme} />
      </ProjectTheme.Provider>
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Root />)