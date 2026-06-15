import React from 'react'
import { Activity, Shield, Zap, ArrowRight, LineChart, Lock, Server } from 'lucide-react'

const ProductBento = () => {
  return (
    <div className='pb-32 bg-white relative'>
      <div className='container mx-auto px-4 max-w-7xl'>
        
        <div className='text-center mb-16'>
          <h2 className='text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-4'>
            Engineered for performance.
          </h2>
          <p className='text-lg text-gray-500 font-medium max-w-2xl mx-auto'>
            Underneath the beautiful UI there is a  efficient, institutional-grade trading engine designed to execute your strategies without hesitation.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-32'>
          
          {/* Card 1: Speed - Dark Mode */}
          <div className='md:col-span-2 bg-slate-900 rounded-[2.5rem] p-10 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 shadow-xl'>
            <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3'></div>
            
            <div className='relative z-10 h-full flex flex-col justify-between'>
              <div className='mb-12 md:mb-0'>
                <div className='w-14 h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center border border-emerald-500/30 mb-6'>
                  <Zap size={28} className='text-emerald-400' strokeWidth={2.5} />
                </div>
                <h3 className='text-3xl font-bold text-white mb-3'>Sub-10ms Latency</h3>
                <p className='text-slate-400 text-lg max-w-md leading-relaxed'>
                  Market opportunities vanish in milliseconds. Our execution engine routes your orders directly to the exchange faster than you can blink.
                </p>
              </div>

              <div className='mt-8 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 backdrop-blur-sm'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-slate-400 text-sm font-bold tracking-wider uppercase'>Order Routing Ping</span>
                  <span className='text-emerald-400 font-black'>8.4 ms</span>
                </div>
                <div className='w-full h-2 bg-slate-900 rounded-full overflow-hidden'>
                  <div className='w-[15%] h-full bg-emerald-500 rounded-full animate-pulse'></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Security (*/}
          <div className='md:col-span-1 bg-white border-2 border-gray-100 rounded-[2.5rem] p-10 flex flex-col hover:border-blue-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1'>
            <div className='w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6'>
              <Shield size={28} className='text-blue-600' strokeWidth={2.5} />
            </div>
            <h3 className='text-2xl font-bold text-gray-900 mb-3'>Bank-Grade Security</h3>
            <p className='text-gray-500 leading-relaxed font-medium mb-8'>
              Your capital is protected by 256-bit SHA encryption and strict compliance protocols.
            </p>
            <div className='mt-auto flex gap-2 flex-wrap'>
              <span className='bg-gray-50 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-lg border border-gray-200 flex items-center gap-1'><Lock size={12}/> AES-256</span>
              <span className='bg-gray-50 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-lg border border-gray-200 flex items-center gap-1'><Server size={12}/> ISO 27001</span>
            </div>
          </div>

          {/* Card 3: Advanced Charting - Light Emerald */}
          <div className='md:col-span-1 bg-emerald-50 border border-emerald-100 rounded-[2.5rem] p-10 flex flex-col relative overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1'>
             <div className='absolute -bottom-10 -right-10 text-emerald-200/50'>
              <LineChart size={160} />
            </div>
            <div className='relative z-10'>
              <div className='w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm'>
                <Activity size={28} className='text-emerald-600' strokeWidth={2.5} />
              </div>
              <h3 className='text-2xl font-bold text-gray-900 mb-3'>Pro Charting</h3>
              <p className='text-emerald-900/70 leading-relaxed font-medium'>
                Visualize market trends effortlessly. Apply technical indicators and draw trendlines directly within your browser interface.
              </p>
            </div>
          </div>

          {/* Card 4: Reliability */}
          <div className='md:col-span-2 bg-white border-2 border-gray-100 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-10 hover:border-purple-200 hover:shadow-xl transition-all duration-500 hover:-translate-y-1'>
            <div className='flex-1'>
              <div className='w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6'>
                <Server size={28} className='text-purple-600' strokeWidth={2.5} />
              </div>
              <h3 className='text-3xl font-bold text-gray-900 mb-3'>99.99% Uptime</h3>
              <p className='text-gray-500 text-lg leading-relaxed font-medium'>
                Our infrastructure is highly distributed. When the market is incredibly volatile, ArthaX stays online, ensuring you never miss a critical exit.
              </p>
            </div>
            <div className='shrink-0 w-48 h-48 rounded-full border-[12px] border-purple-50 flex flex-col items-center justify-center relative'>
               <div className='absolute inset-[-12px] border-[12px] border-purple-500 rounded-full border-t-transparent animate-spin' style={{ animationDuration: '3s' }}></div>
               <span className='text-3xl font-black text-gray-900'>99.9%</span>
               <span className='text-xs font-bold text-gray-400 uppercase tracking-widest'>Online</span>
            </div>
          </div>

        </div>

        {/* FINAL CTA */}
        <div className='bg-gradient-to-br from-emerald-600 to-teal-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl'>
          
          <div className='absolute top-0 left-0 w-full h-full bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=")]'></div>
          
          <div className='relative z-10 max-w-3xl mx-auto'>
            <h2 className='text-4xl md:text-6xl font-black text-white tracking-tight mb-6'>
              Ready to change how you trade?
            </h2>
            <p className='text-emerald-100 text-xl font-medium mb-10'>
              Join thousands of traders who have upgraded to institutional-grade technology. Open your account in under 5 minutes.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <button className='px-8 py-4 bg-white text-emerald-800 font-bold rounded-xl shadow-lg hover:bg-gray-50 hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center gap-2'>
                Open Free Account <ArrowRight size={20} />
              </button>
              {/* Swapped API button for a Pricing link */}
              <button className='px-8 py-4 bg-emerald-800/50 text-white font-bold rounded-xl border border-emerald-500/50 hover:bg-emerald-800 hover:-translate-y-1 transition-all duration-300 text-lg'>
                View Transparent Pricing
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductBento