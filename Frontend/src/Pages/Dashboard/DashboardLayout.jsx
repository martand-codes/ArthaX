import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Dashboard-Components/Sidebar.jsx'
import Topbar from '../Components/Dashboard-Components/Topbar.jsx'
const DashboardLayout = () => {
  return (
    <div>
      <Sidebar/>
      <Topbar/>
      <Outlet/>
    </div>
  )
}

export default DashboardLayout
