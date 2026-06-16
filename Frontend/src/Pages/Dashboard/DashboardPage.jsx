import React from 'react'
import Sidebar from '../Components/Dashboard-Components/Sidebar.jsx'
import Topbar from '../Components/Dashboard-Components/Topbar.jsx'
import Holdings from '../Components/Dashboard-Components/Holdings.jsx'
import WatchList from '../Components/Dashboard-Components/WatchList.jsx'
import PortfolioSummary from '../Components/Dashboard-Components/PortfolioSummary.jsx'

const DashboardPage = () => {
  return (
    <>
      <PortfolioSummary />
      <Holdings />
      <WatchList />
    </>
  )
}

export default DashboardPage
