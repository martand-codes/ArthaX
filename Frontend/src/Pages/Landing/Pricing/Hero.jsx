import React from 'react'
import { TrendingDown, ShieldCheck, Percent } from 'lucide-react'

const PricingHero = () => {
  return (
    <div className='pt-32 pb-20 bg-white relative overflow-hidden'>
      
      {/* Background Ambience */}
      <div className='absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none'></div>

      <div className='container mx-auto px-4 max-w-7xl relative z-10'>
        <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-24'>
          
          {/* LEFT SIDE: The Bold Typography */}
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 text-rose-600 text-sm font-bold mb-6 border border-rose-100'>
              <Percent size={16} />
              Stop paying percentage fees
            </div>
            
            <h1 className='text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8 leading-tight'>
              Pricing that doesn't <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600'>eat your profits.</span>
            </h1>
            
            <p className='text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0'>
              Traditional brokers penalize you for being successful by taking a cut of your total trade value. We charge a flat fee, so the more you grow, the more you keep.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6'>
              <div className='flex items-center gap-3 text-gray-700 font-bold'>
                <ShieldCheck size={24} className='text-emerald-500' />
                SEBI Registered
              </div>
              <div className='hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-300'></div>
              <div className='flex items-center gap-3 text-gray-700 font-bold'>
                <TrendingDown size={24} className='text-emerald-500' />
                Zero Hidden Fees
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Visual Savings Graph */}
          <div className='w-full lg:w-1/2 relative'>
            
            {/* The Glassmorphic Canvas */}
            <div className='bg-white/60 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-[2.5rem] p-8 md:p-12 relative'>
              
              <div className='mb-8'>
                <h3 className='text-xl font-bold text-gray-900'>Annual Brokerage Paid</h3>
                <p className='text-sm text-gray-500 font-medium'>Based on 10 trades per day (₹1L average value)</p>
              </div>

              {/* The Graph Area (Fixed Heights and Hover Animations) */}
              <div className='flex items-end gap-6 md:gap-12 h-72 mt-12 mb-6 border-b-2 border-gray-100 pb-4 relative'>
                
                {/* Traditional Broker Bar (Tall & Red) */}
                <div className='flex-1 flex flex-col items-center group cursor-pointer'>
                  {/* Added translate animations for a smooth float-up effect */}
                  <span className='text-rose-500 font-bold mb-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0'>
                    ₹1,20,000
                  </span>
                  {/* Reduced height to h-48 to prevent overlap */}
                  <div className='w-full max-w-[100px] h-48 bg-gradient-to-t from-rose-100 to-rose-400 rounded-t-2xl relative shadow-lg shadow-rose-200/50 transition-transform duration-300 group-hover:scale-[1.02]'>
                    <div className='absolute inset-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==")]'></div>
                  </div>
                  <span className='text-gray-500 font-bold mt-4 text-center text-sm'>Traditional<br/>Brokers</span>
                </div>

                {/* ArthaX Bar (Short & Green) */}
                <div className='flex-1 flex flex-col items-center group cursor-pointer'>
                  <div className='absolute top-1/2 left-0 w-full border-t border-dashed border-emerald-300 -z-10'></div>
                  <span className='text-emerald-600 font-black mb-3 text-2xl transition-transform duration-300 group-hover:-translate-y-1'>
                    ₹4,800
                  </span>
                  <div className='w-full max-w-[100px] h-12 bg-gradient-to-t from-emerald-400 to-emerald-500 rounded-t-2xl shadow-lg shadow-emerald-200/50 relative transition-transform duration-300 group-hover:scale-[1.02]'>
                    <div className='absolute inset-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=")]'></div>
                  </div>
                  <span className='text-gray-900 font-black mt-4 text-center text-sm'>ArthaX<br/>Flat-Fee</span>
                </div>

              </div>

              {/* Floating Savings Badge */}
              <div className='absolute -right-6 -top-6 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-xl shadow-slate-900/20 border border-slate-700 transform rotate-3 hover:rotate-0 transition-transform'>
                <p className='text-xs font-bold text-emerald-400 uppercase tracking-widest mb-1'>You Save</p>
                <p className='text-2xl font-black'>96% in Fees</p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingHero