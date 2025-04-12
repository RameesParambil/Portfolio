import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import ParticlesComponent from './components/particles';


const App = () => {
  return (
    <div>
      <Navbar />
      {/* <ParticlesComponent /> */}
      <Home />
      <About />
    </div>
  )
}

export default App
