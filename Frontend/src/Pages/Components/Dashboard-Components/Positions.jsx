import React, { useState } from 'react';
import { Crosshair, Search, Filter, Plus } from 'lucide-react';
import { positionsData } from '../../../Utils/DummyData.js'; 
import OrderModal from './OrderModal.jsx'; 

const Positions = () => {
  // 1. UI State for tabs & search
  const [activeTab, setActiveTab] = useState('Open');
  const [search, setSearch] = useState('');

  // 2. State for the Advanced Filter Menu
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterPnL, setFilterPnL] = useState('ALL'); // 'ALL', 'PROFIT', 'LOSS'
  const [filterProduct, setFilterProduct] = useState('ALL'); // 'ALL', 'MIS', 'NRML'

  // 3. State for the Order Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const [actionType, setActionType] = useState(''); // 'ADD' or 'EXIT'

  // Calculate P&L metrics
  const totalM2M = positionsData.reduce((acc, pos) => acc + pos.m2m, 0);
  const isTotalProfit = totalM2M >= 0;
  
  const realizedPnL = 1250.50; // In a real app, this comes from the backend
  const unrealizedPnL = totalM2M - realizedPnL;

  // Filtering Logic 
  const filteredPositions = positionsData.filter((pos) => {
    // Filter by Tab (Open vs Closed)
    const matchesTab = 
      activeTab === 'All' ? true :
      activeTab === 'Open' ? pos.qty !== 0 : 
      activeTab === 'Closed' ? pos.qty === 0 : true; 

    // Filter by Search Bar 
    const matchesSearch = pos.instrument.toLowerCase().includes(search.toLowerCase());

    // Filter by P&L (Profit/Loss)
    const matchesPnL = 
      filterPnL === 'ALL' ? true :
      filterPnL === 'PROFIT' ? pos.m2m >= 0 :
      filterPnL === 'LOSS' ? pos.m2m < 0 : true;

    // Filter by Product (MIS/NRML)
    const matchesProduct = 
      filterProduct === 'ALL' ? true :
      filterProduct === pos.product;

    return matchesTab && matchesSearch && matchesPnL && matchesProduct;
  });

  // Handler to open the modal with the correct data
  const handleOpenModal = (stock, action) => {
    setSelectedStock(stock);
    setActionType(action);
    setIsModalOpen(true);
  };

  return (
    <div className='max-w-7xl mx-auto pb-10 relative'>
      
      {/* Page Header */}
      <div className='mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4'>
        <div>
          <div className='flex items-center gap-2 mb-2.5 animate-in fade-in slide-in-from-left-2 duration-500'>
            <span className='relative flex h-2.5 w-2.5'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500'></span>
            </span>
            <span className='text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]'>Live Markets</span>
          </div>
          
          <h1 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tight'>
            Active <span className='bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>Positions</span>
          </h1>
          <p className='text-slate-500 font-bold mt-2 text-sm'>
            Tracking {positionsData.length} open contracts and intraday trades.
          </p>
        </div>
      </div>

      {/* M2M Summary Card */}
      <div className='bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 mb-8 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8'>
        <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 ${isTotalProfit ? 'bg-emerald-500/10' : 'bg-rose-500/10'}`}></div>
        
        {/* Left: Total M2M */}
        <div className='relative z-10'>
          <p className='text-sm font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2'>
            <Crosshair size={16} /> Total M2M P&L
          </p>
          <p className={`text-5xl md:text-6xl font-black tracking-tight ${isTotalProfit ? 'text-emerald-600' : 'text-rose-600'}`}>
            {isTotalProfit ? '+' : ''}₹{totalM2M.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </p>
        </div>
        
        {/* Right: Breakdown & Panic Button */}
        <div className='relative z-10 flex items-center gap-8 w-full md:w-auto'>
           <div className='flex flex-col gap-3 border-l-2 border-slate-100 pl-8'>
              <div>
                <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest'>Unrealized (Live)</p>
                <p className={`text-lg font-black ${unrealizedPnL >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {unrealizedPnL >= 0 ? '+' : ''}₹{unrealizedPnL.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </p>
              </div>
              <div>
                <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest'>Realized (Booked)</p>
                <p className={`text-lg font-black ${realizedPnL >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {realizedPnL >= 0 ? '+' : ''}₹{realizedPnL.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </p>
              </div>
           </div>

           <button className='bg-slate-900 text-white px-6 py-4 rounded-2xl font-bold shadow-lg shadow-slate-900/20 hover:bg-rose-600 hover:shadow-rose-600/30 transition-all active:scale-95 whitespace-nowrap ml-4'>
             Exit All
           </button>
        </div>
      </div>

      {/* Table Controls (Tabs & Search) */}
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-4'>
        {/* Open/Closed Tabs */}
        <div className='flex p-1 bg-white border border-slate-200 rounded-xl shadow-sm'>
          {['Open', 'Closed', 'All'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 text-sm font-bold rounded-lg transition-all duration-200 ${
                activeTab === tab 
                  ? 'bg-slate-900 text-white shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className='flex items-center gap-3 w-full sm:w-auto'>
          {/* Search Bar */}
          <div className='relative flex items-center bg-white rounded-xl px-4 py-2.5 border border-slate-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/10 transition-all shadow-sm w-full sm:w-64'>
            <Search size={16} className='text-slate-400 mr-2' />
            <input 
              type="text" 
              placeholder="Search positions..."
              className='bg-transparent border-none outline-none text-sm w-full font-bold text-slate-900 placeholder:text-slate-400'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filter Button & Dropdown Menu */}
          <div className='relative'>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`p-2.5 border rounded-xl transition-colors shadow-sm flex items-center gap-2 ${isFilterOpen ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <Filter size={18} />
              {/* Show a tiny notification dot if a filter is active */}
              {(filterPnL !== 'ALL' || filterProduct !== 'ALL') && (
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-blue-500 rounded-full"></span>
              )}
            </button>

            {/* The Dropdown Menu Component */}
            {isFilterOpen && (
              <div className='absolute right-0 top-full mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2'>
                
                <div className='flex items-center justify-between mb-4'>
                  <span className='font-black text-sm text-slate-900'>Filters</span>
                  <button 
                    onClick={() => { setFilterPnL('ALL'); setFilterProduct('ALL'); }}
                    className='text-[10px] font-bold text-slate-400 hover:text-blue-600 uppercase tracking-widest transition-colors'
                  >
                    Clear All
                  </button>
                </div>

                {/* Filter Category: Profit & Loss */}
                <div className='mb-4'>
                  <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2'>Profit / Loss</p>
                  <div className='flex gap-2'>
                    {['ALL', 'PROFIT', 'LOSS'].map(type => (
                      <button 
                        key={type}
                        onClick={() => setFilterPnL(type)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${filterPnL === type ? (type === 'PROFIT' ? 'bg-emerald-100 text-emerald-700' : type === 'LOSS' ? 'bg-rose-100 text-rose-700' : 'bg-slate-900 text-white') : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filter Category: Product Type */}
                <div>
                  <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2'>Product Type</p>
                  <div className='flex gap-2'>
                    {['ALL', 'MIS', 'NRML'].map(type => (
                      <button 
                        key={type}
                        onClick={() => setFilterProduct(type)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${filterProduct === type ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>

      {/* The Positions Table */}
      <div className='bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden'>
        <div className='overflow-x-auto custom-scrollbar'>
          <table className='w-full text-left border-collapse'>
            
            <thead>
              <tr className='bg-slate-50 border-b border-slate-200 text-[11px] uppercase tracking-widest text-slate-500 divide-x divide-slate-200'>
                <th className='py-5 px-6 font-black whitespace-nowrap text-left'>Instrument</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Product</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Quantity</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Avg. Price</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>LTP</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-right'>M2M (P&L)</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Actions</th>
              </tr>
            </thead>
            
            <tbody className='divide-y divide-slate-100'>
              {filteredPositions.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-12 text-center text-slate-500 font-bold">
                    No positions found matching your filters.
                  </td>
                </tr>
              ) : (
                filteredPositions.map((pos, index) => (
                  <tr key={index} className='hover:bg-slate-50/80 transition-colors group divide-x divide-slate-100'>
                    
                    <td className='py-4 px-6 font-black text-[15px] text-slate-900 whitespace-nowrap text-left'>
                      {pos.instrument}
                    </td>
                    
                    <td className='py-4 px-6 text-center'>
                      <span className={`inline-block px-2.5 py-1 text-[10px] font-black rounded-lg uppercase tracking-widest ${
                        pos.product === 'MIS' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {pos.product}
                      </span>
                    </td>

                    <td className={`py-4 px-6 font-black text-sm text-center whitespace-nowrap ${pos.qty < 0 ? 'text-rose-600' : 'text-slate-700'}`}>
                      {pos.qty}
                    </td>
                    
                    <td className='py-4 px-6 font-bold text-sm text-slate-700 whitespace-nowrap text-center'>
                      {(pos.avgPrice).toFixed(2)}
                    </td>
                    <td className='py-4 px-6 font-black text-sm text-slate-900 whitespace-nowrap text-center'>
                      {(pos.ltp).toFixed(2)}
                    </td>
                    
                    <td className={`py-4 px-6 font-black text-base whitespace-nowrap text-right ${pos.isProfit ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {pos.isProfit ? '+' : ''}{(pos.m2m).toFixed(2)}
                    </td>
                    
                    {/* Action Buttons wired to the Modal */}
                    <td className='py-4 px-6 whitespace-nowrap text-center'>
                      <div className='flex items-center justify-center gap-2'>
                        {/* Only show Add/Exit if it's an Open position */}
                        {pos.qty !== 0 ? (
                          <>
                            <button 
                              onClick={() => handleOpenModal(pos, 'ADD')}
                              className='bg-white border-2 border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-400 p-2 rounded-xl transition-all shadow-sm active:scale-95' 
                              title="Add to Position"
                            >
                              <Plus size={16} strokeWidth={3} />
                            </button>
                            <button 
                              onClick={() => handleOpenModal(pos, 'EXIT')}
                              className='bg-white border-2 border-slate-200 text-slate-600 hover:text-white hover:bg-slate-900 hover:border-slate-900 px-4 py-2 rounded-xl text-xs font-black transition-all shadow-sm active:scale-95'
                            >
                              EXIT
                            </button>
                          </>
                        ) : (
                          <span className='text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg'>CLOSED</span>
                        )}
                      </div>
                    </td>

                  </tr>
                ))
              )}
            </tbody>
            
          </table>
        </div>
      </div>

      {/* Render the Order Modal at the bottom */}
      {selectedStock && (
        <OrderModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          stock={selectedStock} 
          actionType={actionType} 
        />
      )}

    </div>
  );
};

export default Positions;