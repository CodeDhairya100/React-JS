import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }


  //actual change in theme

  useEffect(() => {
    // Remove both 'light' and 'dark' before adding the new themeMode
    document.querySelector('html').classList.remove("dark")
    
    // Add the current themeMode class (either 'light' or 'dark') to the HTML tag
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])



  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>

      {/* *** FIX IS HERE ***
        Added bg-gray-100 (light background) and dark:bg-gray-900 (dark background)
        This ensures the entire screen switches colors, not just the Card.
      */}
      <div className="dark:bg-gray-100 bg-gray-900 flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App