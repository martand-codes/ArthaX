
import React from 'react'

const Hero = () => {
  return (
    <div className='container mx-auto px-4 mb-4 '>
        <div>
          <h1 className='mb-10 text-center text-6xl font-extrabold'>
            <span className='text-green-600'>Invest</span> For Your Growth!
          </h1>
        </div>
        <div className='w-full'>
          <img className='w-full rounded-xl border border-gray-50 shadow-2xl' src="Images/homeHero.png" alt="Hero Image" />
        </div>
        <div className='flex justify-center w-full mt-8'>
          <button className='px-8 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-green-500 transition-colors duration-200 shadow-md w-62'>
            Start Now
          </button>
        </div>
    </div>
  )
}

export default Hero
