import React from 'react'
import Sidebar from '../Components/Dashboard-Components/Sidebar.jsx'
import Topbar from '../Components/Dashboard-Components/Topbar.jsx'
import Holdings from '../Components/Dashboard-Components/Holdings.jsx'
import WatchList from '../Components/Dashboard-Components/WatchList.jsx'
import Report from '../Components/Dashboard-Components/Report.jsx'
import PortfolioSummary from '../Components/Dashboard-Components/PortfolioSummary.jsx'

const DashboardPage = () => {
  return (
    <>
      <PortfolioSummary />
      <Report />
      <Holdings />
    </>
  )
}

export default DashboardPage
