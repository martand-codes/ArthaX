import React, { useState } from 'react';
import { Search, MessageSquare, PhoneCall, BookOpen, ArrowRight, LifeBuoy, X, ExternalLink } from 'lucide-react';

// Simulated Database / Knowledge Base
const KNOWLEDGE_BASE = [
  { id: 1, title: 'How to Pledge Shares for Margin', category: 'Trading & Margin', views: '2.4k reads' },
  { id: 2, title: 'F&O Segment Activation Process', category: 'Account & KYC', views: '1.8k reads' },
  { id: 3, title: 'Standard Equity Brokerage Charges', category: 'Pricing & Fees', views: '3.5k reads' },
  { id: 4, title: 'Mutual Fund & SIP Withdrawals', category: 'Funds & Withdrawals', views: '950 reads' },
  { id: 5, title: 'API Documentation & WebSockets', category: 'Developers', views: '1.2k reads' }
];

const SupportHero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModal, setActiveModal] = useState(null); // 'chat', 'phone', or null

  // Functional Client-Side Live Search
  const filteredResults = KNOWLEDGE_BASE.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='pt-36 pb-28 bg-slate-50 relative overflow-hidden border-b border-slate-200/60'>
      
      {/* Immersive Institutional Ambience */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-br from-emerald-500/10 via-blue-500/5 to-transparent blur-[130px] rounded-full pointer-events-none'></div>
      <div className='absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-200/30 blur-[150px] rounded-full pointer-events-none'></div>

      <div className='container mx-auto px-4 max-w-5xl relative z-10'>
        
        {/* Header Label */}
        <div className='text-center mb-8'>
          <div className='inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full bg-white text-slate-800 text-xs font-black uppercase tracking-widest border border-slate-200 shadow-sm shadow-slate-200/50'>
            <LifeBuoy size={16} className='text-emerald-500' />
            ArthaX Institutional Support
          </div>
        </div>

        {/* Hero Typography */}
        <div className='text-center mb-14'>
          <h1 className='text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6'>
            How can we assist your <br />
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600'>trading operations?</span>
          </h1>
          <p className='text-xl text-slate-500 font-medium max-w-2xl mx-auto'>
            Engineered for precision. Search our SEBI-compliant knowledge base or connect directly with our trade desk professionals.
          </p>
        </div>

        {/* Functional Search Command Center */}
        <div className='max-w-3xl mx-auto mb-20 relative'>
          <div className='relative group'>
            {/* Ambient Glow on Focus/Hover */}
            <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-500 pointer-events-none'></div>
            
            <div className='relative flex items-center bg-white/80 backdrop-blur-xl rounded-[2.5rem] border border-slate-200 shadow-2xl p-3 pl-6'>
              <Search size={26} className='text-slate-400 mr-4 shrink-0' />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, margin errors, or configuration settings..." 
                className='flex-1 w-full bg-transparent py-4 text-slate-900 text-lg font-medium focus:outline-none placeholder:text-slate-400'
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')} 
                  className='p-2 hover:bg-slate-100 rounded-full text-slate-400 mr-2 transition-colors'
                >
                  <X size={20} />
                </button>
              )}
              <button className='bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 active:scale-95 hidden sm:block'>
                Search
              </button>
            </div>
          </div>

          {/* Functional Search Results Dropdown */}
          {searchQuery && (
            <div className='absolute top-full left-0 w-full mt-3 bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200 shadow-3xl overflow-hidden z-20 animate-in fade-in slide-in-from-top-2 duration-200'>
              <div className='px-6 py-3 bg-slate-50 border-b border-slate-100 flex justify-between items-center'>
                <span className='text-xs font-bold text-slate-400 uppercase tracking-wider'>Knowledge Base Matches</span>
                <span className='text-xs font-bold text-slate-600'>{filteredResults.length} articles found</span>
              </div>
              
              {filteredResults.length > 0 ? (
                <div className='divide-y divide-slate-50 max-h-80 overflow-y-auto'>
                  {filteredResults.map((article) => (
                    <div 
                      key={article.id} 
                      className='px-6 py-4 flex items-center justify-between hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-emerald-50/30 cursor-pointer group transition-colors duration-200'
                    >
                      <div>
                        <h4 className='font-bold text-slate-800 group-hover:text-blue-600 transition-colors'>{article.title}</h4>
                        <span className='inline-block mt-1 text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md border border-slate-200'>
                          {article.category}
                        </span>
                      </div>
                      <div className='flex items-center gap-4'>
                        <span className='text-xs font-medium text-slate-400'>{article.views}</span>
                        <ArrowRight size={16} className='text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all' />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className='px-6 py-10 text-center'>
                   <p className='text-slate-500 font-medium'>No direct matches found in our documentation.</p>
                   <button 
                    onClick={() => setActiveModal('chat')}
                    className='mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:underline'
                   >
                    Start a live chat with an engineer <ExternalLink size={14} />
                   </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* State-Driven Omni-Channel Support Panels */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
          
          {/* Channel 1: Knowledge Base */}
          <div className='bg-white/60 backdrop-blur-lg p-8 rounded-[2.5rem] border border-slate-200/80 shadow-xl shadow-slate-200/30 flex flex-col items-center text-center group hover:border-blue-200 hover:shadow-blue-100/50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer'>
            <div className='w-14 h-14 bg-blue-50 border border-blue-100/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-100/60 transition-all'>
              <BookOpen size={24} className='text-blue-600' />
            </div>
            <h3 className='text-xl font-bold text-slate-900 mb-3'>Knowledge Base</h3>
            <p className='text-slate-500 font-medium text-sm leading-relaxed mb-8'>
              Structured documentation covering algorithmic API limits, margin policies, and onboarding.
            </p>
            <div className='mt-auto flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all'>
              Browse Articles <ArrowRight size={16} />
            </div>
          </div>

          {/* Channel 2: Live Trade Desk Chat (Triggers Functional Modal) */}
          <div 
            onClick={() => setActiveModal('chat')}
            className='bg-white/60 backdrop-blur-lg p-8 rounded-[2.5rem] border border-slate-200/80 shadow-xl shadow-slate-200/30 flex flex-col items-center text-center group hover:border-emerald-200 hover:shadow-emerald-100/50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer'
          >
            <div className='w-14 h-14 bg-emerald-50 border border-emerald-100/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-100/60 transition-all'>
              <MessageSquare size={24} className='text-emerald-600' />
            </div>
            <h3 className='text-xl font-bold text-slate-900 mb-3'>Live Trade Desk</h3>
            <p className='text-slate-500 font-medium text-sm leading-relaxed mb-8'>
              Instant priority chat connection for active orders, execution errors, or platform stability.
            </p>
            <div className='mt-auto flex items-center gap-2 text-emerald-600 font-bold text-sm group-hover:gap-3 transition-all'>
              Initialize Chat <ArrowRight size={16} />
            </div>
          </div>

          {/* Channel 3: Phone Desk (Triggers Functional Modal) */}
          <div 
            onClick={() => setActiveModal('phone')}
            className='bg-white/60 backdrop-blur-lg p-8 rounded-[2.5rem] border border-slate-200/80 shadow-xl shadow-slate-200/30 flex flex-col items-center text-center group hover:border-indigo-200 hover:shadow-indigo-100/50 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer'
          >
            <div className='w-14 h-14 bg-indigo-50 border border-indigo-100/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-100/60 transition-all'>
              <PhoneCall size={24} className='text-indigo-600' />
            </div>
            <h3 className='text-xl font-bold text-slate-900 mb-3'>Call Desk</h3>
            <p className='text-slate-500 font-medium text-sm leading-relaxed mb-8'>
              Direct line access to institutional support representatives on active trading days (IST).
            </p>
            <div className='mt-auto flex items-center gap-2 text-indigo-600 font-bold text-sm group-hover:gap-3 transition-all'>
              View Desk Line <ArrowRight size={16} />
            </div>
          </div>

        </div>
      </div>

      {/* --- FUNCTIONAL STATE MODALS (Portals/Overlays) --- */}
      
      {/* 1. Live Chat Modal Overlay */}
      {activeModal === 'chat' && (
        <div className='fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200'>
          <div className='bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-300'>
            <div className='p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50'>
              <div>
                <h3 className='font-black text-slate-900'>ArthaX Priority Support</h3>
                <p className='text-[10px] font-black uppercase tracking-wider text-emerald-600 mt-0.5'>Live Chat Desk</p>
              </div>
              <button onClick={() => setActiveModal(null)} className='p-2 hover:bg-slate-200/80 rounded-full transition-colors text-slate-500'>
                <X size={20} />
              </button>
            </div>
            <div className='flex-1 p-8 h-64 flex flex-col items-center justify-center text-center'>
               <div className='w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4 text-emerald-600 animate-pulse'>
                 <MessageSquare size={32} />
               </div>
               <h4 className='font-bold text-slate-800 text-lg mb-1'>Connecting to a specialist...</h4>
               <p className='text-sm text-slate-400 font-medium max-w-xs'>Our trade desk engineers are currently away or off-hours. Leave an inquiry and we will route a reply directly to your email.</p>
            </div>
            <div className='p-6 border-t border-slate-100 bg-slate-50/30 flex gap-3'>
              <input 
                placeholder='Enter your issue or registered email...' 
                className='flex-1 px-4 py-3 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-emerald-500 font-medium'
              />
              <button className='px-5 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-sm'>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. Phone Support Info Modal */}
      {activeModal === 'phone' && (
        <div className='fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200'>
          <div className='bg-white w-full max-w-md rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-300'>
            <div className='p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50'>
              <div>
                <h3 className='font-black text-slate-900'>ArthaX Call Desk Desk</h3>
                <p className='text-[10px] font-black uppercase tracking-wider text-indigo-600 mt-0.5'>Secure Line</p>
              </div>
              <button onClick={() => setActiveModal(null)} className='p-2 hover:bg-slate-200/80 rounded-full transition-colors text-slate-500'>
                <X size={20} />
              </button>
            </div>
            <div className='flex-1 p-8 flex flex-col items-center justify-center text-center'>
               <div className='w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mb-5 text-indigo-600'>
                 <PhoneCall size={32} />
               </div>
               <h4 className='font-bold text-slate-800 text-lg mb-1'>Institutional Call Line</h4>
               <p className='text-xs text-slate-400 font-medium mb-8 max-w-xs'>Available on active exchange settlement days, Monday through Friday, 08:00 AM to 05:00 PM.</p>
               
               <div className='bg-slate-50 border border-slate-100 rounded-2xl p-5 w-full'>
                  <span className='text-[10px] font-black tracking-wider uppercase text-slate-400 block mb-1'>Toll-Free Institutional Desk</span>
                  <span className='text-lg font-black text-slate-900 tracking-tight block'>1800-210-ARTHAX</span>
               </div>
            </div>
            <div className='p-6 border-t border-slate-100 bg-slate-50/30'>
               <button onClick={() => setActiveModal(null)} className='w-full py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-bold rounded-xl transition-colors'>
                Dismiss
               </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default SupportHero;