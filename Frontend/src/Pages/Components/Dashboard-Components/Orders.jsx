import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Download, 
  ChevronDown, 
  FileText, 
  FileSpreadsheet 
} from 'lucide-react';
import { ordersData } from '../../../Utils/DummyData.js'; // Adjust path as needed

const Orders = () => {
  // 1. Core UI State
  const [activeTab, setActiveTab] = useState('All');
  const [search, setSearch] = useState('');

  // 2. Filter Dropdown State
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterType, setFilterType] = useState('ALL'); // 'ALL', 'BUY', 'SELL'
  const [filterProduct, setFilterProduct] = useState('ALL'); // 'ALL', 'MIS', 'NRML'

  // 3. Export Dropdown State
  const [isExportOpen, setIsExportOpen] = useState(false);

  // Filtering Logic
  const filteredOrders = ordersData.filter((order) => {
    // Tab Filter
    const matchesTab = 
      activeTab === 'All' ? true :
      activeTab === 'Open' ? order.status === 'OPEN' : 
      activeTab === 'Executed' ? order.status === 'COMPLETED' : true; 

    // Search Filter
    const matchesSearch = order.instrument.toLowerCase().includes(search.toLowerCase());

    // Dropdown Filters
    const matchesType = filterType === 'ALL' ? true : order.type === filterType;
    const matchesProduct = filterProduct === 'ALL' ? true : order.product === filterProduct;

    return matchesTab && matchesSearch && matchesType && matchesProduct;
  });

  // Helper function to render the correct status badge
  const renderStatusBadge = (status) => {
    switch(status) {
      case 'COMPLETED':
        return <span className='flex items-center gap-1.5 text-[10px] font-black bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-md tracking-widest uppercase'><CheckCircle2 size={12} /> COMPLETED</span>;
      case 'OPEN':
        return <span className='flex items-center gap-1.5 text-[10px] font-black bg-orange-100 text-orange-700 px-2.5 py-1 rounded-md tracking-widest uppercase'><Clock size={12} /> OPEN</span>;
      case 'CANCELLED':
        return <span className='flex items-center gap-1.5 text-[10px] font-black bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md tracking-widest uppercase'><XCircle size={12} /> CANCELLED</span>;
      case 'REJECTED':
        return <span className='flex items-center gap-1.5 text-[10px] font-black bg-rose-100 text-rose-700 px-2.5 py-1 rounded-md tracking-widest uppercase'><AlertCircle size={12} /> REJECTED</span>;
      default:
        return status;
    }
  };

  return (
    <div className='max-w-7xl mx-auto pb-10'>
      
      {/* Page Header - Indigo Theme */}
      <div className='mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4'>
        <div>
          <div className='flex items-center gap-2 mb-2.5 animate-in fade-in slide-in-from-left-2 duration-500'>
            <span className='relative flex h-2.5 w-2.5'>
              <span className='relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500'></span>
            </span>
            <span className='text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]'>Execution Log</span>
          </div>
          
          <h1 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tight'>
            Order <span className='bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent'>Book</span>
          </h1>
          <p className='text-slate-500 font-bold mt-2 text-sm'>
            Tracking your daily trade requests and executions.
          </p>
        </div>

        {/* Pro Feature: Export Dropdown */}
        <div className='relative hidden md:block'>
          <button 
            onClick={() => setIsExportOpen(!isExportOpen)}
            className='flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-black text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all shadow-sm active:scale-95'
          >
            <Download size={16} /> Export <ChevronDown size={14} className={`transition-transform duration-200 ${isExportOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Export Dropdown Menu */}
          {isExportOpen && (
            <div className='absolute right-0 top-full mt-2 w-48 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50 animate-in fade-in slide-in-from-top-2'>
              <button 
                onClick={() => { alert("Downloading order_history.csv..."); setIsExportOpen(false); }}
                className='w-full flex items-center gap-3 px-3 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-xl transition-colors'
              >
                <FileText size={16} /> as CSV (.csv)
              </button>
              <button 
                onClick={() => { alert("Downloading order_history.xlsx..."); setIsExportOpen(false); }}
                className='w-full flex items-center gap-3 px-3 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-50 hover:text-emerald-600 rounded-xl transition-colors'
              >
                <FileSpreadsheet size={16} /> as Excel (.xlsx)
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Table Controls (Tabs & Search) */}
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 mt-4'>
        
        {/* Tabs */}
        <div className='flex p-1 bg-white border border-slate-200 rounded-xl shadow-sm'>
          {['All', 'Open', 'Executed'].map((tab) => (
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
              {tab === 'Open' && ordersData.some(o => o.status === 'OPEN') && (
                <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full ml-2 mb-0.5"></span>
              )}
            </button>
          ))}
        </div>

        <div className='flex items-center gap-3 w-full sm:w-auto'>
          {/* Search Bar */}
          <div className='relative flex items-center bg-white rounded-xl px-4 py-2.5 border border-slate-200 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/10 transition-all shadow-sm w-full sm:w-64'>
            <Search size={16} className='text-slate-400 mr-2' />
            <input 
              type="text" 
              placeholder="Search orders..."
              className='bg-transparent border-none outline-none text-sm w-full font-bold text-slate-900 placeholder:text-slate-400'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Fully Functional Filter Dropdown */}
          <div className='relative'>
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`p-2.5 border rounded-xl transition-colors shadow-sm flex items-center gap-2 ${isFilterOpen ? 'bg-indigo-50 border-indigo-200 text-indigo-600' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <Filter size={18} />
              {(filterType !== 'ALL' || filterProduct !== 'ALL') && (
                <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full"></span>
              )}
            </button>

            {isFilterOpen && (
              <div className='absolute right-0 top-full mt-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2'>
                
                <div className='flex items-center justify-between mb-4'>
                  <span className='font-black text-sm text-slate-900'>Filters</span>
                  <button 
                    onClick={() => { setFilterType('ALL'); setFilterProduct('ALL'); }}
                    className='text-[10px] font-bold text-slate-400 hover:text-indigo-600 uppercase tracking-widest transition-colors'
                  >
                    Clear All
                  </button>
                </div>

                {/* Filter Category: Order Type */}
                <div className='mb-4'>
                  <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2'>Order Type</p>
                  <div className='flex gap-2'>
                    {['ALL', 'BUY', 'SELL'].map(type => (
                      <button 
                        key={type}
                        onClick={() => setFilterType(type)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${filterType === type ? (type === 'BUY' ? 'bg-blue-100 text-blue-700' : type === 'SELL' ? 'bg-rose-100 text-rose-700' : 'bg-slate-900 text-white') : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Filter Category: Product */}
                <div>
                  <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2'>Product Type</p>
                  <div className='flex gap-2'>
                    {['ALL', 'MIS', 'NRML'].map(type => (
                      <button 
                        key={type}
                        onClick={() => setFilterProduct(type)}
                        className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-all ${filterProduct === type ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
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

      {/* The Orders Table */}
      <div className='bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden'>
        <div className='overflow-x-auto custom-scrollbar'>
          <table className='w-full text-left border-collapse'>
            
            <thead>
              <tr className='bg-slate-50 border-b border-slate-200 text-[11px] uppercase tracking-widest text-slate-500 divide-x divide-slate-200'>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Time</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-left'>Instrument</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Type</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Qty.</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Req. Price</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Exec. Price</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Status</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Actions</th>
              </tr>
            </thead>
            
            <tbody className='divide-y divide-slate-100'>
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan="8" className="py-16 text-center">
                    <div className="text-slate-400 font-black text-lg mb-1">No Orders Found</div>
                    <div className="text-slate-500 font-medium text-sm">You haven't placed any trades that match this filter.</div>
                  </td>
                </tr>
              ) : (
                filteredOrders.map((order, index) => (
                  <tr key={index} className='hover:bg-slate-50/80 transition-colors group divide-x divide-slate-100'>
                    
                    <td className='py-4 px-6 font-bold text-sm text-slate-500 whitespace-nowrap text-center'>
                      {order.time}
                    </td>

                    <td className='py-4 px-6 whitespace-nowrap text-left'>
                      <div className='font-black text-[15px] text-slate-900'>{order.instrument}</div>
                      <div className='text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5'>{order.product}</div>
                    </td>
                    
                    <td className='py-4 px-6 text-center'>
                      <span className={`inline-block px-3 py-1 text-[11px] font-black rounded-md uppercase tracking-widest ${
                        order.type === 'BUY' ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-rose-50 text-rose-600 border border-rose-200'
                      }`}>
                        {order.type}
                      </span>
                    </td>

                    <td className='py-4 px-6 font-black text-sm text-slate-700 whitespace-nowrap text-center'>
                      {order.qty}
                    </td>
                    
                    <td className='py-4 px-6 font-bold text-sm text-slate-700 whitespace-nowrap text-center'>
                      {order.reqPrice}
                    </td>
                    
                    <td className='py-4 px-6 font-black text-sm text-slate-900 whitespace-nowrap text-center'>
                      {order.execPrice}
                    </td>

                    <td className='py-4 px-6 whitespace-nowrap text-center flex justify-center'>
                      {renderStatusBadge(order.status)}
                    </td>
                    
                    <td className='py-4 px-6 whitespace-nowrap text-center'>
                      {order.status === 'OPEN' ? (
                        <button 
                          onClick={() => alert(`Cancelling order for ${order.instrument}`)}
                          className='bg-white border-2 border-slate-200 text-rose-600 hover:text-white hover:bg-rose-600 hover:border-rose-600 px-4 py-1.5 rounded-xl text-[11px] font-black transition-all shadow-sm active:scale-95'
                        >
                          CANCEL
                        </button>
                      ) : (
                        <span className='text-xs font-bold text-slate-300'>--</span>
                      )}
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

export default Orders;