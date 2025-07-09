import React from 'react'
import Contact from './components/Contact'
import Project from './components/Projects'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TechStack from './components/TechStack'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import Whatsapp from './components/Whatsapp'
import ChatBot from './ChatBot'
import FloatingChatBot from './FloatingChatBot'

const App = () => {
  return (
    <div className='font-mono'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />}/>
        <Route path='/tech-stack' element={<TechStack />}/>
        <Route path='/projects' element={<Project />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/whatsapp' element={<Whatsapp />}/>
        
        
      </Routes>
      <FloatingChatBot/>
      <Footer />
      <Toaster />
    </div>
  )
}

export default App
