import React from 'react'
import { BrainCircuit, Cat, Code2, MoveUpRight, UserSearch } from 'lucide-react'

const People = () => {
  return (
    <div className='py-24 bg-gray-50 border-t border-gray-100'>
      <div className='container mx-auto px-4 max-w-6xl'>
        
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4'>
            The Architect
          </h2>
          <p className='text-lg text-gray-500 font-medium max-w-2xl mx-auto'>
            ArthaX is designed, architected, and engineered by a developer focused on pushing the boundaries of fintech UI.
          </p>
        </div>

       
        <div className='bg-slate-900 rounded-[2rem] p-8 md:p-12 shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center gap-12 md:gap-16 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(15,23,42,0.5)] hover:-translate-y-1'>
          
          <div className='relative shrink-0'>
            {/* The Tech/Engineering Aura - Switched to a deep, glowing blue/indigo */}
            <div className='absolute inset-0 bg-indigo-500 rounded-full blur-3xl opacity-40 animate-pulse'></div>
            
       
            <img 
              src="Images/Profile_picture.jpeg" 
              alt="Martand - Founder of ArthaX" 
              className='relative w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-2xl border-8 border-slate-800 z-10'
            />
            
            <div className='absolute -bottom-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest shadow-xl z-20 whitespace-nowrap flex items-center gap-2 uppercase'>
              <BrainCircuit size={16} className='text-indigo-200' />
              Lead Engineer
            </div>
          </div>

          {/* Right Side: The Bio and Links */}
          <div className='text-center md:text-left flex-1'>
            <h3 className='text-3xl md:text-5xl font-black text-white mb-2 tracking-tight'>
              Martand Prakhar
            </h3>
            {/* Gradient text to signify premium tech skills */}
            <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400 font-bold text-xl mb-6'>
              Founder & Full-Stack Developer
            </p>
            
            <p className='text-slate-400 leading-relaxed mb-10 text-lg font-medium'>
              "I built ArthaX because I believe modern financial platforms shouldn't have to choose between institutional-grade power and beautiful, intuitive design. Every pixel, route, and state transition here was crafted to prove that complex data can be managed effortlessly."
            </p>

            
            <div className='flex flex-wrap justify-center md:justify-start gap-4'>
              
           
              <a 
                href="https://github.com/martand-codes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-300 shadow-md"
              >
                <Cat size={20} />
                GitHub 
                <MoveUpRight size={16} className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
              </a>

              {/* Secondary Actions: Ghost Buttons */}
              <a 
                href="https://leetcode.com/u/wAWKTQPu4M/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-300 font-bold rounded-xl border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 hover:shadow-md transition-all duration-300"
              >
                <Code2 size={20} />
                LeetCode 
                <MoveUpRight size={16} className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
              </a>

              <a 
                href="https://www.linkedin.com/in/martand-prakhar-a04904315/" 
                className="group flex items-center gap-2 px-6 py-3 bg-slate-800 text-slate-300 font-bold rounded-xl border border-slate-700 hover:border-blue-500 hover:text-blue-400 hover:shadow-md transition-all duration-300"
              >
                <UserSearch size={20} />
                LinkedIn 
                <MoveUpRight size={16} className='group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform' />
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default People
