import React, { useState } from 'react';
import { X, Building2, ShieldCheck, ArrowUpRight, Info, CheckCircle2 } from 'lucide-react';

const WithdrawModal = ({ isOpen, onClose, maxWithdrawable, bankName, bankEnding }) => {
  const [amount, setAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const MIN_WITHDRAWAL = 100;

  // Percentage Quick-Select Logic
  const handlePercentage = (percent) => {
    const calculatedAmount = Math.floor(maxWithdrawable * percent);
    setAmount(calculatedAmount.toString());
  };

  // Input Handler: Prevents typing more than they actually have
  const handleAmountChange = (e) => {
    const val = e.target.value;
    
    if (val === '') {
      setAmount('');
      return;
    }

    const numValue = Number(val);
    if (numValue <= maxWithdrawable) {
      setAmount(val);
    } else {
      // If they type too much, auto-correct to the maximum they have
      setAmount(maxWithdrawable.toString());
    }
  };

  const handleWithdraw = () => {
    setIsProcessing(true);
    setTimeout(() => {
      alert(`Withdrawal of ₹${amount} initiated to ${bankName}!`);
      setIsProcessing(false);
      setAmount('');
      onClose();
    }, 1500); 
  };

  const isValidAmount = Number(amount) >= MIN_WITHDRAWAL && Number(amount) <= maxWithdrawable;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 animate-in fade-in duration-300'>
      
      <div className='bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl shadow-blue-900/20 overflow-hidden animate-in zoom-in-95 duration-300 border border-slate-100 relative'>
        
        {/* Header - Secure Blue/Indigo Theme */}
        <div className='px-8 py-6 relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-500 to-blue-800 text-white'>
          <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3'></div>
          <div className='absolute bottom-0 left-10 w-24 h-24 bg-indigo-300/20 rounded-full blur-xl translate-y-1/2'></div>
          
          <div className='relative z-10 flex justify-between items-start'>
            <div>
              <div className='flex items-center gap-2 mb-1'>
                <ShieldCheck size={16} className='text-blue-200' />
                <span className='text-[10px] font-black text-blue-100 uppercase tracking-[0.2em]'>Standard Payout</span>
              </div>
              <h3 className='font-black text-3xl tracking-tight'>Withdraw</h3>
            </div>
            <button 
              onClick={onClose} 
              disabled={isProcessing} 
              className='p-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-colors active:scale-95 disabled:opacity-50'
            >
              <X size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div className='p-8 space-y-8'>
          
          {/* Amount Input */}
          <div className='bg-slate-50/50 rounded-[2rem] p-6 border border-slate-100 flex flex-col items-center justify-center relative transition-all focus-within:bg-white focus-within:border-blue-200 focus-within:shadow-[0_0_20px_rgba(59,130,246,0.05)]'>
             <div className='flex items-center justify-between w-full mb-2'>
               <span className='text-[10px] font-black text-slate-400 uppercase tracking-widest'>Amount to Withdraw</span>
               <span className='text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md'>
                 Max: ₹{maxWithdrawable.toLocaleString('en-IN')}
               </span>
             </div>
             
             <div className='flex items-center justify-center'>
               <span className={`text-3xl font-black mr-1 transition-colors ${amount ? 'text-slate-900' : 'text-slate-300'}`}>₹</span>
               <input 
                 type="number" 
                 value={amount}
                 onChange={handleAmountChange}
                 placeholder="0"
                 className='bg-transparent text-5xl md:text-6xl font-black text-slate-900 outline-none w-full max-w-[300px] text-center placeholder:text-slate-200 p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
               />
             </div>
          </div>

          {/* Quick Percentages instead of fixed amounts */}
          <div className='grid grid-cols-4 gap-3'>
            <button onClick={() => handlePercentage(0.25)} className='py-3 bg-white hover:bg-blue-50 text-slate-600 hover:text-blue-700 text-xs font-black rounded-xl border border-slate-200 hover:border-blue-200 transition-all active:scale-95 shadow-sm'>25%</button>
            <button onClick={() => handlePercentage(0.50)} className='py-3 bg-white hover:bg-blue-50 text-slate-600 hover:text-blue-700 text-xs font-black rounded-xl border border-slate-200 hover:border-blue-200 transition-all active:scale-95 shadow-sm'>50%</button>
            <button onClick={() => handlePercentage(0.75)} className='py-3 bg-white hover:bg-blue-50 text-slate-600 hover:text-blue-700 text-xs font-black rounded-xl border border-slate-200 hover:border-blue-200 transition-all active:scale-95 shadow-sm'>75%</button>
            <button onClick={() => handlePercentage(1)} className='py-3 bg-blue-50 text-blue-700 text-xs font-black rounded-xl border border-blue-200 hover:bg-blue-100 transition-all active:scale-95 shadow-sm'>MAX</button>
          </div>

          {/* Destination Bank Info */}
          <div className='pt-2'>
            <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-3'>Transferring To</p>
            <div className='flex items-center justify-between p-5 rounded-2xl border-2 border-slate-100 bg-white'>
              <div className='flex items-center gap-4'>
                <div className='p-3 rounded-2xl bg-slate-100 text-slate-500'>
                  <Building2 size={20} />
                </div>
                <div>
                  <p className='font-black text-base text-slate-900'>{bankName}</p>
                  <p className='text-xs font-bold text-slate-500 mt-0.5'>Account ending in •••• {bankEnding}</p>
                </div>
              </div>
              <CheckCircle2 size={20} className="text-emerald-500" />
            </div>
            
            {/* Disclaimer */}
            <div className='mt-4 flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100'>
               <Info size={14} className="text-slate-400 mt-0.5 flex-shrink-0" />
               <p className='text-[10px] font-bold text-slate-500 leading-relaxed'>
                 Withdrawal requests placed before 5:00 PM will be processed to your bank account by 11:00 PM the same day.
               </p>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div className='p-8 pt-0 flex flex-col items-center'>
          <button 
            onClick={handleWithdraw}
            disabled={!isValidAmount || isProcessing}
            className={`w-full py-5 rounded-[1.25rem] font-black text-xl transition-all flex items-center justify-center gap-2 ${
              isProcessing 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : isValidAmount 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-[0_8px_30px_rgb(59,130,246,0.3)] hover:shadow-[0_8px_30px_rgb(59,130,246,0.4)] hover:scale-[1.02] active:scale-95' 
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            {isProcessing ? 'Processing...' : `Withdraw ₹${Number(amount || 0).toLocaleString('en-IN')}`}
            {!isProcessing && isValidAmount && <ArrowUpRight size={20} />}
          </button>
          
          <div className='h-4 mt-3'>
            {!isValidAmount && amount !== '' && Number(amount) < MIN_WITHDRAWAL && (
              <p className='text-center text-xs font-bold text-rose-500 animate-in fade-in'>Minimum withdrawal is ₹100</p>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default WithdrawModal;