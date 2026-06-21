import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Calendar, 
  ChevronDown, 
  TrendingUp, 
  TrendingDown, 
  PieChart,
  Search,
  ReceiptIndianRupee
} from 'lucide-react';
import { reportSummary, reportData } from '../../../Utils/DummyData.js'; 

const Reports = () => {
  const [activeTab, setActiveTab] = useState('P&L');
  const [dateRange, setDateRange] = useState('FY 2026-27');
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [search, setSearch] = useState('');

  const isNetProfit = reportSummary.netPnL >= 0;

  // Search filter for the table
  const filteredReports = reportData.filter(trade => 
    trade.instrument.toLowerCase().includes(search.toLowerCase()) || 
    trade.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='max-w-7xl mx-auto pb-10 relative'>
      
      {/* Page Header */}
      <div className='mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4'>
        <div>
          <div className='flex items-center gap-2 mb-2.5 animate-in fade-in slide-in-from-left-2 duration-500'>
            <FileText size={14} className="text-purple-500" />
            <span className='text-[10px] font-black text-purple-600 uppercase tracking-[0.2em]'>Analytics & Tax</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tight'>
            Performance <span className='bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent'>Reports</span>
          </h1>
        </div>

        {/* Global Controls: Date Range & Export */}
        <div className='flex items-center gap-3'>
          
          {/* Date Range Dropdown */}
          <div className='relative'>
            <button 
              onClick={() => setIsDateOpen(!isDateOpen)}
              className='flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:text-purple-600 hover:border-purple-200 hover:bg-purple-50 transition-all shadow-sm'
            >
              <Calendar size={16} className="text-slate-400" /> 
              {dateRange} 
              <ChevronDown size={14} className={`transition-transform duration-200 ${isDateOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDateOpen && (
              <div className='absolute right-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2'>
                {['Last 30 Days', 'FY 2026-27', 'FY 2025-26', 'Custom Range'].map(range => (
                  <button 
                    key={range}
                    onClick={() => { setDateRange(range); setIsDateOpen(false); }}
                    className={`w-full text-left px-3 py-2.5 text-xs font-bold rounded-xl transition-colors ${dateRange === range ? 'bg-purple-50 text-purple-600' : 'text-slate-600 hover:bg-slate-50'}`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Export Dropdown */}
          <div className='relative'>
            <button 
              onClick={() => setIsExportOpen(!isExportOpen)}
              className='flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all shadow-md active:scale-95'
            >
              <Download size={16} /> Download
            </button>
            {isExportOpen && (
              <div className='absolute right-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2'>
                <button className='w-full text-left px-3 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-emerald-600 rounded-xl transition-colors'>Tax P&L Statement (PDF)</button>
                <button className='w-full text-left px-3 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-colors'>Trade Ledger (Excel)</button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Top Section: P&L Summary Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        
        {/* Gross P&L Card */}
        <div className='bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden group'>
          <div className='absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity'>
            <TrendingUp size={64} className="text-slate-900" />
          </div>
          <div>
            <p className='text-xs font-black text-slate-400 uppercase tracking-widest mb-1'>Gross P&L</p>
            <p className='text-3xl font-black text-slate-900'>+₹{reportSummary.grossPnL.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
          </div>
          <div className='mt-6 flex items-center gap-2 text-xs font-bold text-slate-500'>
            <PieChart size={14} /> Based on {reportSummary.totalTrades} completed trades
          </div>
        </div>

        {/* Charges & Taxes Card */}
        <div className='bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden group'>
           <div className='absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity'>
            <ReceiptIndianRupee size={64} className="text-rose-500" />
          </div>
          <div>
            <p className='text-xs font-black text-slate-400 uppercase tracking-widest mb-1'>Charges & Taxes</p>
            <p className='text-3xl font-black text-rose-600'>-₹{reportSummary.chargesAndTaxes.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
          </div>
          <div className='mt-6 flex items-center gap-2 text-xs font-bold text-slate-500'>
            Brokerage, STT, Exchange, GST
          </div>
        </div>

        {/* Net Realized P&L Card (The most important one) */}
        <div className={`p-6 rounded-3xl border shadow-xl relative overflow-hidden ${isNetProfit ? 'bg-gradient-to-br from-emerald-50 to-white border-emerald-200' : 'bg-gradient-to-br from-rose-50 to-white border-rose-200'}`}>
          <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 ${isNetProfit ? 'bg-emerald-400/20' : 'bg-rose-400/20'}`}></div>
          <div className='relative z-10 h-full flex flex-col justify-between'>
            <div>
              <p className='text-xs font-black text-slate-500 uppercase tracking-widest mb-1'>Net Realized P&L</p>
              <p className={`text-4xl lg:text-5xl font-black tracking-tight ${isNetProfit ? 'text-emerald-600' : 'text-rose-600'}`}>
                {isNetProfit ? '+' : '-'}₹{Math.abs(reportSummary.netPnL).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div className='mt-6 flex items-center justify-between'>
               <span className={`inline-block px-3 py-1 text-[10px] font-black rounded-lg uppercase tracking-widest ${isNetProfit ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                 {isNetProfit ? 'PROFITABLE' : 'NET LOSS'}
               </span>
               <span className='text-xs font-bold text-slate-500'>Win Rate: {reportSummary.winRate}%</span>
            </div>
          </div>
        </div>

      </div>

      {/* Tabs & Search */}
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-4'>
        <div className='flex p-1 bg-white border border-slate-200 rounded-xl shadow-sm w-full sm:w-auto overflow-x-auto'>
          {['P&L', 'Tax P&L', 'Trade Ledger'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-bold rounded-lg transition-all duration-200 whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-slate-900 text-white shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className='relative flex items-center bg-white rounded-xl px-4 py-2.5 border border-slate-200 focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/10 transition-all shadow-sm w-full sm:w-64'>
          <Search size={16} className='text-slate-400 mr-2' />
          <input 
            type="text" 
            placeholder="Search instrument..."
            className='bg-transparent border-none outline-none text-sm w-full font-bold text-slate-900 placeholder:text-slate-400'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Historical Data Table */}
      <div className='bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden'>
        <div className='overflow-x-auto custom-scrollbar'>
          <table className='w-full text-left border-collapse'>
            
            <thead>
              <tr className='bg-slate-50 border-b border-slate-200 text-[11px] uppercase tracking-widest text-slate-500 divide-x divide-slate-200'>
                <th className='py-5 px-6 font-black whitespace-nowrap'>Date / ID</th>
                <th className='py-5 px-6 font-black whitespace-nowrap'>Instrument</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Qty.</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-right'>Buy Value</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-right'>Sell Value</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-right'>Realized P&L</th>
              </tr>
            </thead>
            
            <tbody className='divide-y divide-slate-100'>
              {filteredReports.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-16 text-center">
                     <div className="text-slate-400 font-black text-lg mb-1">No Records Found</div>
                     <div className="text-slate-500 font-medium text-sm">Try adjusting your date range or search term.</div>
                  </td>
                </tr>
              ) : (
                filteredReports.map((trade, index) => (
                  <tr key={index} className='hover:bg-slate-50/80 transition-colors group divide-x divide-slate-100'>
                    
                    <td className='py-4 px-6 whitespace-nowrap'>
                      <div className='font-bold text-sm text-slate-700'>{trade.date}</div>
                      <div className='text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5'>{trade.id}</div>
                    </td>

                    <td className='py-4 px-6 font-black text-[15px] text-slate-900 whitespace-nowrap text-left'>
                      {trade.instrument}
                    </td>
                    
                    <td className='py-4 px-6 font-black text-sm text-slate-700 whitespace-nowrap text-center'>
                      {trade.qty}
                    </td>
                    
                    <td className='py-4 px-6 font-bold text-sm text-slate-500 whitespace-nowrap text-right'>
                      ₹{(trade.buyValue).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    
                    <td className='py-4 px-6 font-bold text-sm text-slate-500 whitespace-nowrap text-right'>
                      ₹{(trade.sellValue).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>

                    <td className='py-4 px-6 whitespace-nowrap text-right'>
                       <div className={`font-black text-base ${trade.isProfit ? 'text-emerald-600' : 'text-rose-600'}`}>
                         {trade.isProfit ? '+' : ''}₹{(trade.pnl).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                       </div>
                       {/* Mini badge for visual scanning */}
                       <span className={`inline-block mt-1 px-1.5 py-0.5 text-[9px] font-black rounded uppercase tracking-wider ${trade.isProfit ? 'bg-emerald-50 text-emerald-500' : 'bg-rose-50 text-rose-500'}`}>
                         {trade.isProfit ? 'PROFIT' : 'LOSS'}
                       </span>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
            
          </table>
        </div>
      </div>

    </div>
  );
};

export default Reports;