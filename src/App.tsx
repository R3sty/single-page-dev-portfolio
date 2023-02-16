import { useState } from 'react'
import Nav from './Pages/Nav'
import Hero from './Pages/Hero'
import Projects from './Pages/Projects'
import Techs from './Pages/Techs'
import Contact from './Pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <Nav />
      <Hero />
      <Techs />
      <Projects />
      <Contact />
    </div>
  )

}

export default App
