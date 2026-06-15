import React, { useState } from 'react'
import { Upload, AlertCircle, Send, FileText, Tag, ChevronDown } from 'lucide-react'

const RaiseTicket = () => {
  const [formData, setFormData] = useState({
    subject: '',
    category: 'Technical',
    priority: 'Medium',
    description: ''
  })

  return (
    <div className='min-h-screen bg-slate-50 py-24'>
      <div className='container mx-auto px-4 max-w-3xl'>
        
        {/* Header */}
        <div className='mb-10'>
          <h1 className='text-4xl font-black text-gray-900 mb-2'>Submit a Support Ticket</h1>
          <p className='text-gray-500 font-medium'>Our trade desk usually responds within 2 hours during market days.</p>
        </div>

        {/* The Form Card */}
        <div className='bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100'>
          
          <form className='space-y-8'>
            {/* Subject Input */}
            <div>
              <label className='block text-xs font-black text-gray-400 uppercase tracking-widest mb-3'>Subject</label>
              <input 
                type="text" 
                placeholder="Briefly describe your issue..."
                className='w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 text-gray-900 font-medium focus:outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all'
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            {/* Category & Priority Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block text-xs font-black text-gray-400 uppercase tracking-widest mb-3'>Category</label>
                <div className='relative'>
                  <select 
                    className='w-full appearance-none bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 text-gray-900 font-bold focus:outline-none focus:bg-white focus:border-emerald-500 transition-all'
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                  >
                    <option>Technical Issue</option>
                    <option>Billing & Charges</option>
                    <option>Account/KYC</option>
                    <option>Withdrawal</option>
                  </select>
                  <ChevronDown className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none' />
                </div>
              </div>
              
              <div>
                <label className='block text-xs font-black text-gray-400 uppercase tracking-widest mb-3'>Priority</label>
                <div className='relative'>
                  <select 
                    className='w-full appearance-none bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 text-gray-900 font-bold focus:outline-none focus:bg-white focus:border-emerald-500 transition-all'
                    onChange={(e) => setFormData({...formData, priority: e.target.value})}
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High (Urgent)</option>
                  </select>
                  <ChevronDown className='absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none' />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className='block text-xs font-black text-gray-400 uppercase tracking-widest mb-3'>Description</label>
              <textarea 
                rows={5}
                placeholder="Please explain the steps you took leading up to the issue..."
                className='w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 text-gray-900 font-medium focus:outline-none focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all'
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            {/* File Upload Area */}
            <div className='border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center hover:border-emerald-500 hover:bg-emerald-50/30 transition-all cursor-pointer group'>
              <Upload size={32} className='mx-auto text-slate-300 group-hover:text-emerald-500 mb-3 transition-colors' />
              <p className='text-sm font-bold text-gray-900'>Drag and drop screenshots</p>
              <p className='text-xs text-gray-400 mt-1'>PNG, JPG up to 5MB</p>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className='w-full bg-emerald-600 text-white font-bold py-5 rounded-2xl shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg'
            >
              <Send size={20} />
              Submit Ticket
            </button>
          </form>

        </div>
        
        {/* Help footer */}
        <div className='mt-8 flex items-center justify-center gap-2 text-gray-400 text-sm font-medium'>
          <AlertCircle size={16} />
          Need immediate assistance? <span className='text-emerald-600 font-bold underline cursor-pointer'>Call our trade desk</span>
        </div>
      </div>
    </div>
  )
}

export default RaiseTicket
