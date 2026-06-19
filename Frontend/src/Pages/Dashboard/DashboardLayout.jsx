import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { List, X } from 'lucide-react'
import Topbar from '../Components/Dashboard-Components/Topbar.jsx'
import Sidebar from '../Components/Dashboard-Components/Sidebar.jsx'

const DashboardLayout = () => {
  const [isMobileWatchlistOpen, setIsMobileWatchlistOpen] = useState(false)

  return (
    <div className='min-h-screen flex flex-col bg-slate-50'>
      
      {/* 1. TOP CONTAINER */}
      <Topbar />

      <div className='flex flex-1 w-full max-w-full 2xl:max-w-[1920px] mx-auto overflow-hidden'>
        
        {/* 2. DESKTOP LEFT CONTAINER (Watchlist) */}
        <div className='hidden lg:block'>
          <Sidebar />
        </div>

        {/* 3. RIGHT CONTAINER (Main Content) */}
        <main className='flex-1 overflow-y-auto p-4 md:p-8 lg:pt-8 relative'>
          
          {/* Ambient Glow */}
          <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3'></div>
          
          <div className='relative z-10 pb-20 lg:pb-0'>
             <Outlet /> 
          </div>

        </main>
      </div>

      {/* --- MOBILE SPECIFIC ELEMENTS --- */}
      
      {/* Mobile Floating Action Button (FAB) to open Watchlist */}
      <button 
        onClick={() => setIsMobileWatchlistOpen(true)}
        className='lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl shadow-slate-900/30 z-40 active:scale-95 transition-transform'
      >
        <List size={24} />
      </button>

      {/* Mobile Watchlist Drawer */}
      <div className={`lg:hidden fixed inset-0 z-[100] transition-opacity duration-300 ${isMobileWatchlistOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Dark Backdrop */}
        <div 
          className='absolute inset-0 bg-slate-900/60 backdrop-blur-sm'
          onClick={() => setIsMobileWatchlistOpen(false)}
        ></div>

        {/* Sliding Drawer Content */}
        <div className={`absolute top-0 left-0 w-[85%] max-w-[400px] h-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isMobileWatchlistOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          
          <div className='p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50'>
            <span className='font-black text-slate-900 text-lg'>Market Watch</span>
            <button 
              onClick={() => setIsMobileWatchlistOpen(false)}
              className='p-2 bg-slate-200 hover:bg-slate-300 rounded-full text-slate-600 transition-colors'
            >
              <X size={20} />
            </button>
          </div>

          {/* Render the actual Watchlist component inside the drawer */}
          <div className='flex-1 overflow-hidden'>
            <Sidebar />
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default DashboardLayout