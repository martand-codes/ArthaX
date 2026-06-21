import React, { useState } from 'react';
import { X, Smartphone, Building, ShieldCheck, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

const AddFundsModal = ({ isOpen, onClose, initialAmount = '' }) => {
  const [amount, setAmount] = useState(initialAmount);
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [isProcessing, setIsProcessing] = useState(false);

  // --- NEW: Strict Limits ---
  const MAX_DEPOSIT = 10000000; // 1 Crore limit per transaction
  const MIN_DEPOSIT = 100;

  if (!isOpen) return null;

  // Fixed Quick Add: Prevents exceeding the MAX_DEPOSIT
  const handleQuickAdd = (value) => {
    const current = Number(amount) || 0;
    const newAmount = current + value;
    
    if (newAmount > MAX_DEPOSIT) {
      setAmount(MAX_DEPOSIT.toString());
    } else {
      setAmount(newAmount.toString());
    }
  };

  // Fixed Input Handler: Stops typing if it exceeds the limit
  const handleAmountChange = (e) => {
    const val = e.target.value;
    
    // Allow clearing the input
    if (val === '') {
      setAmount('');
      return;
    }

    const numValue = Number(val);
    if (numValue <= MAX_DEPOSIT) {
      setAmount(val);
    }
  };

  const handleDeposit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      alert(`Successfully deposited ₹${amount} via ${paymentMethod}!`);
      setIsProcessing(false);
      setAmount('');
      onClose();
    }, 1500); 
  };

  const isValidAmount = Number(amount) >= MIN_DEPOSIT && Number(amount) <= MAX_DEPOSIT;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 animate-in fade-in duration-300'>
      
      <div className='bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl shadow-emerald-900/20 overflow-hidden animate-in zoom-in-95 duration-300 border border-slate-100 relative'>
        
        {/* Header */}
        <div className='px-8 py-6 relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-500 to-emerald-800 text-white'>
          <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3'></div>
          <div className='absolute bottom-0 left-10 w-24 h-24 bg-teal-300/20 rounded-full blur-xl translate-y-1/2'></div>
          
          <div className='relative z-10 flex justify-between items-start'>
            <div>
              <div className='flex items-center gap-2 mb-1'>
                <ShieldCheck size={16} className='text-emerald-200' />
                <span className='text-[10px] font-black text-emerald-100 uppercase tracking-[0.2em]'>SSL Secured</span>
              </div>
              <h3 className='font-black text-3xl tracking-tight'>Add Funds</h3>
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
          <div className='bg-slate-50/50 rounded-[2rem] p-6 border border-slate-100 flex flex-col items-center justify-center relative transition-all focus-within:bg-white focus-within:border-emerald-200 focus-within:shadow-[0_0_20px_rgba(16,185,129,0.05)]'>
             <div className='flex items-center justify-between w-full mb-2'>
               <span className='text-[10px] font-black text-slate-400 uppercase tracking-widest'>Funding Amount</span>
               {/* Show max limit helper if they get close */}
               {Number(amount) >= MAX_DEPOSIT && (
                 <span className='text-[10px] font-bold text-orange-500 animate-in fade-in'>Max limit reached</span>
               )}
             </div>
             
             <div className='flex items-center justify-center'>
               <span className={`text-3xl font-black mr-1 transition-colors ${amount ? 'text-slate-900' : 'text-slate-300'}`}>₹</span>
               <input 
                 type="number" 
                 value={amount}
                 onChange={handleAmountChange}
                 placeholder="0"
                 // Widened max-w to handle up to 1 Crore cleanly
                 className='bg-transparent text-5xl md:text-6xl font-black text-slate-900 outline-none w-full max-w-[300px] text-center placeholder:text-slate-200 p-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
               />
             </div>
          </div>

          {/* Responsive Quick Chips */}
          <div className='grid grid-cols-4 gap-3'>
            {[1000, 5000, 10000, 50000].map((val) => (
              <button 
                key={val}
                onClick={() => handleQuickAdd(val)}
                className='py-3 bg-white hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 text-xs font-black rounded-xl border border-slate-200 hover:border-emerald-200 transition-all active:scale-95 flex items-center justify-center gap-1 shadow-sm'
              >
                <Zap size={12} className={val >= 10000 ? "text-orange-500" : "text-emerald-500"} /> 
                +{(val/1000)}k
              </button>
            ))}
          </div>

          {/* Payment Method Selector */}
          <div className='space-y-3 pt-2'>
            <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1'>Select Payment Method</p>
            
            <label className={`flex items-center justify-between p-5 rounded-2xl cursor-pointer transition-all border-2 ${paymentMethod === 'UPI' ? 'border-emerald-500 bg-emerald-50/30 shadow-sm' : 'border-slate-100 hover:border-slate-200 bg-white'}`}>
              <div className='flex items-center gap-4'>
                <div className={`p-3 rounded-2xl transition-colors ${paymentMethod === 'UPI' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                  <Smartphone size={20} />
                </div>
                <div>
                  <p className='font-black text-base text-slate-900'>UPI App</p>
                  <p className='text-xs font-bold text-slate-500 mt-0.5'>GPay, PhonePe, Paytm</p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMethod === 'UPI' ? 'border-emerald-500 bg-emerald-500' : 'border-slate-300'}`}>
                {paymentMethod === 'UPI' && <CheckCircle2 size={14} className="text-white" />}
              </div>
              <input type="radio" name="payment" value="UPI" checked={paymentMethod === 'UPI'} onChange={() => setPaymentMethod('UPI')} className='hidden' />
            </label>

            <label className={`flex items-center justify-between p-5 rounded-2xl cursor-pointer transition-all border-2 ${paymentMethod === 'NetBanking' ? 'border-emerald-500 bg-emerald-50/30 shadow-sm' : 'border-slate-100 hover:border-slate-200 bg-white'}`}>
              <div className='flex items-center gap-4'>
                <div className={`p-3 rounded-2xl transition-colors ${paymentMethod === 'NetBanking' ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                  <Building size={20} />
                </div>
                <div>
                  <p className='font-black text-base text-slate-900'>Net Banking</p>
                  <p className='text-xs font-bold text-slate-500 mt-0.5'>HDFC, SBI, ICICI</p>
                </div>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMethod === 'NetBanking' ? 'border-emerald-500 bg-emerald-500' : 'border-slate-300'}`}>
                {paymentMethod === 'NetBanking' && <CheckCircle2 size={14} className="text-white" />}
              </div>
              <input type="radio" name="payment" value="NetBanking" checked={paymentMethod === 'NetBanking'} onChange={() => setPaymentMethod('NetBanking')} className='hidden' />
            </label>
          </div>

        </div>

        {/* Action Button */}
        <div className='p-8 pt-0 flex flex-col items-center'>
          <button 
            onClick={handleDeposit}
            disabled={!isValidAmount || isProcessing}
            className={`w-full py-5 rounded-[1.25rem] font-black text-xl transition-all flex items-center justify-center gap-2 ${
              isProcessing 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : isValidAmount 
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-[0_8px_30px_rgb(16,185,129,0.3)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.4)] hover:scale-[1.02] active:scale-95' 
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
          >
            {isProcessing ? 'Processing...' : `Deposit ₹${Number(amount || 0).toLocaleString('en-IN')}`}
            {!isProcessing && isValidAmount && <ArrowRight size={20} />}
          </button>
          
          {/* Validation Messages */}
          <div className='h-4 mt-3'>
            {!isValidAmount && amount !== '' && Number(amount) < MIN_DEPOSIT && (
              <p className='text-center text-xs font-bold text-rose-500 animate-in fade-in'>Minimum deposit is ₹100</p>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddFundsModal;