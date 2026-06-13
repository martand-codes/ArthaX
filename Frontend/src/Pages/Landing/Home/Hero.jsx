import React from 'react'
import { ArrowRight, PlayCircle } from 'lucide-react'

const Hero = () => {
  return (
    // Added pt-32 to give it that necessary breathing space under your sticky Navbar
    <div className='relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden'>
      
      {/* MAGIC 1: The Ethereal Background Glow. This makes the center of the page physically shine. */}
      <div className='absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none'></div>

      <div className='container mx-auto px-4 relative z-10 text-center'>
        
        {/* MAGIC 2: The "New Release" Badge. Draws the eye and makes the platform feel actively maintained. */}
        <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-bold mb-8 shadow-sm'>
          <span className='flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse'></span>
          ArthaX 0.1 is building now
        </div>

        {/* The Headline: Tighter tracking, gradient text matching our theme */}
        <h1 className='text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-700'>
            Master
          </span> The Market
        </h1>

        {/* The Subheadline: Explains the value prop before asking for a click */}
        <p className='text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed'>
          Trade stocks, mutual funds, and options with zero hidden fees. Experience lightning-fast execution on India's most advanced trading platform.
        </p>

        {/* The Dual-Action CTA Group */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mb-20'>
          {/* Primary Action */}
          <button className='group flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:bg-emerald-700 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(5,150,105,0.5)] transition-all duration-300 w-full sm:w-auto text-lg'>
            Start Trading Now
            <ArrowRight size={20} className='group-hover:translate-x-1 transition-transform' />
          </button>
          
          {/* Secondary Action (Ghost Button) */}
          <button className='group flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-700 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 w-full sm:w-auto text-lg'>
            <PlayCircle size={20} className='text-emerald-600' />
            See How It Works
          </button>
        </div>

        {/* MAGIC 3: The Dashboard Reveal */}
        <div className='relative max-w-6xl mx-auto'>
          {/* This casts a soft border glow specifically around the image */}
          <div className='absolute -inset-1 bg-gradient-to-b from-emerald-200 to-transparent rounded-[2rem] blur-lg opacity-40'></div>
          
          <img
            className='relative w-full rounded-2xl border border-gray-200/60 shadow-2xl transition-transform duration-700 hover:scale-[1.02]'
            src="Images/homeHero.png"
            alt="ArthaX Trading Dashboard"
          />
        </div>

      </div>
    </div>
  )
}

export default Hero