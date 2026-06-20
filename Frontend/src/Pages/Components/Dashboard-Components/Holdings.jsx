import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { holdingsData } from '../../../Utils/DummyData.js'; // Adjusted path

const Holdings = () => {
  // Calculate Totals for the Summary Cards
  const totalInvested = holdingsData.reduce((acc, stock) => acc + (stock.avgCost * stock.qty), 0);
  const currentTotal = holdingsData.reduce((acc, stock) => acc + stock.curVal, 0);
  const totalPnL = currentTotal - totalInvested;
  const isTotalProfit = totalPnL >= 0;

  return (
    <div className='max-w-7xl mx-auto pb-10'>
      
    {/* Page Header */}
      <div className='mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4'>
        
        {/* Left Side: Greeting & Status */}
        <div>
          {/* Status Pulse */}
          <div className='flex items-center gap-2 mb-2.5 animate-in fade-in slide-in-from-left-2 duration-500'>
            <span className='relative flex h-2.5 w-2.5'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500'></span>
            </span>
            <span className='text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]'>Secure Terminal Online</span>
          </div>
          
          <h1 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tight'>
            Wealth <span className='bg-gradient-to-r from-emerald-600 to-teal-400 bg-clip-text text-transparent'>Command</span>
          </h1>
          <p className='text-slate-500 font-bold mt-2 text-sm'>
            Monitoring {holdingsData.length} active assets in your primary arsenal!
          </p>
        </div>

        {/* Right Side: Tech/Terminal Details */}
        <div className='hidden md:block text-right bg-white border border-slate-200 px-4 py-2.5 rounded-2xl shadow-sm'>
           <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5'>Market Status</p>
           {/* font-mono gives it that sleek, developer-terminal feel */}
           <p className='text-sm font-black text-emerald-600 font-mono flex items-center gap-2'>
             ● LIVE_SYNC
           </p>
        </div>
        
      </div>

      {/* Portfolio Summary Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
        <div className='bg-white p-6 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/40 hover:shadow-lg transition-shadow'>
          <p className='text-xs font-black text-slate-400 uppercase tracking-widest mb-2'>Total Invested</p>
          <p className='text-2xl md:text-3xl font-black text-slate-900'>₹{totalInvested.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
        </div>
        
        <div className='bg-white p-6 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/40 hover:shadow-lg transition-shadow'>
          <p className='text-xs font-black text-slate-400 uppercase tracking-widest mb-2'>Current Value</p>
          <p className='text-2xl md:text-3xl font-black text-slate-900'>₹{currentTotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
        </div>
        
        <div className='bg-white p-6 rounded-3xl border border-slate-200 shadow-md shadow-slate-200/40 hover:shadow-lg transition-shadow relative overflow-hidden'>
          <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 ${isTotalProfit ? 'bg-emerald-500/20' : 'bg-rose-500/20'}`}></div>
          <p className='text-xs font-black text-slate-400 uppercase tracking-widest mb-2'>Total Profit & Loss</p>
          <div className='flex items-center gap-3 relative z-10'>
            <p className={`text-2xl md:text-3xl font-black ${isTotalProfit ? 'text-emerald-600' : 'text-rose-600'}`}>
              {isTotalProfit ? '+' : ''}₹{totalPnL.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </p>
            <div className={`flex items-center text-xs font-black px-2.5 py-1 rounded-md ${isTotalProfit ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
              {isTotalProfit ? <ArrowUpRight size={16} className="mr-0.5" /> : <ArrowDownRight size={16} className="mr-0.5" />}
              {((totalPnL / totalInvested) * 100).toFixed(2)}%
            </div>
          </div>
        </div>
      </div>

      {/* The Holdings Table - Upgraded Shadow and Borders */}
      <div className='bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden'>
        <div className='overflow-x-auto custom-scrollbar'>
          <table className='w-full text-left border-collapse'>
            
            {/* Table Header - Added divide-x for vertical lines, centered data columns */}
            <thead>
              <tr className='bg-slate-50 border-b border-slate-200 text-[11px] uppercase tracking-widest text-slate-500 divide-x divide-slate-200'>
                <th className='py-5 px-6 font-black whitespace-nowrap text-left'>Instrument</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Quantity</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Average Cost</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Last Traded Price</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Current Value</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Profit & Loss</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Net Change</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Day Change</th>
              </tr>
            </thead>
            
            {/* Table Body - Added divide-x, centered data columns */}
            <tbody className='divide-y divide-slate-100'>
              {holdingsData.map((stock, index) => (
                <tr key={index} className='hover:bg-slate-50/80 transition-colors group divide-x divide-slate-100'>
                  
                  {/* Kept Instrument left-aligned for readability */}
                  <td className='py-5 px-6 font-black text-[15px] text-slate-900 whitespace-nowrap text-left'>
                    {stock.instrument}
                  </td>
                  
                  {/* Centered all numerical data */}
                  <td className='py-5 px-6 font-bold text-sm text-slate-700 whitespace-nowrap text-center'>
                    {stock.qty}
                  </td>
                  <td className='py-5 px-6 font-bold text-sm text-slate-700 whitespace-nowrap text-center'>
                    {(stock.avgCost).toFixed(2)}
                  </td>
                  <td className='py-5 px-6 font-black text-sm text-slate-900 whitespace-nowrap text-center'>
                    {(stock.ltp).toFixed(2)}
                  </td>
                  <td className='py-5 px-6 font-bold text-sm text-slate-700 whitespace-nowrap text-center'>
                    {(stock.curVal).toFixed(2)}
                  </td>
                  
                  <td className={`py-5 px-6 font-black text-sm whitespace-nowrap text-center ${stock.isProfit ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {stock.isProfit ? '+' : ''}{(stock.pnl).toFixed(2)}
                  </td>
                  
                  <td className={`py-5 px-6 font-black text-sm whitespace-nowrap text-center ${stock.netChg.includes('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                    <span className={`inline-block px-2 py-0.5 rounded ${stock.netChg.includes('+') ? 'bg-emerald-50' : 'bg-rose-50'}`}>
                      {stock.netChg}
                    </span>
                  </td>
                  
                  <td className={`py-5 px-6 font-black text-sm whitespace-nowrap text-center ${stock.dayChg.includes('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                    <span className={`inline-block px-2 py-0.5 rounded ${stock.dayChg.includes('+') ? 'bg-emerald-50' : 'bg-rose-50'}`}>
                      {stock.dayChg}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
        </div>
      </div>

    </div>
  );
};

export default Holdings;