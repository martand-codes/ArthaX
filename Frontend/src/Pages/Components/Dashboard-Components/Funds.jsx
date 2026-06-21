import React, { useState } from 'react';
import { 
  Wallet, ArrowDownToLine, ArrowUpFromLine, History, Search, 
  CheckCircle2, XCircle, AlertCircle, Building2, ShieldCheck, Zap 
} from 'lucide-react';
import { fundsSummary, transactionsData } from '../../../Utils/DummyData.js'; 
import AddFundsModal from './AddFundsModal.jsx'; 
import WithdrawModal from './WithdrawModal.jsx'; 

const Funds = () => {
  // Core UI State
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('ALL'); 

  // Modal State
  const [isAddFundsOpen, setIsAddFundsOpen] = useState(false);
  const [initialQuickAmount, setInitialQuickAmount] = useState('');
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  // Helper function to open modal with pre-filled amount
  const handleOpenAddFunds = (amount = '') => {
    setInitialQuickAmount(amount);
    setIsAddFundsOpen(true);
  };

  // Margin Utilization Percentage
  const utilizationPct = (fundsSummary.usedMargin / fundsSummary.totalBalance) * 100;

  // Filter transactions
  const filteredTransactions = transactionsData.filter(txn => {
    const matchesFilter = filter === 'ALL' ? true : txn.type === filter;
    const matchesSearch = txn.id.toLowerCase().includes(search.toLowerCase()) || txn.method.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const renderStatusBadge = (status) => {
    switch(status) {
      case 'SUCCESS': return <span className='flex items-center justify-center gap-1 text-[10px] font-black bg-emerald-50 text-emerald-600 border border-emerald-200 px-2.5 py-1 rounded-md uppercase tracking-wider'><CheckCircle2 size={12} /> SUCCESS</span>;
      case 'FAILED': return <span className='flex items-center justify-center gap-1 text-[10px] font-black bg-rose-50 text-rose-600 border border-rose-200 px-2.5 py-1 rounded-md uppercase tracking-wider'><XCircle size={12} /> FAILED</span>;
      case 'PENDING': return <span className='flex items-center justify-center gap-1 text-[10px] font-black bg-orange-50 text-orange-600 border border-orange-200 px-2.5 py-1 rounded-md uppercase tracking-wider'><AlertCircle size={12} /> PENDING</span>;
      default: return status;
    }
  };

  return (
    <div className='max-w-7xl mx-auto pb-10'>
      
      {/* Page Header */}
      <div className='mb-8'>
        <div className='flex items-center gap-2 mb-2.5 animate-in fade-in slide-in-from-left-2 duration-500'>
          <Wallet size={14} className="text-emerald-500" />
          <span className='text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]'>Secure Wallet</span>
        </div>
        <h1 className='text-4xl md:text-5xl font-black text-slate-900 tracking-tight'>
          Account <span className='bg-gradient-to-r from-emerald-600 to-teal-400 bg-clip-text text-transparent'>Funds</span>
        </h1>
      </div>

      {/* Top Section: Margins & Actions */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10'>
        
        {/* Main Margin Card - Premium Card Look */}
        <div className='lg:col-span-2 bg-gradient-to-br from-white to-emerald-50/30 p-8 rounded-[2rem] border border-emerald-100 shadow-xl shadow-emerald-900/5 relative overflow-hidden'>
          {/* Glassmorphic Background Elements */}
          <div className='absolute -top-24 -right-24 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 left-0 w-64 h-64 bg-teal-400/5 rounded-full blur-3xl'></div>
          
          <div className='relative z-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              
              {/* Available Margin */}
              <div>
                <p className='text-xs font-black text-emerald-600/70 uppercase tracking-widest mb-2 flex items-center gap-2'>
                  <ShieldCheck size={16} /> Available Margin
                </p>
                <p className='text-5xl md:text-6xl font-black text-slate-900 tracking-tight'>
                  ₹{fundsSummary.availableMargin.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                </p>
                <p className='text-sm font-bold text-emerald-600 mt-2 bg-emerald-100 inline-block px-3 py-1 rounded-lg'>Ready for trading</p>
              </div>

              {/* Detailed Breakdown */}
              <div className='flex flex-col justify-center space-y-5 border-l-2 border-emerald-100/50 pl-6 md:pl-8'>
                <div className='flex justify-between items-end'>
                  <div>
                    <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5'>Used Margin</p>
                    <p className='text-xl font-black text-slate-700'>₹{fundsSummary.usedMargin.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                  </div>
                </div>
                <div className='flex justify-between items-end'>
                  <div>
                    <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5'>Uncleared (T+1 Settlement)</p>
                    <p className='text-xl font-black text-orange-500'>₹{fundsSummary.unclearedFunds.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                  </div>
                </div>
                <div className='pt-3 border-t border-emerald-100/50'>
                  <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5'>Total Account Balance</p>
                  <p className='text-xl font-black text-slate-900'>₹{fundsSummary.totalBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</p>
                </div>
              </div>

            </div>

            {/* Glowing Utilization Progress Bar */}
            <div className='mt-8 pt-6 border-t border-emerald-100/50'>
              <div className='flex justify-between text-xs font-bold text-slate-500 mb-2'>
                <span className='uppercase tracking-widest text-[10px] font-black'>Margin Utilization</span>
                <span className='text-emerald-600'>{utilizationPct.toFixed(1)}% Used</span>
              </div>
              <div className='w-full bg-slate-200/50 rounded-full h-3 overflow-hidden flex shadow-inner'>
                <div 
                  className='bg-gradient-to-r from-emerald-400 to-teal-500 h-3 rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(16,185,129,0.4)] relative' 
                  style={{ width: `${utilizationPct}%` }}
                >
                  <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/30 rounded-r-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Card */}
        <div className='bg-white p-6 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/40 flex flex-col justify-between gap-4'>
          <div className='space-y-3'>
            <button 
              onClick={() => handleOpenAddFunds('')} 
              className='w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white rounded-2xl font-black text-lg transition-all shadow-lg shadow-emerald-600/30 active:scale-95 border border-emerald-500'
            >
              <ArrowDownToLine size={20} /> Add Funds
            </button>
            
            {/* Quick Add Chips */}
            <div className='flex gap-2 justify-center'>
              <button 
                onClick={() => handleOpenAddFunds('10000')}
                className='flex items-center gap-1 text-[11px] font-black bg-slate-50 hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors active:scale-95'
              >
                <Zap size={12} /> +₹10K
              </button>
              <button 
                onClick={() => handleOpenAddFunds('50000')}
                className='flex items-center gap-1 text-[11px] font-black bg-slate-50 hover:bg-emerald-50 text-slate-500 hover:text-emerald-600 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors active:scale-95'
              >
                <Zap size={12} /> +₹50K
              </button>
            </div>
          </div>

          <div className='space-y-4'>
            <button 
              onClick={() => setIsWithdrawOpen(true)}
              className='w-full flex items-center justify-center gap-3 py-4 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 rounded-2xl font-black text-lg transition-all active:scale-95'
            >
              <ArrowUpFromLine size={20} /> Withdraw
            </button>
            
            {/* Linked Bank Info */}
            <div className='flex items-center justify-center gap-2 text-xs font-bold text-slate-400 bg-slate-50 py-2 rounded-xl border border-slate-100'>
              <Building2 size={14} /> {fundsSummary.linkedBank} ending in •••• {fundsSummary.bankEnding}
            </div>
          </div>
        </div>

      </div>

      {/* Transaction History Section */}
      <div className='mb-6 flex items-center gap-2 mt-4'>
        <History size={18} className="text-slate-400" />
        <h2 className='text-xl font-black text-slate-900'>Recent Transactions</h2>
      </div>

      {/* Table Controls */}
      <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-4'>
        <div className='flex p-1 bg-white border border-slate-200 rounded-xl shadow-sm overflow-x-auto w-full sm:w-auto'>
          {['ALL', 'DEPOSIT', 'WITHDRAWAL', 'CHARGE'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 md:px-6 py-2 text-xs md:text-sm font-bold rounded-lg transition-all duration-200 whitespace-nowrap ${
                filter === tab 
                  ? 'bg-slate-900 text-white shadow-sm' 
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className='relative flex items-center bg-white rounded-xl px-4 py-2.5 border border-slate-200 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/10 transition-all shadow-sm w-full sm:w-72'>
          <Search size={16} className='text-slate-400 mr-2' />
          <input 
            type="text" 
            placeholder="Search ID or Method..."
            className='bg-transparent border-none outline-none text-sm w-full font-bold text-slate-900 placeholder:text-slate-400'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Transactions Table */}
      <div className='bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/60 overflow-hidden'>
        <div className='overflow-x-auto custom-scrollbar'>
          <table className='w-full text-left border-collapse'>
            <thead>
              <tr className='bg-slate-50 border-b border-slate-200 text-[11px] uppercase tracking-widest text-slate-500 divide-x divide-slate-200'>
                <th className='py-5 px-6 font-black whitespace-nowrap'>Transaction ID</th>
                <th className='py-5 px-6 font-black whitespace-nowrap'>Date & Time</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Type</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Method</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-right'>Amount</th>
                <th className='py-5 px-6 font-black whitespace-nowrap text-center'>Status</th>
              </tr>
            </thead>
            
            <tbody className='divide-y divide-slate-100'>
              {filteredTransactions.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-16 text-center">
                     <div className="text-slate-400 font-black text-lg mb-1">No Transactions Found</div>
                     <div className="text-slate-500 font-medium text-sm">You haven't made any transfers matching this filter.</div>
                  </td>
                </tr>
              ) : (
                filteredTransactions.map((txn, index) => (
                  <tr key={index} className='hover:bg-emerald-50/40 transition-colors group divide-x divide-slate-100'>
                    
                    <td className='py-4 px-6 font-black text-sm text-slate-900 whitespace-nowrap'>
                      {txn.id}
                    </td>
                    
                    <td className='py-4 px-6 whitespace-nowrap'>
                      <div className='font-bold text-sm text-slate-700'>{txn.date}</div>
                      <div className='text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5'>{txn.time}</div>
                    </td>
                    
                    <td className='py-4 px-6 text-center'>
                      <span className={`inline-block px-2.5 py-1 text-[10px] font-black rounded-lg uppercase tracking-widest ${
                        txn.type === 'DEPOSIT' ? 'bg-emerald-50 text-emerald-700' : 
                        txn.type === 'WITHDRAWAL' ? 'bg-blue-50 text-blue-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {txn.type}
                      </span>
                    </td>

                    <td className='py-4 px-6 font-bold text-sm text-slate-500 whitespace-nowrap text-center'>
                      {txn.method}
                    </td>
                    
                    <td className={`py-4 px-6 font-black text-base whitespace-nowrap text-right ${
                      txn.type === 'DEPOSIT' ? 'text-emerald-600' : 'text-slate-900'
                    }`}>
                      {txn.type === 'DEPOSIT' ? '+' : '-'}₹{(txn.amount).toFixed(2)}
                    </td>

                    <td className='py-4 px-6 whitespace-nowrap text-center'>
                      {renderStatusBadge(txn.status)}
                    </td>

                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* The Deposit Modal */}
      <AddFundsModal 
        isOpen={isAddFundsOpen} 
        onClose={() => setIsAddFundsOpen(false)} 
        initialAmount={initialQuickAmount}
      />

      {/* The Withdraw Modal */}
      <WithdrawModal
        isOpen={isWithdrawOpen}
        onClose={() => setIsWithdrawOpen(false)}
        maxWithdrawable={fundsSummary.availableMargin}
        bankName={fundsSummary.linkedBank}
        bankEnding={fundsSummary.bankEnding}
      />

    </div>
  );
};

export default Funds;