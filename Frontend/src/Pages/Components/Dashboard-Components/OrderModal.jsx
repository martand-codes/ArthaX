import React, { useState } from 'react';
import { X, AlertCircle, TrendingUp, TrendingDown } from 'lucide-react';

const OrderModal = ({ isOpen, onClose, stock, actionType }) => {
  if (!isOpen || !stock) return null;

  // --- STATE MANAGEMENT ---
  // This is what makes the toggles actually work!
  const [productType, setProductType] = useState('MIS'); 
  const [orderType, setOrderType] = useState('MARKET');
  const [quantity, setQuantity] = useState(Math.abs(stock.qty) || 1);

  // --- UI LOGIC ---
  const isBuy = actionType === 'BUY' || actionType === 'ADD';
  
  // Dynamic Margin Calculation
  const marginMultiplier = productType === 'MIS' ? 0.2 : 1; // Intraday gives 5x leverage
  const marginRequired = (stock.ltp * quantity * marginMultiplier).toFixed(2);

  // Dynamic Theme Colors
  const theme = isBuy 
    ? {
        gradient: 'from-blue-600 to-indigo-600',
        lightBg: 'bg-blue-50',
        buttonStr: 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-blue-600/30',
        text: 'text-blue-600',
        icon: <TrendingUp size={18} className="opacity-80" />
      }
    : {
        gradient: 'from-rose-600 to-red-600',
        lightBg: 'bg-rose-50',
        buttonStr: 'bg-gradient-to-r from-rose-600 to-red-500 hover:from-red-500 hover:to-red-400 shadow-rose-600/30',
        text: 'text-rose-600',
        icon: <TrendingDown size={18} className="opacity-80" />
      };

  return (
    // Backdrop with deep blur
    <div className='fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/70 backdrop-blur-md p-4 animate-in fade-in duration-200'>
      
      {/* Modal Container */}
      <div className='bg-white w-full max-w-md rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-100'>
        
        {/* Header - Upgraded to Rich Gradients */}
        <div className={`px-6 py-5 flex justify-between items-start text-white bg-gradient-to-br ${theme.gradient}`}>
          <div>
            <div className='flex items-center gap-2 mb-1'>
              <span className='bg-white/20 px-2 py-0.5 rounded text-[10px] font-black tracking-widest uppercase'>BSE</span>
              <span className='text-xs font-bold opacity-90'>LTP: ₹{stock.ltp}</span>
            </div>
            <h3 className='font-black text-2xl flex items-center gap-2 tracking-tight'>
              {actionType} {stock.instrument} {theme.icon}
            </h3>
          </div>
          <button onClick={onClose} className='p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors active:scale-95'>
            <X size={20} />
          </button>
        </div>

        <div className='p-6 space-y-6'>
          
          {/* Functional Product Toggle (MIS vs NRML) */}
          <div className='flex p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200 shadow-inner'>
            <button 
              onClick={() => setProductType('MIS')}
              className={`flex-1 py-2.5 text-xs font-black rounded-xl transition-all duration-200 ${
                productType === 'MIS' ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              MIS (Intraday)
            </button>
            <button 
              onClick={() => setProductType('NRML')}
              className={`flex-1 py-2.5 text-xs font-black rounded-xl transition-all duration-200 ${
                productType === 'NRML' ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              NRML (Overnight)
            </button>
          </div>

          {/* Functional Order Type Toggle (Market vs Limit) */}
          <div className='flex gap-6 px-1'>
             {/* Market Button Container */}
             <div 
               className="flex items-center gap-2 cursor-pointer group select-none"
               onClick={() => setOrderType('MARKET')}
             >
               <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${orderType === 'MARKET' ? theme.text + ' border-current' : 'border-slate-300 group-hover:border-slate-400'}`}>
                  {orderType === 'MARKET' && <div className="w-2 h-2 rounded-full bg-current"></div>}
               </div>
               <span className={`text-sm font-bold ${orderType === 'MARKET' ? 'text-slate-900' : 'text-slate-500'}`}>Market</span>
             </div>
             
             {/* Limit Button Container */}
             <div 
               className="flex items-center gap-2 cursor-pointer group select-none"
               onClick={() => setOrderType('LIMIT')}
             >
               <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${orderType === 'LIMIT' ? theme.text + ' border-current' : 'border-slate-300 group-hover:border-slate-400'}`}>
                  {orderType === 'LIMIT' && <div className="w-2 h-2 rounded-full bg-current"></div>}
               </div>
               <span className={`text-sm font-bold ${orderType === 'LIMIT' ? 'text-slate-900' : 'text-slate-500'}`}>Limit</span>
             </div>
          </div>

          <div className='grid grid-cols-2 gap-5'>
            {/* Quantity Input */}
            <div>
              <label className='text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1'>Quantity</label>
              <input 
                type="number" 
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                className={`w-full mt-1.5 px-4 py-3.5 bg-slate-50 border rounded-2xl font-black text-slate-900 outline-none transition-all focus:bg-white ${isBuy ? 'focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 border-slate-200' : 'focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10 border-slate-200'}`}
              />
            </div>
            
            {/* Price Input */}
            <div>
              <label className='text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1'>Price</label>
              <input 
                type="text" 
                value={orderType === 'MARKET' ? stock.ltp : ''}
                placeholder={orderType === 'LIMIT' ? '0.00' : ''}
                disabled={orderType === 'MARKET'}
                className={`w-full mt-1.5 px-4 py-3.5 border rounded-2xl font-black transition-all ${
                  orderType === 'MARKET' 
                    ? 'bg-slate-100 border-transparent text-slate-400 cursor-not-allowed' 
                    : `bg-white border-slate-200 text-slate-900 outline-none focus:bg-white ${isBuy ? 'focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10' : 'focus:border-rose-500 focus:ring-4 focus:ring-rose-500/10'}`
                }`}
              />
            </div>
          </div>

          {/* Margin Banner */}
          <div className={`flex items-center justify-between p-4 rounded-2xl border ${theme.lightBg} border-transparent`}>
            <div className='flex items-center gap-2'>
              <AlertCircle size={16} className={theme.text} />
              <span className={`text-xs font-bold ${theme.text}`}>Margin Required</span>
            </div>
            <span className='text-base font-black text-slate-900'>₹{marginRequired}</span>
          </div>

        </div>

        {/* Action Button */}
        <div className='p-6 pt-0'>
          <button 
            onClick={() => {
                alert(`Order Placed: ${actionType} ${quantity} shares of ${stock.instrument} at ${orderType} price.`);
                onClose();
            }}
            className={`w-full py-4 rounded-2xl font-black text-white text-lg shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 ${theme.buttonStr}`}
          >
            CONFIRM {actionType}
          </button>
        </div>

      </div>
    </div>
  )
}

export default OrderModal;