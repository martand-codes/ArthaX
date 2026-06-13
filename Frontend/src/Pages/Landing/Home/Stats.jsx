import React from 'react'
import { ChartNoAxesCombined, ShieldCheck, Activity, ArrowUpRight, Bell } from 'lucide-react'

const Stats = () => {
  return (
    <div className='container mx-auto px-4 py-24'>
      
      <div className='mb-20 text-center md:text-left'>
        <h2 className='text-5xl md:text-6xl font-extrabold flex flex-col md:flex-row items-center md:justify-start gap-4 text-gray-900 tracking-tight'>
          Built for Traders Who Want Results Not <span className='text-red-500'>Noise</span>
          <ChartNoAxesCombined size={56} className='text-emerald-500' strokeWidth={2.5} />
        </h2>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
        
        {/* LEFT COLUMN: The Value Propositions */}
        <div className='space-y-8'>
          
          <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer'>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>No Bullshit.</h3>
            <p className='text-gray-500 leading-relaxed'>Invest where you won't get hit with heinous extra charges or hidden fees.</p>
          </div>

          <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer'>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>No Spamming.</h3>
            <p className='text-gray-500 leading-relaxed'>No barrage of useless notifications. You'll only get alerts that are meaningful and specific to your portfolio.</p>
          </div>

          <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer'>
            {/* Updated to Emerald to match the new soothing, profitable brand guidelines */}
            <h3 className='text-2xl font-bold text-emerald-600 mb-2'>Be Better!</h3>
            <p className='text-gray-500 leading-relaxed'>Invest intelligently so that you can become the best and the most financially secure version of yourself.</p>
          </div>
          
        </div>

        {/* RIGHT COLUMN: The Floating Product Widgets */}
        <div className='relative flex flex-col gap-6 w-full max-w-md mx-auto lg:ml-auto mt-10 lg:mt-0'>
          
          {/* Subtle Background Glow */}
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none'></div>

          {/* Widget 1: Visual Proof for "No Bullshit" (Zero Fees) */}
          <div className='bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-emerald-100 shadow-xl relative z-10 transform translate-x-4 md:-translate-x-8 transition-transform duration-500 hover:scale-105'>
            <div className='flex justify-between items-center mb-3'>
              <div className='flex items-center gap-2 text-sm font-semibold text-gray-500'>
                <ShieldCheck size={18} className='text-emerald-500' /> Trade Executed
              </div>
              <span className='text-xs font-bold bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider'>₹0.00 Brokerage</span>
            </div>
            <p className='text-lg font-bold text-gray-900'>Bought 50 RELIANCE @ ₹2,954.20</p>
          </div>

          {/* Widget 2: Visual Proof for "Be Better" (Portfolio Growth) */}
          <div className='bg-gray-900 p-8 rounded-3xl border border-gray-800 shadow-2xl relative z-20 transition-transform duration-500 hover:scale-105'>
            <div className='flex justify-between items-start mb-6'>
              <div>
                <p className='text-gray-400 text-sm font-medium mb-2 uppercase tracking-wider'>Total Net Worth</p>
                <h4 className='text-4xl font-black text-white'>₹14,20,450</h4>
              </div>
              <div className='bg-emerald-500/20 p-3 rounded-xl'>
                <Activity size={28} className='text-emerald-400' />
              </div>
            </div>
            <div className='flex items-center gap-2 text-emerald-400 font-bold text-sm bg-emerald-400/10 inline-flex px-3 py-1.5 rounded-lg'>
              <ArrowUpRight size={20} strokeWidth={3} />
              <span>+24.5% All Time</span>
            </div>
          </div>

          {/* Widget 3: Visual Proof for "No Spamming" (Smart Alerts) */}
          <div className='bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-gray-200 shadow-lg relative z-10 transform -translate-x-4 md:translate-x-6 transition-transform duration-500 hover:scale-105'>
            <div className='flex items-start gap-4'>
              <div className='p-3 bg-blue-50 rounded-xl mt-1'>
                <Bell size={20} className='text-blue-600' />
              </div>
              <div>
                <p className='text-base font-bold text-gray-900 mb-1'>Target Reached</p>
                <p className='text-sm text-gray-500 leading-relaxed'>NIFTY 50 crossed 22,500. Your trailing stop loss has been automatically updated to secure profits.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Stats