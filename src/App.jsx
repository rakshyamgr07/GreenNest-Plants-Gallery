import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>

       <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    <Footer/>
    <ToastContainer/>
</>  )
}

export default App
