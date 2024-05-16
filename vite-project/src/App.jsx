import React from 'react'
import Navbar from './component/Navbar'
import "./utils/index"
import About from './pages/About'
import News from './pages/News'
import Explore from './pages/Explore'
import Blacksteel from './pages/Blacksteel'
import Form from './pages/Form'
import Footer from './pages/Footer'
function App() {
  return (
    <div>

      <Navbar/>
      <About/>
      <News/>
      <Explore/>
      <Blacksteel/>
      <Form/>
      <Footer/>
      
      
      
    
    </div>
  )
}

export default App
