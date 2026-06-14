import React from 'react'
import { TrendingUp, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='sticky top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300 shadow-sm mb-10'>
      <div className='container mx-auto px-4 h-24 flex justify-between items-center'>
        
        {/* LEFT SIDE: Brand & Logo */}
        <Link to='/' className='flex items-center gap-3 cursor-pointer group'>
          <div className='p-2 bg-emerald-600 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-md'>
            <TrendingUp size={28} className='text-white' strokeWidth={3} />
          </div>
          <span className='text-3xl font-black text-gray-900 tracking-tighter'>
            ArthaX
          </span>
        </Link>

        {/* RIGHT SIDE: Desktop Navigation Links */}
        
        <div className='hidden md:flex items-center gap-10 font-medium text-gray-600 text-base'>
          
          {/* Sign Up Button: Kept prominent but softened the tracking and animation slightly */}
          <Link to='/signup' className='px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl shadow-[0_0_15px_rgba(5,150,105,0.4)] hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(5,150,105,0.5)] transition-all duration-300'>
            Sign Up
          </Link>

          {/* Text Links - Replaced the jumping animation with a smooth, assuring color fade */}
          <Link to="/about" className='hover:text-emerald-600 transition-colors duration-300'>About</Link>
          <Link to="/product" className='hover:text-emerald-600 transition-colors duration-300'>Products</Link>
          <Link to="/pricing" className='hover:text-emerald-600 transition-colors duration-300'>Pricing</Link>
          <Link to="/support" className='hover:text-emerald-600 transition-colors duration-300'>Support</Link>
        </div>

        {/* MOBILE MENU: Hamburger Icon */}
        <div className='md:hidden'>
          {/* Softened mobile icon to match the new text-gray-600 color */}
          <button className='p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors'>
            <Menu size={32} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar