import React, { useState } from 'react'
import { Check, ArrowRight, ShieldCheck, HelpCircle, Leaf, Zap, X, Calculator, IndianRupee } from 'lucide-react'

const Brokerage = () => {
  const [isCalcOpen, setIsCalcOpen] = useState(false)
  const [segment, setSegment] = useState('intraday')
  
  const [buyPrice, setBuyPrice] = useState(1500)
  const [sellPrice, setSellPrice] = useState(1520)
  const [qty, setQty] = useState(100)

  const turnover = (buyPrice + sellPrice) * qty
  const grossProfit = (sellPrice - buyPrice) * qty
  
  const brokerage = segment === 'delivery' ? 0 : Math.min(40, turnover * 0.0003) 
  const taxes = turnover * 0.00015 
  
  const totalCharges = brokerage + taxes
  const netProfit = grossProfit - totalCharges
  const isProfitable = netProfit >= 0

  return (
    <div className='py-32 bg-white relative overflow-hidden'>
      
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-gray-50 to-white -z-10'></div>

      <div className='container mx-auto px-4 max-w-6xl'>
        
        {/* --- Top Pricing Section --- */}
        <div className='text-center mb-24'>
          <div className='inline-flex items-center justify-center px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold mb-6 uppercase tracking-widest border border-emerald-100'>
            Transparent Pricing
          </div>
          <h1 className='text-5xl md:text-7xl font-black text-gray-900 tracking-tight mb-8'>
            Keep more of your profits.
          </h1>
          <p className='text-xl text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed'>
            We don't believe in percentage-based commissions. Whether you trade 1 share or 10,000 shares, our pricing remains flat, fair, and completely transparent.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch'>
          
          <div className='bg-white rounded-[2.5rem] p-10 md:p-14 shadow-xl shadow-gray-200/50 border border-gray-200 flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-emerald-200'>
            <div className='flex items-center gap-4 mb-8'>
              <div className='w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center'>
                <Leaf size={28} className='text-emerald-600' strokeWidth={2.5} />
              </div>
              <div>
                <h3 className='text-2xl font-bold text-gray-900'>Long-term Investing</h3>
                <p className='text-gray-500 font-medium'>For the patient wealth builder.</p>
              </div>
            </div>
            
            <div className='mb-10'>
              <div className='flex items-baseline gap-2 mb-3'>
                <span className='text-7xl font-black text-gray-900'>₹0</span>
                <span className='text-xl text-gray-400 font-bold'>/ order</span>
              </div>
              <p className='text-emerald-700 font-bold bg-emerald-50 inline-flex items-center px-4 py-1.5 rounded-xl text-sm'>
                Absolutely Free
              </p>
            </div>

            <div className='w-full h-px bg-gray-100 mb-10'></div>

            <div className='flex-1'>
              <p className='text-sm font-bold text-gray-900 uppercase tracking-wider mb-6'>What's included</p>
              <ul className='space-y-6'>
                <li className='flex items-start gap-4'>
                  <div className='p-1 bg-emerald-100 rounded-full shrink-0 mt-0.5'>
                    <Check className='text-emerald-600' size={16} strokeWidth={3} />
                  </div>
                  <div>
                    <span className='text-gray-900 font-bold block mb-1'>Equity Delivery</span>
                    <span className='text-gray-500 text-sm font-medium'>Buy and hold stocks in your demat account with zero brokerage.</span>
                  </div>
                </li>
                <li className='flex items-start gap-4'>
                  <div className='p-1 bg-emerald-100 rounded-full shrink-0 mt-0.5'>
                    <Check className='text-emerald-600' size={16} strokeWidth={3} />
                  </div>
                  <div>
                    <span className='text-gray-900 font-bold block mb-1'>Direct Mutual Funds</span>
                    <span className='text-gray-500 text-sm font-medium'>Zero commission on all SIPs and lumpsum investments.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className='bg-slate-900 rounded-[2.5rem] p-10 md:p-14 shadow-2xl shadow-slate-900/40 border border-slate-800 flex flex-col relative overflow-hidden transition-all duration-500 hover:-translate-y-2'>
            <div className='absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none'></div>

            <div className='flex items-center gap-4 mb-8 relative z-10'>
              <div className='w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center border border-indigo-500/30'>
                <Zap size={28} className='text-indigo-400' strokeWidth={2.5} />
              </div>
              <div>
                <h3 className='text-2xl font-bold text-white'>Active Trading</h3>
                <p className='text-slate-400 font-medium'>For the precision day trader.</p>
              </div>
            </div>
            
            <div className='mb-10 relative z-10'>
              <div className='flex items-baseline gap-2 mb-3'>
                <span className='text-7xl font-black text-white'>₹20</span>
                <span className='text-xl text-slate-500 font-bold'>/ order</span>
              </div>
              <p className='text-indigo-300 font-bold bg-indigo-500/20 border border-indigo-500/30 inline-flex items-center px-4 py-1.5 rounded-xl text-sm'>
                Or 0.03% (whichever is lower)
              </p>
            </div>

            <div className='w-full h-px bg-slate-800 mb-10 relative z-10'></div>

            <div className='flex-1 relative z-10'>
              <p className='text-sm font-bold text-slate-300 uppercase tracking-wider mb-6'>Flat fee across segments</p>
              <ul className='space-y-6'>
                <li className='flex items-start gap-4'>
                  <div className='p-1 bg-indigo-500/30 rounded-full shrink-0 mt-0.5 border border-indigo-500/50'>
                    <Check className='text-indigo-400' size={16} strokeWidth={3} />
                  </div>
                  <div>
                    <span className='text-slate-200 font-bold block mb-1'>Intraday Equity</span>
                    <span className='text-slate-400 text-sm font-medium'>Buy and sell on the same day with maximum margin.</span>
                  </div>
                </li>
                <li className='flex items-start gap-4'>
                  <div className='p-1 bg-indigo-500/30 rounded-full shrink-0 mt-0.5 border border-indigo-500/50'>
                    <Check className='text-indigo-400' size={16} strokeWidth={3} />
                  </div>
                  <div>
                    <span className='text-slate-200 font-bold block mb-1'>Futures & Options (F&O)</span>
                    <span className='text-slate-400 text-sm font-medium'>Trade NIFTY and BANKNIFTY with advanced charting tools.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className='mt-20 flex flex-col items-center text-center'>
          <div className='inline-flex items-center gap-3 px-6 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-gray-700 font-bold text-sm mb-8 shadow-sm'>
            <ShieldCheck size={20} className='text-emerald-600' />
            ₹0 Account Opening Fee &nbsp;•&nbsp; ₹0 AMC for Year 1
          </div>
          
          <button 
            onClick={() => setIsCalcOpen(true)}
            className='group flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(5,150,105,0.3)] hover:bg-emerald-700 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(5,150,105,0.5)] transition-all duration-300 text-lg'
          >
            Calculate Exact Brokerage 
            <ArrowRight size={20} className='group-hover:translate-x-1 transition-transform' />
          </button>
          
          <div className='mt-8 flex items-start justify-center gap-2 max-w-lg mx-auto text-center'>
            <HelpCircle size={16} className='shrink-0 text-gray-400 mt-0.5' /> 
            <p className='text-sm text-gray-400 font-medium'>
              Statutory charges (STT, Stamp Duty, Exchange Transaction Charges, GST) apply directly as per government regulations.
            </p>
          </div>
        </div>

      </div>

      {/* ================================================= */}
      {/* 🚀 THE WIDE, SPLIT-SCREEN CALCULATOR MODAL 🚀 */}
      {/* ================================================= */}

      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${isCalcOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        
        <div 
          className='absolute inset-0 bg-slate-900/60 backdrop-blur-md transition-opacity duration-300'
          onClick={() => setIsCalcOpen(false)}
        ></div>

        <div className={`relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row overflow-hidden max-h-[95vh] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isCalcOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-12 opacity-0'}`}>
          
          <button 
            onClick={() => setIsCalcOpen(false)}
            className='absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 backdrop-blur-md'
          >
            <X size={24} />
          </button>

          {/* LEFT SIDE: Inputs */}
          <div className='flex-1 p-8 md:p-12 overflow-y-auto'>
            
            <div className='flex items-center gap-3 mb-10'>
              <div className='bg-emerald-100 p-3 rounded-xl shadow-sm'>
                <Calculator size={24} className='text-emerald-600' />
              </div>
              <div>
                <h3 className='text-2xl font-black text-gray-900'>Trade Calculator</h3>
                <p className='text-gray-500 font-medium mt-1'>Plan your trades with precision.</p>
              </div>
            </div>

            <div className='flex bg-gray-100 p-1.5 rounded-2xl mb-10 shadow-inner'>
              <button 
                onClick={() => setSegment('intraday')}
                className={`flex-1 py-3.5 text-sm font-bold rounded-xl transition-all duration-300 ${segment === 'intraday' ? 'bg-white text-emerald-700 shadow-md transform scale-[1.02]' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Intraday Trade
              </button>
              <button 
                onClick={() => setSegment('delivery')}
                className={`flex-1 py-3.5 text-sm font-bold rounded-xl transition-all duration-300 ${segment === 'delivery' ? 'bg-white text-emerald-700 shadow-md transform scale-[1.02]' : 'text-gray-500 hover:text-gray-700'}`}
              >
                Long-Term Delivery
              </button>
            </div>

            <div className='space-y-8'>
              <div className='grid grid-cols-2 gap-6'>
                <div>
                  <label className='block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3'>Buy Price</label>
                  <div className='relative group'>
                    <IndianRupee size={18} className='absolute left-5 top-1/2 -translate-y-1/2 text-emerald-500 group-focus-within:text-emerald-600 transition-colors' />
                    <input 
                      type="number" 
                      value={buyPrice} 
                      onChange={(e) => setBuyPrice(Math.min(Math.max(0, Number(e.target.value)), 999999999))} 
                      className='w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-gray-900 text-lg font-black focus:outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all' 
                    />
                  </div>
                </div>
                <div>
                  <label className='block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3'>Sell Price</label>
                  <div className='relative group'>
                    <IndianRupee size={18} className='absolute left-5 top-1/2 -translate-y-1/2 text-emerald-500 group-focus-within:text-emerald-600 transition-colors' />
                    <input 
                      type="number" 
                      value={sellPrice} 
                      onChange={(e) => setSellPrice(Math.min(Math.max(0, Number(e.target.value)), 999999999))} 
                      className='w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 text-gray-900 text-lg font-black focus:outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all' 
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className='block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3'>Quantity (Shares)</label>
                <input 
                  type="number" 
                  value={qty} 
                  onChange={(e) => setQty(Math.min(Math.max(0, Number(e.target.value)), 999999999))} 
                  className='w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 text-gray-900 text-lg font-black focus:outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all' 
                />
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Dynamic Receipt */}
          <div className='w-full lg:w-[420px] bg-slate-900 flex flex-col relative overflow-hidden'>
            
            <div className={`absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none transition-colors duration-1000 ${isProfitable ? 'bg-emerald-500/20' : 'bg-rose-500/20'}`}></div>

            <div className='p-8 md:p-12 flex-1 relative z-10 flex flex-col justify-center'>
              <h4 className='text-xs font-bold text-slate-400 uppercase tracking-widest mb-8 border-b border-slate-700 pb-4'>Transaction Breakdown</h4>
              
              <div className='space-y-5 text-base'>
                <div className='flex justify-between items-center gap-4'>
                  <span className='text-slate-400 font-medium whitespace-nowrap'>Total Turnover</span>
                  <span className='font-bold text-white break-all text-right max-w-[60%]'>₹{turnover.toFixed(2)}</span>
                </div>
                <div className='flex justify-between items-center gap-4'>
                  <span className='text-slate-400 font-medium whitespace-nowrap'>Brokerage</span>
                  <span className='font-bold text-white break-all text-right max-w-[60%]'>₹{brokerage.toFixed(2)}</span>
                </div>
                <div className='flex justify-between items-center gap-4'>
                  <span className='text-slate-400 font-medium whitespace-nowrap'>Exchange & Taxes</span>
                  <span className='font-bold text-white break-all text-right max-w-[60%]'>₹{taxes.toFixed(2)}</span>
                </div>
                
                <div className='flex justify-between items-center pt-5 border-t border-slate-700 mt-5 gap-4'>
                  <span className='text-slate-200 font-bold whitespace-nowrap'>Total Deductions</span>
                  <span className='font-black text-rose-400 break-all text-right max-w-[60%]'>- ₹{totalCharges.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className={`p-8 md:p-12 relative z-10 transition-colors duration-500 ${isProfitable ? 'bg-emerald-950/50' : 'bg-rose-950/50'}`}>
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${isProfitable ? 'text-emerald-400' : 'text-rose-400'}`}>
                Net {isProfitable ? 'Profit' : 'Loss'} 
              </p>
              <h2 className={`text-5xl font-black tracking-tighter break-all ${isProfitable ? 'text-emerald-400' : 'text-rose-400'}`}>
                {isProfitable ? '+' : ''}₹{netProfit.toFixed(2)}
              </h2>
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Brokerage
