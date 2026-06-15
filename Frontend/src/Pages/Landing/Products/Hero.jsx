import React, { useState } from 'react'
import { LineChart, PieChart, Activity, ArrowRight, Zap, ShieldCheck, TrendingUp, BarChart3, ArrowUpRight, ArrowDownRight, Clock } from 'lucide-react'

const Hero = () => {
  const [activeTab, setActiveTab] = useState('trading')

  return (
    <div className='py-32 bg-white overflow-hidden relative'>
      
      <div className='absolute top-0 right-0 w-[1000px] h-[1000px] bg-emerald-50/40 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none'></div>

      <div className='container mx-auto px-4 max-w-7xl relative z-10'>
        

        <div className='text-center md:text-left mb-20 max-w-3xl'>
          <h2 className='text-emerald-600 font-extrabold tracking-widest uppercase text-sm mb-4'>
            The ArthaX Ecosystem
          </h2>
          <h1 className='text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8 leading-tight'>
            Everything you need <br />
            <span className='text-gray-300'>Nothing you don't!</span>
          </h1>
          <p className='text-xl text-gray-500 font-medium leading-relaxed max-w-2xl'>
            Whether you are day-trading options or building a 20-year retirement portfolio. We have got you covered with the perfect tools for your strategy.
          </p>
        </div>

        
        <div className='flex flex-col lg:flex-row gap-16 xl:gap-24 items-center'>
          
      
          <div className='w-full lg:w-5/12 flex flex-col gap-6'>
            
            {/* Tab 1: Active Trading */}
            <button 
              onClick={() => setActiveTab('trading')}
              className={`text-left p-8 rounded-[2rem] border-2 transition-all duration-500 group ${
                activeTab === 'trading' 
                ? 'bg-white border-emerald-100 shadow-[0_20px_40px_-15px_rgba(5,150,105,0.15)] scale-[1.02] z-10 relative' 
                : 'bg-transparent border-transparent hover:bg-gray-50 hover:border-gray-100'
              }`}
            >
              <div className='flex items-start gap-5 mb-4'>
                <div className={`p-4 rounded-2xl transition-colors duration-500 ${activeTab === 'trading' ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-100 text-gray-400 group-hover:text-emerald-500'}`}>
                  <Zap size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${activeTab === 'trading' ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900'}`}>
                    ArthaX Direct
                  </h3>
                  <p className='text-gray-500 leading-relaxed font-medium'>
                    Precision execution for the active trader. Trade NSE/BSE equities, futures, and options with zero latency and advanced GTT orders.
                  </p>
                </div>
              </div>
            </button>

            {/* Tab 2: Wealth Building */}
            <button 
              onClick={() => setActiveTab('wealth')}
              className={`text-left p-8 rounded-[2rem] border-2 transition-all duration-500 group ${
                activeTab === 'wealth' 
                ? 'bg-white border-blue-100 shadow-[0_20px_40px_-15px_rgba(59,130,246,0.15)] scale-[1.02] z-10 relative' 
                : 'bg-transparent border-transparent hover:bg-gray-50 hover:border-gray-100'
              }`}
            >
              <div className='flex items-start gap-5 mb-4'>
                <div className={`p-4 rounded-2xl transition-colors duration-500 ${activeTab === 'wealth' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-400 group-hover:text-blue-500'}`}>
                  <PieChart size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${activeTab === 'wealth' ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900'}`}>
                    ArthaX Wealth
                  </h3>
                  <p className='text-gray-500 leading-relaxed font-medium'>
                    Put your money on autopilot. Invest in zero-commission Direct Mutual Funds and set up intelligent SIPs that adjust to market dips.
                  </p>
                </div>
              </div>
            </button>

            {/* Tab 3: Pro Analytics */}
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`text-left p-8 rounded-[2rem] border-2 transition-all duration-500 group ${
                activeTab === 'analytics' 
                ? 'bg-white border-purple-100 shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)] scale-[1.02] z-10 relative' 
                : 'bg-transparent border-transparent hover:bg-gray-50 hover:border-gray-100'
              }`}
            >
              <div className='flex items-start gap-5 mb-4'>
                <div className={`p-4 rounded-2xl transition-colors duration-500 ${activeTab === 'analytics' ? 'bg-purple-100 text-purple-600' : 'bg-gray-100 text-gray-400 group-hover:text-purple-500'}`}>
                  <Activity size={28} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${activeTab === 'analytics' ? 'text-gray-900' : 'text-gray-500 group-hover:text-gray-900'}`}>
                    Pro Analytics
                  </h3>
                  <p className='text-gray-500 leading-relaxed font-medium'>
                    See the market like a machine. Integrated charting, fundamental data overlays, and custom algorithmic alerts.
                  </p>
                </div>
              </div>
            </button>

          </div>

          
          <div className='w-full lg:w-7/12 relative h-[600px] bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-[2.5rem] border border-gray-200 shadow-inner overflow-hidden flex items-center justify-center'>
            
            <div className='absolute inset-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=")]'></div>

            <div className={`absolute inset-0 p-8 md:p-16 transition-all duration-700 ease-out flex flex-col justify-center ${activeTab === 'trading' ? 'opacity-100 translate-y-0 scale-100 z-10' : 'opacity-0 translate-y-8 scale-95 pointer-events-none z-0'}`}>
              <div className='bg-white w-full max-w-lg mx-auto rounded-[2rem] shadow-2xl border border-gray-100 p-8 relative overflow-hidden'>
                <div className='absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600'></div>
                
                <div className='flex justify-between items-start mb-10'>
                  <div>
                    <h4 className='text-3xl font-black text-gray-900 tracking-tight'>NIFTY 50</h4>
                    <p className='text-gray-400 font-medium flex items-center gap-2 mt-1'><Clock size={14}/> FUT - Expiry 28th Nov</p>
                  </div>
                  <div className='text-right'>
                    <p className='text-3xl font-black text-gray-900'>22,450.65</p>
                    <p className='text-emerald-600 font-bold text-sm bg-emerald-50 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg mt-2'>
                      <ArrowUpRight size={16} /> +1.24%
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-4 mb-8 bg-gray-50 p-4 rounded-xl border border-gray-100'>
                  <div className='flex-1'>
                    <p className='text-xs text-gray-400 font-bold uppercase tracking-wider mb-1'>Market Depth</p>
                    <div className='w-full bg-gray-200 h-2 rounded-full overflow-hidden flex'>
                      <div className='bg-emerald-500 h-full w-[65%]'></div>
                      <div className='bg-rose-500 h-full w-[35%]'></div>
                    </div>
                  </div>
                  <div className='text-xs font-bold text-gray-500'>65% Buyers</div>
                </div>

                <div className='flex gap-4'>
                  <button className='flex-1 bg-emerald-500 text-white font-bold py-5 rounded-2xl text-lg hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/30 transition-all active:scale-95'>BUY</button>
                  <button className='flex-1 bg-rose-500 text-white font-bold py-5 rounded-2xl text-lg hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/30 transition-all active:scale-95'>SELL</button>
                </div>
              </div>
            </div>

            <div className={`absolute inset-0 p-8 md:p-16 transition-all duration-700 ease-out flex flex-col justify-center ${activeTab === 'wealth' ? 'opacity-100 translate-y-0 scale-100 z-10' : 'opacity-0 translate-y-8 scale-95 pointer-events-none z-0'}`}>
              <div className='bg-white w-full max-w-lg mx-auto rounded-[2rem] shadow-2xl border border-gray-100 p-8'>
                <div className='flex items-center gap-5 mb-10'>
                  <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30'>
                    <TrendingUp size={32} className='text-white' strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className='text-gray-400 font-bold uppercase tracking-widest text-xs mb-1'>Total Portfolio</p>
                    <h4 className='text-4xl font-black text-gray-900 tracking-tight'>₹42,85,900</h4>
                  </div>
                </div>

                <h5 className='text-sm font-bold text-gray-900 mb-4'>Asset Allocation</h5>
                <div className='space-y-4 mb-8'>
                  <div>
                    <div className='flex justify-between text-sm font-semibold text-gray-600 mb-2'><span>Equity Mutual Funds</span> <span>60%</span></div>
                    <div className='w-full bg-gray-100 h-3 rounded-full overflow-hidden'><div className='bg-blue-500 w-[60%] h-full rounded-full'></div></div>
                  </div>
                  <div>
                    <div className='flex justify-between text-sm font-semibold text-gray-600 mb-2'><span>Govt. Bonds (G-Sec)</span> <span>30%</span></div>
                    <div className='w-full bg-gray-100 h-3 rounded-full overflow-hidden'><div className='bg-purple-500 w-[30%] h-full rounded-full'></div></div>
                  </div>
                  <div>
                    <div className='flex justify-between text-sm font-semibold text-gray-600 mb-2'><span>Liquid Gold</span> <span>10%</span></div>
                    <div className='w-full bg-gray-100 h-3 rounded-full overflow-hidden'><div className='bg-amber-400 w-[10%] h-full rounded-full'></div></div>
                  </div>
                </div>

                <div className='flex justify-between items-center p-5 bg-emerald-50 rounded-2xl border border-emerald-100'>
                  <div className='flex items-center gap-3 text-emerald-800 font-bold'>
                    <div className='bg-emerald-200 p-2 rounded-full'><ShieldCheck size={20} className='text-emerald-700' /></div>
                    Smart SIP Active
                  </div>
                  <span className='font-black text-emerald-700'>₹25k / mo</span>
                </div>
              </div>
            </div>

            <div className={`absolute inset-0 p-8 md:p-16 transition-all duration-700 ease-out flex flex-col justify-center ${activeTab === 'analytics' ? 'opacity-100 translate-y-0 scale-100 z-10' : 'opacity-0 translate-y-8 scale-95 pointer-events-none z-0'}`}>
               <div className='bg-slate-900 w-full max-w-lg mx-auto rounded-[2rem] shadow-2xl shadow-slate-900/50 border border-slate-700 p-8 relative overflow-hidden'>
                
                <div className='absolute inset-0 bg-[url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=")]'></div>

                <div className='relative z-10'>
                  <div className='flex items-center gap-3 mb-8 border-b border-slate-800 pb-5'>
                    <div className='bg-purple-500/20 p-2 rounded-lg'>
                      <BarChart3 size={24} className='text-purple-400' />
                    </div>
                    <span className='text-white text-xl font-bold tracking-wide'>Algorithmic Analysis</span>
                  </div>

                  <div className='space-y-6'>
                    
                    {/* Indicator 1 */}
                    <div className='bg-slate-800/50 p-4 rounded-xl border border-slate-700/50'>
                      <div className='flex justify-between items-center mb-3'>
                        <span className='text-slate-300 font-medium'>RSI (14 Period)</span>
                        <span className='text-rose-400 font-bold bg-rose-400/10 px-2 py-1 rounded text-sm'>72.4 Overbought</span>
                      </div>
                      <div className='w-full bg-slate-900 h-2.5 rounded-full overflow-hidden'>
                        <div className='bg-gradient-to-r from-purple-500 to-rose-500 w-[72%] h-full rounded-full'></div>
                      </div>
                    </div>

                    {/* Indicator 2 */}
                    <div className='bg-slate-800/50 p-4 rounded-xl border border-slate-700/50'>
                      <div className='flex justify-between items-center mb-3'>
                        <span className='text-slate-300 font-medium'>MACD (12, 26)</span>
                        <span className='text-emerald-400 font-bold bg-emerald-400/10 px-2 py-1 rounded text-sm flex items-center gap-1'>
                          <ArrowUpRight size={14}/> Bullish Cross
                        </span>
                      </div>
                      <div className='w-full bg-slate-900 h-2.5 rounded-full overflow-hidden flex'>
                         <div className='bg-emerald-500 w-[45%] h-full'></div>
                         <div className='bg-slate-700 w-[10%] h-full'></div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero