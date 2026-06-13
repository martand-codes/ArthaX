import React from 'react'
import { ArrowRight, ShieldCheck, Lock, Activity, Wallet, BarChart3, LineChart, Zap } from 'lucide-react'

const OpenAccount = () => {
  return (
    // MAGIC 1: Clean, Light Background with a subtle top border to separate it from Pricing
    <div className='relative py-24 bg-gray-50 overflow-hidden border-t border-gray-200 mt-24'>
      
      {/* MAGIC 2: Subtle Light-Mode Trading Grid. Fades out at the bottom. */}
      <div className='absolute inset-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNCkiLz48L3N2Zz4=")] [mask-image:linear-gradient(to_bottom,white,transparent)]'></div>

      <div className='relative container mx-auto px-4 text-center z-10 max-w-6xl'>
        
        {/* The Professional Headline */}
        <h2 className='text-5xl md:text-6xl font-black text-red-600 tracking-tight mb-10'>
          Stop Watching
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-700 pl-10 '>
            Start Trading!
          </span>
        </h2>
        
        <p className='text-xl text-gray-500 mb-16 max-w-2xl mx-auto font-medium'>
          Join the next generation of investors. Open your free ArthaX demat account in under 3 minutes and claim your financial independence.
        </p>

        {/* MAGIC 3: The Trading Pillars (Bento Grid) */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 text-left'>
          
          {/* Pillar 1: Analytics */}
          <div className='bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow'>
            <div className='w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center mb-6'>
              <BarChart3 className='text-rose-600' size={24} strokeWidth={2.5} />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>Pro-Level Analytics</h3>
            <p className='text-gray-500 leading-relaxed'>Institutional-grade charting tools and technical indicators, simplified for the modern investor.</p>
          </div>

          {/* Pillar 2: Speed */}
          <div className='bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow'>
            <div className='w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6'>
              <Zap  className='text-blue-600' size={24} strokeWidth={2.5} />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>Lightning Execution</h3>
            <p className='text-gray-500 leading-relaxed'>Direct market access ensures your trades are executed in milliseconds with zero lag.</p>
          </div>

          {/* Pillar 3: Fees */}
          <div className='bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow'>
            <div className='w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6'>
              <Wallet className='text-emerald-600' size={24} strokeWidth={2.5} />
            </div>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>Zero Hidden Fees</h3>
            <p className='text-gray-500 leading-relaxed'>Keep more of your profits. We believe in absolute transparency with flat, predictable pricing.</p>
          </div>

        </div>

        {/* MAGIC 4: The High-Contrast CTA Button */}
        <button className='group inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white font-black text-xl rounded-2xl hover:bg-green-600 hover:shadow-[0_10px_30px_rgba(225,29,72,0.4)] hover:-translate-y-1 transition-all duration-300'>
          Open Free Account 
          <ArrowRight className='group-hover:translate-x-1.5 transition-transform duration-300' strokeWidth={3} />
        </button>

        {/* MAGIC 5: Trust Indicators (Light Mode Adapted) */}
        <div className='mt-20 pt-10 border-t border-gray-200 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-gray-500 font-semibold text-sm uppercase tracking-wider'>
          
          <div className='flex items-center gap-2'>
            <ShieldCheck className='text-emerald-500' size={20} strokeWidth={2.5} />
            <span>Bank-Grade Security</span>
          </div>
          
          <div className='flex items-center gap-2'>
            <Lock className='text-emerald-500' size={20} strokeWidth={2.5} />
            <span>256-bit Encryption</span>
          </div>
          
          <div className='flex items-center gap-2'>
            <LineChart className='text-emerald-500' size={20} strokeWidth={2.5} />
            <span>SEBI Registered</span>
          </div>

        </div>

      </div>
    </div>
  )
}

export default OpenAccount