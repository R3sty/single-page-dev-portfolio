import { useState } from 'react'
import Nav from './Pages/Nav'
import Hero from './Pages/Hero'
import Projects from './Pages/Projects'
import Techs from './Pages/Techs'
import Contact from './Pages/Contact'
import './index.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="font-sans flex flex-col items-center h-screen w-screen bg-black">
      <Hero />
      <Techs />
      <Projects />
      <Contact />
    </div>
  )

}

export default App
