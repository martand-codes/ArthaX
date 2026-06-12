import React from 'react'
import { Check, X } from 'lucide-react' // Added the 'X' icon

const Pricing = () => {
  return (
    <div className='container mx-auto px-4 py-24 bg-gray-50'>
      
      {/* THE HEADER */}
      <div className='text-center mb-16 max-w-2xl mx-auto'>
        <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight'>
          Transparent Pricing.
        </h2>
        <p className='text-lg text-gray-500 '>
          Start for free upgrade when you need more juice No hidden fees <span className='font-bold text-green-500'>EVER!</span>
        </p>
      </div>

      {/* THE 3-COLUMN GRID */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center'>
        
        {/* TIER 1: Starter */}
        
        <div className='relative bg-gradient-to-b from-emerald-50/60 to-white p-8 rounded-3xl border border-emerald-100 shadow-sm transition-all duration-300 hover:-translate-y-4 hover:shadow-xl hover:shadow-emerald-100'>
          
          <h3 className='text-xl font-bold text-emerald-800 mb-2'>Starter</h3>
          <div className='flex items-baseline gap-2 mb-6'>
            <span className='text-4xl font-extrabold text-gray-900'>₹0</span>
            <span className='text-emerald-600 font-medium'>/month</span>
          </div>
          <p className='text-gray-600 mb-8 leading-relaxed'>A safe, welcoming space for beginners. Grow at your own pace with zero pressure.</p>
          
          <ul className='space-y-4 mb-8'>
            <li className='flex items-center gap-3 text-gray-800'><Check size={20} className='text-emerald-500' strokeWidth={2.5} /> Basic charts</li>
            <li className='flex items-center gap-3 text-gray-800'><Check size={20} className='text-emerald-500' strokeWidth={2.5} /> Standard delivery</li>
            
            <li className='flex items-center gap-3 text-gray-400'><X size={20} className='text-emerald-200' /> <span className='line-through decoration-emerald-200'>Real-time market data</span></li>
            <li className='flex items-center gap-3 text-gray-400'><X size={20} className='text-emerald-200' /> <span className='line-through decoration-emerald-200'>Advanced Analytics</span></li>
          </ul>
          
          <button className='w-full py-3 px-6 rounded-full bg-emerald-100 text-emerald-800 font-bold hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-sm'>
            Start Your Journey
          </button>
        </div>

        {/* TIER 2: Pro (The Royale Maroon Tier) */}
        <div className='bg-gradient-to-b from-rose-950 via-rose-900 to-black p-8 rounded-3xl border border-rose-800 shadow-2xl relative md:scale-105 z-10 transition-all duration-300 md:hover:scale-105 hover:-translate-y-4 hover:shadow-[0_25px_50px_-12px_rgba(159,18,57,0.6)]'>
          
          
          <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <span className='bg-gradient-to-r from-rose-400 to-rose-600 text-white px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_0_15px_rgba(225,29,72,0.5)] border border-rose-400/50'>
              Most Popular
            </span>
          </div>

          <h3 className='text-2xl font-bold text-white mb-2 tracking-tight'>Pro</h3>
          <div className='flex items-baseline gap-2 mb-6'>
            
            <span className='text-5xl font-black text-white drop-shadow-md'>₹499</span>
            <span className='text-rose-300 font-medium'>/month</span>
          </div>
          <p className='text-rose-200/80 mb-8 leading-relaxed'>For serious traders who demand real-time data and flawless execution.</p>
          
          <ul className='space-y-4 mb-8 font-medium'>
            
            <li className='flex items-center gap-3 text-white'><Check size={20} className='text-rose-400' strokeWidth={3} /> Basic charts</li>
            <li className='flex items-center gap-3 text-white'><Check size={20} className='text-rose-400' strokeWidth={3} /> Standard delivery</li>
            <li className='flex items-center gap-3 text-white'><Check size={20} className='text-rose-400' strokeWidth={3} /> Real-time market data</li>
            <li className='flex items-center gap-3 text-white'><Check size={20} className='text-rose-400' strokeWidth={3} /> Advanced Analytics</li>
          </ul>
          
          
          <button className='w-full py-4 px-6 rounded-full bg-white text-rose-900 font-black text-lg hover:bg-rose-50 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-1'>
            Be the Pro
          </button>
        </div>

        {/* TIER 3: Elite (The Heavenly Tier) */}
        
        <div className='relative p-[2px] rounded-3xl bg-gradient-to-br from-amber-200 via-yellow-400 to-orange-500 transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_50px_rgba(251,191,36,0.5)] group'>
          
          
          <div className='bg-white p-8 rounded-[22px] h-full'>
            
            
            <h3 className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600 mb-2 uppercase tracking-widest'>
              Elite
            </h3>
            
            <div className='flex items-baseline gap-2 mb-6'>
              <span className='text-4xl font-extrabold text-gray-900'>₹1499</span>
              <span className='text-gray-500'>/month</span>
            </div>
            <p className='text-gray-500 mb-8 font-medium'>Institutional grade tools for high-volume traders seeking absolute perfection.</p>
            
            <ul className='space-y-4 mb-8'>
              
              <li className='flex items-center gap-3 text-gray-800'><Check size={20} className='text-amber-500' strokeWidth={3} /> Everything in Pro</li>
              <li className='flex items-center gap-3 text-gray-800'><Check size={20} className='text-amber-500' strokeWidth={3} /> API Access</li>
              <li className='flex items-center gap-3 text-gray-800'><Check size={20} className='text-amber-500' strokeWidth={3} /> Dedicated Account Manager</li>
              <li className='flex items-center gap-3 text-gray-800'><Check size={20} className='text-amber-500' strokeWidth={3} /> Custom Integrations</li>
            </ul>
            
            
            <button className='w-full py-3 px-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold tracking-wide shadow-lg transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.4)] group-hover:scale-[1.02]'>
              Transcend Today
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Pricing
