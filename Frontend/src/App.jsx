import React from 'react'
import HomePage from './Pages/Landing/Home/HomePage'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes/AppRoutes.jsx'
import Navbar from './Pages/Landing/Navbar.jsx'
import Footer from './Pages/Landing/Footer.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes/>
      <Footer />
    </BrowserRouter>
  )
}

export default App
