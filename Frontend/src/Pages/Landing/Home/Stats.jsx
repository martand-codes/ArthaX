import React from 'react'
import { ChartNoAxesCombined, MoveUpRight } from 'lucide-react'

const Stats = () => {
  return (
    <div className='container mx-auto px-4 py-24'>
      
      <div className='mb-16 text-center md:text-left'>
        <h2 className='text-5xl md:text-6xl font-extrabold flex flex-col md:flex-row items-center md:justify-start gap-4 text-gray-900 tracking-tight'>
          Invest with Confidence 
          <ChartNoAxesCombined size={56} className='text-green-500' strokeWidth={2.5} />
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
        
        <div className='space-y-8'>
          
         
          <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer'>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>No Bullshit.</h3>
            <p className='text-gray-500 leading-relaxed'>Invest where you won't get hit with heinous extra charges or hidden fees.</p>
          </div>

          <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer'>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>No Spamming.</h3>
            <p className='text-gray-500 leading-relaxed'>No barrage of useless notifications. You'll only get alerts that are meaningful and specific to your portfolio.</p>
          </div>

       
          <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer'>
            
            <h3 className='text-2xl font-bold text-red-600 mb-2'>Be Better!</h3>
            <p className='text-gray-500 leading-relaxed'>Invest intelligently so that you can become the best, most financially secure version of yourself.</p>
          </div>
          
        </div>

       
       <div className='flex flex-col items-center '>
  
          <img 
            src="Images/Profile_picture.jpeg" 
            alt="Profile Graphic" 
            className='w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-gray-50 transition-transform duration-500 hover:scale-105'
          />
  
      
        <div className='mt-6 flex gap-6 font-medium text-gray-500'>
          <a 
            href="https://github.com/martand-codes" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-50 hover:text-blue-500 hover:shadow-md transition-all duration-200 flex items-center gap-2"
          >
            GitHub <MoveUpRight />
          </a>
          <a 
            href="https://leetcode.com/u/wAWKTQPu4M/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-gray-50 hover:text-blue-500 hover:shadow-md transition-all duration-200 flex items-center gap-2"
          >
            LeetCode <MoveUpRight />
          </a>
        </div>

      </div>

      </div>
    </div>
  )
}

export default Stats
