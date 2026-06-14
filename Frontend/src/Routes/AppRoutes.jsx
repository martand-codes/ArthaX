import React from 'react'
import { Routes, Route } from "react-router-dom"
import HomePage from '../Pages/Landing/Home/HomePage.jsx'
import Signup from '../Pages/Landing/Signup/Signup.jsx'
import AboutPage from '../Pages/Landing/About/AboutPage.jsx'
import PricingPage from '../Pages/Landing/Pricing/PricingPage.jsx'
import SupportPage from '../Pages/Landing/Support/SupportPage.jsx'
import ProductPage from '../Pages/Landing/Products/ProductPage.jsx'
import ErrorPage from '../Pages/Landing/ErrorPage.jsx'
const AppRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<HomePage/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/pricing' element={<PricingPage/>} />
        <Route path='/support' element={<SupportPage/>} />
        <Route path='/product' element={<ProductPage/>} />
        <Route path='*' element={<ErrorPage/>} />
        
    </Routes>
      
  )
}

export default AppRoutes
