import React from 'react'
import { MapPin, Shield, UserStar } from 'lucide-react'

const AboutHero = () => {
  return (
    <div className='relative pt-32 pb-24 overflow-hidden bg-white'>
      
      {/* BACKGROUND EFFECT: A very subtle, sophisticated top glow */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-emerald-500/5 blur-[100px] rounded-b-full pointer-events-none'></div>

      <div className='container mx-auto px-4 relative z-10'>
        
        <div className='max-w-4xl mx-auto text-center'>
          
          {/* THE EYEBROW BADGE */}
          <div className='inline-flex items-center justify-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-8 tracking-wide uppercase border border-emerald-100'>
            Our Mission
          </div>

          {/* THE CINEMATIC HEADLINE */}
          <h1 className='text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-tight'>
            Building the financial <br className='hidden md:block' /> engine of 
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-700'> tomorrow!</span>
          </h1>

          {/* THE PHILOSOPHY (Subheadline) */}
          <p className='text-xl text-gray-500 mb-16 leading-relaxed font-medium max-w-2xl mx-auto'>
            We started ArthaX with a simple belief: Institutional-grade trading tools shouldn't be locked behind massive wealth requirements or hidden fees. We are leveling the playing field for the modern investor.
          </p>

        </div>

        {/* THE TRANSPARENCY STATS (Grid) */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto border-t border-gray-100 pt-16'>
          
          {/* Stat 1: Location/Roots */}
          <div className='text-center flex flex-col items-center group'>
            <div className='w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 text-gray-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors duration-300'>
              <MapPin size={24} strokeWidth={2} />
            </div>
            <h4 className='text-xl font-bold text-gray-900 mb-2'>Rooted in Bengaluru</h4>
            <p className='text-gray-500 text-sm leading-relaxed'>Built in India's tech capital but engineered for the global financial markets</p>
          </div>

          {/* Stat 2: Security/Trust */}
          <div className='text-center flex flex-col items-center group'>
            <div className='w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 text-gray-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors duration-300'>
              <Shield size={24} strokeWidth={2} />
            </div>
            <h4 className='text-xl font-bold text-gray-900 mb-2'>Absolute Transparency</h4>
            <p className='text-gray-500 text-sm leading-relaxed'>Zero hidden charges, clear execution policies and bank-grade security protocols.</p>
          </div>

          {/* Stat 3: Tech Focus */}
          <div className='text-center flex flex-col items-center group'>
            <div className='w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 text-gray-400 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors duration-300'>
              <UserStar  size={24} strokeWidth={2} />
            </div>
            <h4 className='text-xl font-bold text-gray-900 mb-2'>Consumer First</h4>
            <p className='text-gray-500 text-sm leading-relaxed'>Driven by a team of obsessive product engineers focused on millisecond latencies for the Consumer.</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutHero