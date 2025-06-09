import './App.css'
import './index.css'
import LoadingScreen from './components/LoadingScreen'
import { useState } from 'react'
import Navbar from './components/Navbar'
import MobileMenu from './components/MobileMenu'
import Home from './components/Sections/Home'
import About from './components/Sections/About'
import Projects from './components/Sections/Projects'
import Contact from './components/Sections/Contact'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <hr className="text-gray-400 opacity-20"/>
          <About />
          <hr className="text-gray-400 opacity-20"/>
          <Projects />
          <hr className="text-gray-400 opacity-20"/>
          <Contact />

        </div>
    </>
  )
}

export default App
