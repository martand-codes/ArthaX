import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom'; // NEW: Import createPortal
import { X, TrendingUp, TrendingDown, Info, Zap } from 'lucide-react';

const TradeModal = ({ 
  isOpen, 
  onClose, 
  instrument = 'RELIANCE', 
  initialAction = 'BUY', 
  ltp = 2932.40 
}) => {
  // Trade State
  const [action, setAction] = useState(initialAction); // 'BUY' or 'SELL'
  const [product, setProduct] = useState('MIS'); // 'MIS' (Intraday) or 'CNC' (Longterm)
  const [orderType, setOrderType] = useState('MARKET'); // 'MARKET' or 'LIMIT'
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(ltp);
  const [isProcessing, setIsProcessing] = useState(false);

  // Reset state when modal opens with new data
  useEffect(() => {
    if (isOpen) {
      setAction(initialAction);
      setPrice(ltp);
      setQty(1);
      setIsProcessing(false);
    }
  }, [isOpen, initialAction, ltp]);

  if (!isOpen) return null;

  // Theme configuration based on action
  const isBuy = action === 'BUY';
  const theme = {
    color: isBuy ? 'blue' : 'rose',
    bg: isBuy ? 'bg-blue-600' : 'bg-rose-600',
    bgHover: isBuy ? 'hover:bg-blue-700' : 'hover:bg-rose-700',
    lightBg: isBuy ? 'bg-blue-50' : 'bg-rose-50',
    text: isBuy ? 'text-blue-600' : 'text-rose-600',
    border: isBuy ? 'border-blue-600' : 'border-rose-600',
    shadow: isBuy ? 'shadow-blue-600/30' : 'shadow-rose-600/30',
  };

  // Dummy margin calculation (Intraday gets 5x leverage, CNC is 1x)
  const leverage = product === 'MIS' ? 0.2 : 1;
  const executionPrice = orderType === 'MARKET' ? ltp : Number(price);
  const marginRequired = (qty * executionPrice * leverage).toFixed(2);

  const handleExecute = () => {
    setIsProcessing(true);
    setTimeout(() => {
      alert(`${action} Order Placed for ${qty} ${instrument} at ${orderType === 'MARKET' ? 'Market Price' : `₹${price}`}`);
      setIsProcessing(false);
      onClose();
    }, 800);
  };

  // NEW: Wrap the entire return statement in createPortal
  return createPortal(
    // Increased z-index to 9999 to guarantee it sits above literally everything
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200'>
      
      {/* Modal Container */}
      <div className='bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-100 flex flex-col'>
        
        {/* Header - Dynamic Colors */}
        <div className={`px-6 py-5 flex justify-between items-center text-white transition-colors duration-300 ${theme.bg}`}>
          <div>
            <h3 className='font-black text-2xl tracking-tight flex items-center gap-2'>
              {action} {instrument}
            </h3>
            <p className='text-xs font-bold opacity-90 flex items-center gap-1 mt-0.5'>
              NSE <span className='mx-1'>•</span> ₹{ltp.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </p>
          </div>
          <button 
            onClick={onClose} 
            disabled={isProcessing}
            className='p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors active:scale-95 disabled:opacity-50'
          >
            <X size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Action Toggles (BUY / SELL) */}
        <div className='px-6 pt-6'>
          <div className='flex p-1 bg-slate-100 rounded-xl'>
            <button 
              onClick={() => setAction('BUY')}
              className={`flex-1 py-2 text-xs font-black rounded-lg transition-all flex items-center justify-center gap-2 ${isBuy ? 'bg-white text-blue-600 shadow-sm border border-slate-200/60' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <TrendingUp size={14} /> BUY
            </button>
            <button 
              onClick={() => setAction('SELL')}
              className={`flex-1 py-2 text-xs font-black rounded-lg transition-all flex items-center justify-center gap-2 ${!isBuy ? 'bg-white text-rose-600 shadow-sm border border-slate-200/60' : 'text-slate-500 hover:text-slate-700'}`}
            >
              <TrendingDown size={14} /> SELL
            </button>
          </div>
        </div>

        <div className='p-6 space-y-6 flex-grow'>
          
          {/* Top Row: Product & Order Type */}
          <div className='grid grid-cols-2 gap-4'>
            {/* Product Type */}
            <div>
              <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2'>Product</p>
              <div className='flex p-1 bg-slate-50 border border-slate-200 rounded-xl'>
                 <button onClick={() => setProduct('MIS')} className={`flex-1 py-1.5 text-[11px] font-black rounded-lg transition-colors ${product === 'MIS' ? theme.lightBg + ' ' + theme.text : 'text-slate-400 hover:text-slate-600'}`}>MIS</button>
                 <button onClick={() => setProduct('CNC')} className={`flex-1 py-1.5 text-[11px] font-black rounded-lg transition-colors ${product === 'CNC' ? theme.lightBg + ' ' + theme.text : 'text-slate-400 hover:text-slate-600'}`}>CNC</button>
              </div>
            </div>
            
            {/* Order Type */}
            <div>
              <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2'>Type</p>
              <div className='flex p-1 bg-slate-50 border border-slate-200 rounded-xl'>
                 <button onClick={() => setOrderType('MARKET')} className={`flex-1 py-1.5 text-[11px] font-black rounded-lg transition-colors ${orderType === 'MARKET' ? theme.lightBg + ' ' + theme.text : 'text-slate-400 hover:text-slate-600'}`}>MKT</button>
                 <button onClick={() => setOrderType('LIMIT')} className={`flex-1 py-1.5 text-[11px] font-black rounded-lg transition-colors ${orderType === 'LIMIT' ? theme.lightBg + ' ' + theme.text : 'text-slate-400 hover:text-slate-600'}`}>LMT</button>
              </div>
            </div>
          </div>

          {/* Main Inputs: Qty & Price */}
          <div className='grid grid-cols-2 gap-4'>
            {/* Quantity */}
            <div>
               <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2'>Qty</p>
               <input 
                 type="number" 
                 value={qty}
                 onChange={(e) => setQty(Number(e.target.value))}
                 className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-black text-slate-900 text-lg outline-none transition-all focus:bg-white focus:border-slate-400'
                 min="1"
               />
            </div>

            {/* Price */}
            <div className={`transition-opacity ${orderType === 'MARKET' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
               <p className='text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1 mb-2'>Price</p>
               <input 
                 type="number" 
                 value={orderType === 'MARKET' ? ltp : price}
                 onChange={(e) => setPrice(Number(e.target.value))}
                 className='w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-black text-slate-900 text-lg outline-none transition-all focus:bg-white focus:border-slate-400'
                 step="0.05"
               />
            </div>
          </div>

          {/* Smart Helper Text */}
          <div className='flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100'>
             <Info size={14} className="text-slate-400 mt-0.5 flex-shrink-0" />
             <p className='text-[10px] font-bold text-slate-500 leading-relaxed'>
               {product === 'MIS' 
                 ? "Intraday (MIS) requires 20% margin. Positions will be auto-squared off at 3:15 PM." 
                 : "Delivery (CNC) requires 100% margin. Shares will be delivered to your Demat account."}
             </p>
          </div>

        </div>

        {/* Footer: Margin & Execution */}
        <div className='p-6 pt-0'>
          <div className='flex justify-between items-center mb-4 px-1'>
            <span className='text-xs font-black text-slate-500'>Margin Required:</span>
            <span className='text-lg font-black text-slate-900 font-mono'>₹{marginRequired}</span>
          </div>

          <button 
            onClick={handleExecute}
            disabled={isProcessing || qty <= 0}
            className={`w-full py-4 rounded-[1.25rem] font-black text-lg text-white transition-all shadow-lg flex items-center justify-center gap-2 ${
              isProcessing ? 'bg-slate-300 shadow-none cursor-not-allowed' : `${theme.bg} ${theme.bgHover} ${theme.shadow} active:scale-95`
            }`}
          >
            {isProcessing ? 'Transmitting...' : (
              <>
                 <Zap size={18} className={isBuy ? 'fill-blue-400 text-blue-400' : 'fill-rose-400 text-rose-400'} /> 
                 {action} {qty} {instrument}
              </>
            )}
          </button>
        </div>

      </div>
    </div>,
    document.body // portals it outside the hierarchy
  );
};

export default TradeModal;