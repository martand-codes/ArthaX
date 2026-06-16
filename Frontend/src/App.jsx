import React from 'react'
import HomePage from './Pages/Landing/Home/HomePage'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './Routes/AppRoutes.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
