import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Home, ArrowLeft, SearchAlert } from 'lucide-react'

const ErrorPage = () => {
  const navigate = useNavigate()

  return (
    <div className='relative min-h-[80vh] flex flex-col items-center justify-center px-4 text-center overflow-hidden'>
      
      {/* BACKGROUND EFFECTS: A subtle, pulsing danger glow behind the content */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none'></div>

      {/* THE ICON: Floating animation with a sharp red border */}
      <div className='relative mb-8 animate-[bounce_3s_infinite]'>
        <div className='absolute inset-0 bg-rose-100 blur-xl rounded-full'></div>
        <div className='relative p-6 bg-white rounded-full border-2 border-rose-100 shadow-xl'>
          <SearchAlert  size={56} className='text-rose-600' strokeWidth={2.5} />
        </div>
      </div>

      {/* 404 Error */}
      <h1 className='text-8xl md:text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-b from-rose-500 to-red-800 tracking-wider mb-2 drop-shadow-sm leading-none'>
        404
      </h1>

      {/* THE HEADLINE: Sharp, dark, and bold */}
      <h2 className='text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight relative z-10'>
        Market Closed!
      </h2>

      {/* THE DESCRIPTION: Professional and clear */}
      <p className='text-lg text-gray-500 mb-12 max-w-lg mx-auto font-medium leading-relaxed relative z-10'>
        The page you are looking for doesn't exist or has been moved or either the route is currently unavailable Let's get your portfolio back to safety
      </p>

      {/* ESCAPE ROUTES: High contrast danger buttons */}
      <div className='flex flex-col sm:flex-row gap-5 w-full sm:w-auto relative z-10'>
        
        {/* Secondary Action: Go Back (Ghost Button) */}
        <button 
          onClick={() => navigate(-1)} 
          className='flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 font-bold rounded-xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 shadow-sm'
        >
          <ArrowLeft size={20} strokeWidth={2.5} />
          Go Back
        </button>
        
        {/* Primary Action: Go Home (Solid Danger Button) */}
        <Link 
          to="/" 
          className='flex items-center justify-center gap-2 px-8 py-4 bg-rose-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:bg-rose-700 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(225,29,72,0.5)] transition-all duration-300'
        >
          <Home size={20} strokeWidth={2.5} />
          Back to Home
        </Link>

      </div>
    </div>
  )
}

export default ErrorPage