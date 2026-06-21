import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { 
  TrendingUp, TrendingDown, Activity, IndianRupee, 
  BarChart2, Zap, ArrowRight, Wallet, Target, Crosshair, Plus, ArrowUpRight,
  Globe2, PieChart as PieChartIcon, ShieldCheck, Layers
} from 'lucide-react';
import { 
  ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell, ReferenceLine,
  PieChart, Pie,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

import { 
  portfolioHistory, monthlyPnL, sectorExposure, 
  assetAllocation, capAllocation, pnlByInstrument 
} from '../../Utils/DummyData.js'; 

import TradeModal from '../Components/Dashboard-Components/TradeModal.jsx'; 

const topMovers = [
  { instrument: 'RELIANCE', change: '+1.20%', value: '+₹34.50', isUp: true, ltp: '2,932.40' },
  { instrument: 'TCS', change: '+2.10%', value: '+₹84.10', isUp: true, ltp: '4,105.00' },
  { instrument: 'HDFCBANK', change: '-0.80%', value: '-₹11.20', isUp: false, ltp: '1,440.15' },
  { instrument: 'INFY', change: '-1.10%', value: '-₹18.40', isUp: false, ltp: '1,620.80' },
];

const DashboardPage = () => {
  const navigate = useNavigate(); 
  const loggedInUser = "ArthaX_Actual"; 
  
  const [timeframe, setTimeframe] = useState('6M');
  const [showBenchmark, setShowBenchmark] = useState(false); 

  const [tradeModalConfig, setTradeModalConfig] = useState({
    isOpen: false,
    instrument: '',
    action: 'BUY', 
    ltp: 0
  });

  const openTradeModal = (instrument, action, ltpString) => {
    const ltpNumber = typeof ltpString === 'string' ? parseFloat(ltpString.replace(/,/g, '')) : ltpString;
    setTradeModalConfig({ isOpen: true, instrument, action, ltp: ltpNumber });
  };

  // --- TOOLTIPS ---
  const MainTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900/95 backdrop-blur-xl text-white p-6 rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.2)] border border-slate-700/50">
          <p className="text-[11px] font-black text-blue-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
             DATA ENTRY // {label}
          </p>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Your Portfolio</p>
              <p className="text-3xl font-black text-white font-mono tracking-tight">
                ₹{payload[0].value.toLocaleString('en-IN')}
              </p>
            </div>
            {payload[1] && (
              <div className="pt-4 border-t border-slate-700/50">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">NIFTY 50 (Benchmark)</p>
                <p className="text-xl font-black text-emerald-400 font-mono tracking-tight">
                  ₹{payload[1].value.toLocaleString('en-IN')}
                </p>
              </div>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  const WinLossTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const isProfit = payload[0].value >= 0;
      return (
        <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-2xl border border-slate-700 flex flex-col gap-2">
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
          <span className={`text-2xl font-black font-mono ${isProfit ? 'text-emerald-400' : 'text-rose-400'}`}>
             {isProfit ? '+' : ''}₹{payload[0].value.toLocaleString('en-IN')}
          </span>
        </div>
      );
    }
    return null;
  };

  const RadarTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 text-white p-4 rounded-xl shadow-xl border border-purple-500/30">
          <span className="text-[11px] font-bold text-purple-400 uppercase tracking-widest block mb-2">{payload[0].payload.sector}</span>
          <span className="text-xl font-black font-mono">{payload[0].value}% Exposure</span>
        </div>
      );
    }
    return null;
  };

  return (
    // INCREASED OVERALL SPACING: Changed space-y-8 to space-y-12 lg:space-y-16
    <div className='max-w-[1400px] mx-auto pb-24 space-y-12 lg:space-y-16 mt-4'>
      
      {/* HUD Header - INCREASED MARGINS AND PADDING */}
      <div className='flex flex-col lg:flex-row lg:items-start justify-between gap-10'>
        <div className='max-w-2xl'>
          
          <div className='flex items-center gap-3 mb-6 animate-in fade-in slide-in-from-left-2 duration-500'>
            <div className='w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_12px_rgba(244,63,94,0.8)]'></div>
            <span className='text-[11px] font-black text-rose-600 uppercase tracking-[0.3em]'>System Active // Core Online</span>
          </div>
          
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-10'>
            Command <span className='bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent'>Center</span>
          </h1>
          
          {/* WELCOME BLOCK: Increased padding, larger text, and pushed it down slightly */}
          <div className='border-l-[6px] border-slate-900 pl-6 py-3 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200'>
            <h2 className='text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase'>
              Welcome, <span className='text-blue-600'>@{loggedInUser}</span>
            </h2>
            <p className='text-sm font-black text-slate-500 mt-3 uppercase tracking-[0.2em]'>
              Telemetry synced. Assets loaded. <span className='text-rose-600'>Execute on sight.</span>
            </p>
          </div>

        </div>
        
        <div className='hidden lg:flex flex-col items-end gap-4 mt-2'>
          <div className='flex items-center gap-6 bg-slate-900 px-8 py-5 rounded-2xl shadow-xl shadow-slate-900/20 border border-slate-800'>
             <div className='flex items-center gap-4 border-r border-slate-700 pr-6'>
               <div className='w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]'></div>
               <span className='text-sm font-bold text-slate-300 tracking-widest uppercase'>Markets Open</span>
             </div>
             <span className='text-sm font-mono font-black text-cyan-400 tracking-widest'>T-MINUS 02:45:00</span>
          </div>
        </div>
      </div>

      {/* Row 1: Tactical Readout - INCREASED GAPS */}
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10'>
        
        {/* Hero Card */}
        <div className='xl:col-span-2 bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl shadow-blue-900/20 relative overflow-hidden group flex flex-col justify-between'>
          <div className='absolute inset-0 opacity-20' style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className='absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-400/30 transition-colors duration-700'></div>
          
          <div className='relative z-10'>
            <div className='flex justify-between items-start mb-6'>
              <p className='text-[11px] font-black text-blue-400 uppercase tracking-[0.3em] flex items-center gap-3'>
                <Crosshair size={16} /> Total Net Worth
              </p>
              <button onClick={() => navigate('/dashboard/reports')} className='p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all hover:scale-105 active:scale-95 text-slate-300 cursor-pointer'>
                <ArrowRight size={18} className="-rotate-45" />
              </button>
            </div>
            <p className='text-6xl lg:text-8xl font-black text-white tracking-tighter font-mono'>
              ₹1,45,620<span className='text-4xl text-slate-500'>.50</span>
            </p>
          </div>
          
          <div className='relative z-10 flex items-center justify-between pt-8 border-t border-slate-700/50 mt-10'>
            <div>
               <p className='text-[10px] font-black text-slate-500 uppercase tracking-[0.25em] mb-2'>Capital Deployed</p>
               <p className='text-xl font-black text-slate-200 font-mono'>₹1,00,000.00</p>
            </div>
            <div className='text-right'>
               <p className='text-[10px] font-black text-slate-500 uppercase tracking-[0.25em] mb-2'>System Alpha</p>
               <span className='text-base font-black text-emerald-400 bg-emerald-500/10 px-4 py-1.5 rounded-xl border border-emerald-500/20'>+45.62%</span>
            </div>
          </div>
        </div>

        {/* Intraday P&L */}
        <div className='bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden flex flex-col justify-between group'>
          <div>
            <div className='flex justify-between items-start mb-6'>
              <p className='text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]'>Intraday P&L</p>
            </div>
            <p className='text-5xl lg:text-6xl font-black text-emerald-600 tracking-tighter font-mono'>
              +₹6,872<span className='text-3xl text-emerald-600/50'>.00</span>
            </p>
          </div>
          <div className='pt-8 border-t border-slate-100 flex items-center justify-between mt-10'>
            <span className='text-base font-black text-emerald-600 flex items-center bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100'>
              <TrendingUp size={18} className='mr-2'/> +4.72%
            </span>
            <span className='text-[11px] font-bold text-slate-400 uppercase tracking-widest'>vs Prev Close</span>
          </div>
        </div>

        {/* Available Margin */}
        <div className='bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden flex flex-col justify-between group'>
          <div>
            <div className='flex justify-between items-center mb-6'>
              <p className='text-[11px] font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3'>
                 <Wallet size={16} /> Margin
              </p>
              <button onClick={() => navigate('/dashboard/funds')} className='flex items-center gap-2 text-xs font-black text-white bg-blue-600 hover:bg-blue-500 px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/30 active:scale-95 cursor-pointer'>
                <Plus size={16} strokeWidth={3} /> Add
              </button>
            </div>
            <p className='text-5xl lg:text-6xl font-black text-slate-900 tracking-tighter font-mono'>
              ₹98,000<span className='text-3xl text-slate-400'>.00</span>
            </p>
          </div>
          <div className='pt-8 border-t border-slate-100 mt-10'>
             <div className='flex justify-between text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] mb-4'>
               <span>Capital Lock</span>
               <span className='text-blue-600 font-mono text-sm'>32.7%</span>
             </div>
             <div className='w-full bg-slate-100 rounded-full h-2.5 overflow-hidden shadow-inner'>
               <div className='bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full w-[32.7%] relative'></div>
             </div>
          </div>
        </div>

      </div>

      {/* Row 2: Structural Architecture - INCREASED GAPS & PADDING */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10'>
        
        {/* Asset Allocation */}
        <div className='bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col'>
          <div className='mb-4'>
             <h2 className='text-xl font-black text-slate-900 flex items-center gap-3'>
               <PieChartIcon size={22} className="text-indigo-500"/> Asset Allocation
             </h2>
          </div>
          <div className='h-[180px] w-full flex-shrink-0 relative my-6'>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={assetAllocation} cx="50%" cy="50%" innerRadius={60} outerRadius={85} paddingAngle={5} dataKey="value" stroke="none">
                  {assetAllocation.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                </Pie>
                <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}/>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-black text-slate-900">{assetAllocation.length}</span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Classes</span>
            </div>
          </div>
          <div className='space-y-4 pt-6 border-t border-slate-100 mt-auto'>
            {assetAllocation.map((item, index) => (
              <div key={index} className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='w-3 h-3 rounded-full' style={{ backgroundColor: item.color }}></div>
                  <span className='text-sm font-bold text-slate-600'>{item.name}</span>
                </div>
                <span className='text-sm font-black text-slate-900 font-mono'>{(item.value / 1000).toFixed(1)}k</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cap Distribution */}
        <div className='bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col'>
          <div className='mb-4'>
             <h2 className='text-xl font-black text-slate-900 flex items-center gap-3'>
               <Layers size={22} className="text-blue-500"/> Cap Distribution
             </h2>
          </div>
          <div className='h-[180px] w-full flex-shrink-0 relative my-6'>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={capAllocation} cx="50%" cy="50%" innerRadius={60} outerRadius={85} paddingAngle={5} dataKey="value" stroke="none">
                  {capAllocation.map((entry, index) => (<Cell key={`cell-${index}`} fill={entry.color} />))}
                </Pie>
                <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}/>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-black text-slate-900">{capAllocation.length}</span>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Tiers</span>
            </div>
          </div>
          <div className='space-y-4 pt-6 border-t border-slate-100 mt-auto'>
            {capAllocation.map((item, index) => (
              <div key={index} className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <div className='w-3 h-3 rounded-full' style={{ backgroundColor: item.color }}></div>
                  <span className='text-sm font-bold text-slate-600'>{item.name}</span>
                </div>
                <span className='text-sm font-black text-slate-900 font-mono'>{(item.value / 1000).toFixed(1)}k</span>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Heatmap */}
        <div className='bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col min-h-[400px]'>
          <div className='mb-4 flex justify-between items-center'>
            <h2 className='text-xl font-black text-slate-900 flex items-center gap-3'>
              <Target size={22} className="text-purple-500"/> Risk Heatmap
            </h2>
            <button onClick={() => navigate('/dashboard/holdings')} className='text-xs font-black text-slate-500 hover:text-purple-700 bg-slate-50 hover:bg-purple-100 px-5 py-2.5 rounded-xl border border-slate-100 transition-all active:scale-95 cursor-pointer'>
              Manage
            </button>
          </div>
          <div className='h-[280px] w-full flex-shrink-0 relative my-auto'>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={sectorExposure}>
                <PolarGrid stroke="#E2E8F0" />
                <PolarAngleAxis dataKey="sector" tick={{fill: '#64748B', fontSize: 11, fontWeight: 800}} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Tooltip content={<RadarTooltip />} />
                <Radar name="Exposure" dataKey="value" stroke="#8B5CF6" strokeWidth={3} fill="#8B5CF6" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className='mt-auto pt-6 border-t border-slate-100 flex justify-between items-center'>
             <div>
               <p className='text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1'>Heavy</p>
               <p className='text-base font-black text-purple-600'>Tech (85%)</p>
             </div>
             <div className='text-right'>
               <p className='text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1'>Light</p>
               <p className='text-base font-black text-slate-700'>Pharma (20%)</p>
             </div>
          </div>
        </div>

      </div>

      {/* Row 3: Deep Analytics - INCREASED GAPS & PADDING */}
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-10'>
        
        {/* Equity Curve */}
        <div className='bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 flex flex-col'>
          <div className='flex flex-col sm:flex-row sm:items-start justify-between gap-8 mb-10'>
             <div>
               <h2 className='text-2xl font-black text-slate-900 flex items-center gap-3 tracking-tight'>
                 <Activity size={24} className="text-blue-600" /> Trajectory Analysis
               </h2>
               <p className='text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-2'>Net Worth vs Benchmark</p>
             </div>
             <div className='flex flex-col gap-4 items-start sm:items-end'>
               <div className='flex p-1.5 bg-slate-50 border border-slate-200 rounded-2xl shadow-inner'>
                 {['1M', '3M', '6M', '1Y'].map((tf) => (
                   <button 
                     key={tf} onClick={() => setTimeframe(tf)}
                     className={`px-5 py-2 text-xs font-black rounded-xl transition-all ${timeframe === tf ? 'bg-white text-blue-600 shadow-sm border border-slate-200/60' : 'text-slate-400 hover:text-slate-700'}`}
                   >
                     {tf}
                   </button>
                 ))}
               </div>
               <button 
                 onClick={() => setShowBenchmark(!showBenchmark)}
                 className={`text-[11px] font-black px-4 py-2 rounded-xl border transition-all flex items-center gap-2 cursor-pointer active:scale-95 ${showBenchmark ? 'bg-emerald-50 text-emerald-600 border-emerald-200 shadow-sm' : 'bg-white text-slate-400 border-slate-200 hover:bg-slate-50'}`}
               >
                 <div className={`w-2.5 h-2.5 rounded-full transition-colors ${showBenchmark ? 'bg-emerald-500' : 'bg-slate-300'}`}></div> Compare NIFTY 50
               </button>
             </div>
          </div>
          <div className='flex-grow min-h-[350px] w-full mt-auto'>
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={portfolioHistory} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 11, fontWeight: 800, textTransform: 'uppercase'}} dy={15} />
                <YAxis hide={true} domain={['dataMin - 5000', 'dataMax + 5000']} />
                <Tooltip content={<MainTooltip />} cursor={{ stroke: '#94A3B8', strokeWidth: 1.5, strokeDasharray: '4 4' }} />
                <Area type="monotone" dataKey="value" stroke="#2563EB" strokeWidth={5} fillOpacity={1} fill="url(#colorValue)" activeDot={{ r: 8, fill: '#fff', stroke: '#2563EB', strokeWidth: 4 }}/>
                {showBenchmark && (
                  <Line type="monotone" dataKey="benchmark" stroke="#10B981" strokeWidth={3} strokeDasharray="6 6" dot={false} activeDot={{ r: 6, fill: '#fff', stroke: '#10B981', strokeWidth: 3 }}/>
                )}
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Win/Loss Diagnostics */}
        <div className='bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 flex flex-col'>
          <div className='flex items-center justify-between mb-10'>
             <div>
               <h2 className='text-2xl font-black text-slate-900 flex items-center gap-3 tracking-tight'>
                 <BarChart2 size={24} className="text-slate-700"/> P&L Diagnostics
               </h2>
               <p className='text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-2'>Net Profit/Loss by Asset</p>
             </div>
             <button onClick={() => navigate('/dashboard/reports')} className='text-xs font-black text-slate-400 hover:text-blue-600 uppercase tracking-widest transition-colors active:scale-95 cursor-pointer'>
               View Ledger
             </button>
          </div>
          <div className='flex-grow min-h-[350px] w-full mt-auto'>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pnlByInstrument} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 10, fontWeight: 900}} dy={15} />
                <Tooltip content={<WinLossTooltip />} cursor={{fill: '#F8FAFC'}} />
                <ReferenceLine y={0} stroke="#94A3B8" strokeWidth={2} />
                <Bar dataKey="pnl" radius={[6, 6, 6, 6]} barSize={48}>
                  {pnlByInstrument.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.pnl >= 0 ? '#10B981' : '#F43F5E'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Row 4: Telemetry & Active Drivers - INCREASED GAPS & PADDING */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-10'>
        
        {/* Top Movers */}
        <div className='bg-white rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/40 p-10 flex flex-col'>
          <div className='flex items-center justify-between mb-8'>
            <div>
              <h2 className='text-2xl font-black text-slate-900 flex items-center gap-3 tracking-tight'>
                <Zap size={24} className="text-amber-500 fill-amber-500/20" /> Active Drivers
              </h2>
              <p className='text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-2'>Top Movers Today</p>
            </div>
            <button onClick={() => navigate('/dashboard/holdings')} className='text-xs font-black text-slate-400 hover:text-blue-600 uppercase tracking-widest transition-colors active:scale-95 cursor-pointer'>
              See All
            </button>
          </div>
          
          <div className='space-y-5 flex-grow overflow-y-auto custom-scrollbar pr-2'>
            {topMovers.map((stock, i) => (
              <div key={i} className='relative flex items-center justify-between p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-lg hover:border-slate-200 transition-all group overflow-hidden cursor-default'>
                
                <div className='transition-transform duration-300 group-hover:-translate-x-2'>
                  <h4 className='font-black text-base text-slate-900'>{stock.instrument}</h4>
                  <p className='text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1.5'>₹{stock.ltp}</p>
                </div>
                <div className='text-right transition-transform duration-300 group-hover:translate-x-12 group-hover:opacity-0'>
                  <span className={`flex items-center justify-end gap-1.5 text-base font-black font-mono ${stock.isUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {stock.isUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                    {stock.change}
                  </span>
                  <p className={`text-[11px] font-bold mt-1.5 ${stock.isUp ? 'text-emerald-600/70' : 'text-rose-600/70'}`}>{stock.value}</p>
                </div>

                <div className='absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-3 opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300'>
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       openTradeModal(stock.instrument, 'BUY', stock.ltp);
                     }}
                     className='w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-700 font-black text-base hover:bg-blue-600 hover:text-white transition-all shadow-sm active:scale-90 cursor-pointer'
                   >
                     B
                   </button>
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       openTradeModal(stock.instrument, 'SELL', stock.ltp);
                     }}
                     className='w-12 h-12 flex items-center justify-center rounded-xl bg-rose-100 text-rose-700 font-black text-base hover:bg-rose-600 hover:text-white transition-all shadow-sm active:scale-90 cursor-pointer'
                   >
                     S
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deep Dark Market Telemetry */}
        <div className='bg-slate-900 rounded-[2.5rem] border border-slate-800 shadow-2xl shadow-blue-900/20 p-10 text-white relative overflow-hidden flex flex-col justify-between'>
          <div className='absolute inset-0 opacity-10' style={{ backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          <div className='absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/30 rounded-full blur-[80px]'></div>
          
          <div className='relative z-10 mb-10 flex justify-between items-start'>
            <div>
              <h2 className='text-2xl font-black tracking-tight flex items-center gap-3'>
                <Globe2 size={24} className="text-blue-400" /> Market Telemetry
              </h2>
              <p className='text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-2'>Live Index & Breadth Feeds</p>
            </div>
            <button onClick={() => navigate('/dashboard/reports')} className='p-3.5 bg-slate-800/80 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 rounded-2xl transition-all shadow-sm active:scale-90 cursor-pointer'>
              <ArrowUpRight size={20} className="text-slate-300" />
            </button>
          </div>
          
          <div className='space-y-6 relative z-10'>
            {/* NIFTY 50 */}
            <div className='bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-6 rounded-[1.5rem]'>
              <div className='flex justify-between items-start mb-6'>
                <div>
                  <h4 className='text-xl font-black text-white'>NIFTY 50</h4>
                  <p className='text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1'>NSE</p>
                </div>
                <div className='text-right'>
                  <p className='text-2xl font-black text-white font-mono tracking-tight'>22,419.55</p>
                  <p className='text-sm font-black text-emerald-400 flex items-center justify-end gap-1.5 mt-1.5'>
                    <TrendingUp size={16} /> +0.34%
                  </p>
                </div>
              </div>
              <div className='pt-5 border-t border-slate-700/50'>
                 <div className='flex justify-between text-[11px] font-mono font-bold text-slate-400 mb-3.5'>
                    <span>L: 22,302.10</span><span>H: 22,480.50</span>
                 </div>
                 <div className='w-full bg-slate-900 rounded-full h-2.5 relative shadow-inner'>
                    <div className='absolute left-[20%] right-[10%] bg-gradient-to-r from-blue-600 to-blue-400 h-2.5 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)]'></div>
                    <div className='absolute right-[15%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-[3px] border-slate-900 shadow-md'></div>
                 </div>
              </div>
            </div>

            {/* SENSEX */}
            <div className='bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 p-6 rounded-[1.5rem]'>
              <div className='flex justify-between items-start mb-6'>
                <div>
                  <h4 className='text-xl font-black text-white'>SENSEX</h4>
                  <p className='text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1'>BSE</p>
                </div>
                <div className='text-right'>
                  <p className='text-2xl font-black text-white font-mono tracking-tight'>73,803.12</p>
                  <p className='text-sm font-black text-rose-400 flex items-center justify-end gap-1.5 mt-1.5'>
                    <TrendingDown size={16} /> -0.12%
                  </p>
                </div>
              </div>
              <div className='pt-5 border-t border-slate-700/50'>
                 <div className='flex justify-between text-[11px] font-mono font-bold text-slate-400 mb-3.5'>
                    <span>L: 73,650.00</span><span>H: 74,100.20</span>
                 </div>
                 <div className='w-full bg-slate-900 rounded-full h-2.5 relative shadow-inner'>
                    <div className='absolute left-[10%] right-[30%] bg-gradient-to-r from-blue-600 to-blue-400 h-2.5 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.8)]'></div>
                    <div className='absolute left-[25%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-[3px] border-slate-900 shadow-md'></div>
                 </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>

      <TradeModal 
        isOpen={tradeModalConfig.isOpen}
        onClose={() => setTradeModalConfig({ ...tradeModalConfig, isOpen: false })}
        instrument={tradeModalConfig.instrument}
        initialAction={tradeModalConfig.action}
        ltp={tradeModalConfig.ltp}
      />

    </div>
  );
};

export default DashboardPage;