import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bell, ChevronDown, LogOut, Settings, User, Wallet, Hexagon, Menu as MenuIcon, X } from 'lucide-react'

const Menu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  
  // Ref for "click outside" detection on desktop
  const dropdownRef = useRef(null)

  // Get the current URL path to highlight the active tab
  const location = useLocation()

  // Converted navItems to an array of objects with paths
  const navItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Orders', path: '/dashboard/orders' },
    { name: 'Holdings', path: '/dashboard/holdings' },
    { name: 'Positions', path: '/dashboard/positions' },
    { name: 'Funds', path: '/dashboard/funds' },
    { name: 'Reports', path: '/dashboard/reports' }
  ]

  const user = {
    name: 'Rahul Sharma',
    id: 'ARX-8492',
    initials: 'RS'
  }

  // --- Click Outside Logic for Profile Dropdown ---
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  //  Lock body scroll when mobile menu is open 
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav className='bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm w-full'>
        <div className='w-full px-4 md:px-8'>
          <div className='flex items-center justify-between h-20 md:h-24'>
            
            {/*  LEFT SIDE  */}
            <div className='flex items-center gap-8 lg:gap-12 xl:gap-16 h-full'>
              
              {/* App Logo - Now links back to dashboard */}
              <Link to="/dashboard" className='flex items-center gap-3 cursor-pointer shrink-0'>
                <div className='bg-slate-900 p-2 md:p-2.5 rounded-xl md:rounded-2xl'>
                  <Hexagon size={28} className='text-emerald-400 fill-emerald-400/20 md:w-8 md:h-8' />
                </div>
                <span className='font-black text-slate-900 tracking-tight text-2xl md:text-3xl'>
                  ArthaX
                </span>
              </Link>

              {/* Desktop Navigation Links */}
              <div className='hidden lg:flex items-center h-full'>
                {navItems.map((item) => {
                  // Check if the current URL matches the item's path
                  const isActive = location.pathname === item.path

                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`h-full px-4 xl:px-6 text-base xl:text-lg font-bold border-b-4 transition-colors duration-200 flex items-center ${
                        isActive 
                          ? 'border-emerald-500 text-emerald-600' 
                          : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>
            </div>

            {/*  RIGHT SIDE  */}
            <div className='flex items-center gap-4 md:gap-6 lg:gap-8'>
              
              {/* Live Market Indices */}
              <div className='hidden xl:flex items-center gap-4 mr-6 border-r border-slate-200 pr-8'>
                <div className='flex flex-col bg-emerald-50/50 border border-emerald-100/80 rounded-xl px-4 py-1.5 shadow-sm shadow-emerald-100/50 hover:bg-emerald-50 transition-colors cursor-default'>
                  <span className='text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-0.5'>NIFTY 50</span>
                  <span className='text-emerald-600 text-sm font-black whitespace-nowrap'>
                    22,419.55 <span className='text-xs ml-1 text-emerald-500 font-bold'>▲ 0.34%</span>
                  </span>
                </div>
                <div className='flex flex-col bg-rose-50/50 border border-rose-100/80 rounded-xl px-4 py-1.5 shadow-sm shadow-rose-100/50 hover:bg-rose-50 transition-colors cursor-default'>
                  <span className='text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-0.5'>SENSEX</span>
                  <span className='text-rose-600 text-sm font-black whitespace-nowrap'>
                    73,803.12 <span className='text-xs ml-1 text-rose-500 font-bold'>▼ 0.12%</span>
                  </span>
                </div>
              </div>

              {/* Add Funds Button */}
              <Link to="/dashboard/funds" className='hidden sm:flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20 active:scale-95 whitespace-nowrap'>
                <Wallet size={18} />
                ₹ Add Funds
              </Link>

              {/* Notification Bell */}
              <button className='relative p-2.5 text-slate-500 hover:bg-slate-100 rounded-full transition-colors shrink-0'>
                <Bell size={24} />
                <span className='absolute top-2.5 right-3 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full'></span>
              </button>

              {/* User Profile Dropdown Tracker */}
              <div className='relative hidden sm:block' ref={dropdownRef}>
                <button 
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className='flex items-center gap-2 hover:bg-slate-50 p-1.5 pr-3 rounded-full transition-colors border border-transparent hover:border-slate-200'
                >
                  <div className='w-11 h-11 md:w-12 md:h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm md:text-base font-bold shadow-sm shrink-0'>
                    {user.initials}
                  </div>
                  <ChevronDown size={18} className={`text-slate-400 transition-transform duration-200 hidden md:block ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Desktop Dropdown Menu */}
                {isProfileOpen && (
                  <div className='absolute right-0 mt-4 w-64 bg-white rounded-2xl shadow-2xl border border-slate-200 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200'>
                    <div className='px-6 py-4 border-b border-slate-100 mb-2'>
                      <p className='text-lg font-bold text-slate-900'>{user.name}</p>
                      <p className='text-sm font-medium text-slate-500'>{user.id}</p>
                    </div>
                    <Link to="/profile" className='w-full text-left px-6 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-emerald-600 flex items-center gap-3'>
                      <User size={20} /> My Profile
                    </Link>
                    <Link to="/settings" className='w-full text-left px-6 py-3 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-emerald-600 flex items-center gap-3'>
                      <Settings size={20} /> App Settings
                    </Link>
                    <div className='h-px bg-slate-100 my-2'></div>
                    <button className='w-full text-left px-6 py-3 text-base font-bold text-rose-600 hover:bg-rose-50 flex items-center gap-3'>
                      <LogOut size={20} /> Logout
                    </button>
                  </div>
                )}
              </div>

              {/* Hamburger Icon for Mobile/Tablet */}
              <button 
                className='lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors shrink-0'
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <MenuIcon size={28} />
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE SLIDE-OUT MENU ================= */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Dark Backdrop */}
        <div 
          className='absolute inset-0 bg-slate-900/60 backdrop-blur-sm'
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Sliding Drawer */}
        <div className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Mobile Menu Header */}
          <div className='flex items-center justify-between p-6 border-b border-slate-100'>
             <div className='flex items-center gap-3'>
               <div className='w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold'>
                 {user.initials}
               </div>
               <div>
                 <p className='font-bold text-slate-900'>{user.name}</p>
                 <p className='text-xs font-medium text-slate-500'>{user.id}</p>
               </div>
             </div>
             <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className='p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors'
             >
               <X size={20} />
             </button>
          </div>

          {/* Mobile Market Data */}
          <div className='p-6 border-b border-slate-100 bg-slate-50 flex justify-between'>
            <div className='flex flex-col'>
              <span className='text-slate-400 text-[10px] uppercase tracking-widest mb-1'>NIFTY 50</span>
              <span className='text-emerald-600 font-bold'>22,419.55 <span className='text-[10px]'>▲</span></span>
            </div>
            <div className='flex flex-col text-right'>
              <span className='text-slate-400 text-[10px] uppercase tracking-widest mb-1'>SENSEX</span>
              <span className='text-rose-600 font-bold'>73,803.12 <span className='text-[10px]'>▼</span></span>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className='flex-1 overflow-y-auto py-4 flex flex-col'>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`w-full text-left px-6 py-4 font-bold text-lg transition-colors ${
                    isActive 
                      ? 'text-emerald-600 bg-emerald-50/50 border-l-4 border-emerald-500' 
                      : 'text-slate-600 hover:bg-slate-50 border-l-4 border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>

          {/* Mobile Footer Actions */}
          <div className='p-6 border-t border-slate-100 space-y-4'>
            <Link 
              to="/funds"
              onClick={() => setIsMobileMenuOpen(false)}
              className='w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-emerald-600/20 active:scale-95 transition-transform'
            >
              <Wallet size={20} />
              Add Funds
            </Link>
            <button className='w-full flex items-center justify-center gap-2 bg-rose-50 text-rose-600 py-4 rounded-xl font-bold'>
              <LogOut size={20} />
              Logout
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Menu