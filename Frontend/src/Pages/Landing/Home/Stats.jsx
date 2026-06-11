import React from 'react'
import { ChartNoAxesCombined } from 'lucide-react'

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
          
          {/* Card 1 - Added hover transform animations */}
          <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer'>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>No Bullshit.</h3>
            <p className='text-gray-500 leading-relaxed'>Invest where you won't get hit with heinous extra charges or hidden fees.</p>
          </div>

          {/* Card 2 - Added hover transform animations */}
          <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer'>
            <h3 className='text-2xl font-bold text-gray-900 mb-2'>No Spamming.</h3>
            <p className='text-gray-500 leading-relaxed'>No barrage of useless notifications. You'll only get alerts that are meaningful and specific to your portfolio.</p>
          </div>

          {/* Card 3 - Added hover transform animations & Kratos Red */}
          <div className='bg-white p-6 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer'>
            {/* The Kratos Red Text */}
            <h3 className='text-2xl font-bold text-red-600 mb-2'>Be Better!</h3>
            <p className='text-gray-500 leading-relaxed'>Invest intelligently so that you can become the best, most financially secure version of yourself.</p>
          </div>
          
        </div>

        <div className='flex justify-center md:justify-end'>
          {/* Added a subtle hover zoom to the profile image */}
          <img 
            src="Images/Profile_picture.jpeg" 
            alt="Profile Graphic" 
            className='w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-gray-50 transition-transform duration-500 hover:scale-105'
          />
        </div>

      </div>
    </div>
  )
}

export default Stats
