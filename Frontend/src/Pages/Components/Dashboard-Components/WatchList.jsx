import React, { useState } from 'react';
import { Search, SlidersHorizontal, Trash2 } from 'lucide-react';
import TradeModal from './TradeModal.jsx'; 

const WatchList = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState('List 1');

  // Trade Modal State
  const [tradeModalConfig, setTradeModalConfig] = useState({
    isOpen: false,
    instrument: '',
    action: 'BUY', // Default
    ltp: 0
  });

  // Helper function to open the Trade Modal
  const openTradeModal = (instrument, action, ltpString) => {
    // Convert string price like "2,932.40" to a clean number: 2932.40
    const ltpNumber = parseFloat(ltpString.replace(/,/g, ''));
    setTradeModalConfig({ isOpen: true, instrument, action, ltp: ltpNumber });
  };

  // Stock List State
  const [stocks, setStocks] = useState([
    { symbol: 'RELIANCE', price: '2,932.40', change: '34.50', percent: '+1.20%', isUp: true },
    { symbol: 'HDFCBANK', price: '1,440.15', change: '11.20', percent: '-0.80%', isUp: false },
    { symbol: 'TCS', price: '4,105.00', change: '84.10', percent: '+2.10%', isUp: true },
    { symbol: 'INFY', price: '1,620.80', change: '18.40', percent: '-1.10%', isUp: false },
    { symbol: 'ICICIBANK', price: '1,085.30', change: '5.20', percent: '+0.50%', isUp: true },
    { symbol: 'SBIN', price: '750.25', change: '13.50', percent: '+1.80%', isUp: true },
    { symbol: 'ITC', price: '425.60', change: '1.25', percent: '-0.30%', isUp: false },
    { symbol: 'L&T', price: '3,450.90', change: '45.00', percent: '+1.32%', isUp: true },
  ]);

  // Functional delete handler
  const removeStock = (symbolToRemove) => {
    setStocks(stocks.filter(stock => stock.symbol !== symbolToRemove));
  };

  // Filter stocks based on search input
  const filteredStocks = stocks.filter(stock => 
    stock.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    // Reduced left margin to lg:ml-4 to sit closer to the edge, keeping the floating card look
    <div className='w-full lg:w-[400px] bg-white lg:border border-slate-200 lg:rounded-3xl flex flex-col shrink-0 lg:shadow-xl shadow-slate-200/40 lg:ml-4 lg:mt-6 h-[calc(100vh-80px)] lg:h-[calc(100vh-120px)] lg:sticky lg:top-[104px] overflow-hidden'>
      
      {/* Premium Segmented Tabs */}
      <div className='px-5 pt-5 pb-3 bg-slate-50/50'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-lg font-black text-slate-900'>Watchlist</h2>
          <button className='p-1.5 hover:bg-slate-200 rounded-lg text-slate-500 transition-colors'>
            <SlidersHorizontal size={18} />
          </button>
        </div>
        
        <div className='flex p-1 bg-slate-200/60 rounded-xl'>
          {['List 1', 'List 2', 'List 3'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 ${
                activeTab === tab 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className='px-5 pb-4 pt-2 border-b border-slate-100 bg-slate-50/50'>
        <div className='relative flex items-center bg-white rounded-xl px-4 py-3 border border-slate-200 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/10 transition-all shadow-sm'>
          <Search size={18} className='text-slate-400 mr-3' />
          <input 
            type="text" 
            placeholder="Search instruments..."
            className='bg-transparent border-none outline-none text-sm w-full font-bold text-slate-900 placeholder:text-slate-400'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <span className='text-[10px] bg-slate-100 px-2 py-1 rounded border border-slate-200 text-slate-400 font-bold ml-2 shrink-0'>
            {filteredStocks.length}/50
          </span>
        </div>
      </div>

      {/* Stock List header */}
      <div className='flex items-center justify-between px-6 py-2 border-b border-slate-100 bg-white text-[10px] font-black text-slate-400 uppercase tracking-widest'>
        <span>Instrument</span>
        <span>LTP / % Chg</span>
      </div>

      {/* Stock List Body */}
      <div className='flex-1 overflow-y-auto custom-scrollbar'>
        {filteredStocks.length === 0 ? (
          <div className='p-8 text-center text-slate-400 font-medium text-sm'>
            No instruments found.
          </div>
        ) : (
          filteredStocks.map((stock, idx) => (
            <div key={idx} className='group flex items-center justify-between px-6 py-4 border-b border-slate-50 hover:bg-slate-50/80 cursor-pointer transition-colors relative'>
              
              {/* Symbol */}
              <div>
                <p className='text-[15px] font-bold text-slate-900 group-hover:text-emerald-700 transition-colors'>
                  {stock.symbol}
                </p>
                <p className='text-[10px] text-slate-400 font-bold uppercase mt-0.5 tracking-wider flex items-center gap-2'>
                  BSE <span className={stock.isUp ? 'text-emerald-500/70' : 'text-rose-500/70'}>Vol: 1.2M</span>
                </p>
              </div>

              {/* Price & Change */}
              <div className='text-right flex items-center gap-4'>
                
                {/* Actions (Buy, Sell, Delete) */}
                <div className='hidden group-hover:flex items-center gap-1.5 mr-2 animate-in fade-in slide-in-from-right-2 duration-200 absolute right-28 bg-white/95 backdrop-blur-md p-1.5 rounded-xl shadow-sm border border-slate-100 z-10'>
                  
                  {/* BUY BUTTON */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents row click
                      openTradeModal(stock.symbol, 'BUY', stock.price);
                    }}
                    className='px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 shadow-sm transition-colors active:scale-95'
                  >
                    B
                  </button>

                  {/* SELL BUTTON */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents row click
                      openTradeModal(stock.symbol, 'SELL', stock.price);
                    }}
                    className='px-4 py-1.5 bg-rose-600 text-white text-xs font-bold rounded-lg hover:bg-rose-700 shadow-sm transition-colors active:scale-95'
                  >
                    S
                  </button>

                  {/* DELETE BUTTON */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      removeStock(stock.symbol);
                    }} 
                    className='p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors ml-1'
                    title='Remove from watchlist'
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                {/* LTP Pricing Display */}
                <div className='flex flex-col items-end group-hover:opacity-10 transition-opacity duration-200'>
                  <p className={`text-[15px] font-black ${stock.isUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {stock.price}
                  </p>
                  <p className='text-[11px] font-bold text-slate-500 mt-0.5 flex items-center gap-1'>
                    {stock.change} 
                    <span className={`flex items-center ${stock.isUp ? 'text-emerald-500' : 'text-rose-500'}`}>
                      ({stock.percent})
                    </span>
                  </p>
                </div>
              </div>

            </div>
          ))
        )}
      </div>

      {/* The Trade Execution Modal */}
      <TradeModal 
        isOpen={tradeModalConfig.isOpen}
        onClose={() => setTradeModalConfig({ ...tradeModalConfig, isOpen: false })}
        instrument={tradeModalConfig.instrument}
        initialAction={tradeModalConfig.action}
        ltp={tradeModalConfig.ltp}
      />
      
    </div>
  );
}

export default WatchList;