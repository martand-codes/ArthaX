import React from 'react'
import { TrendingUp, Mail, Bird, UserStar } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bg-gray-50 border-t border-gray-200 pt-16 pb-8'>
      <div className='container mx-auto px-4 max-w-7xl'>
        
        {/* TOP SECTION: The Navigation Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16'>
          
          {/* Column 1: Brand & Socials */}
          <div className='lg:col-span-2'>
            <div className='flex items-center gap-2 mb-6'>
              {/* Changed to a soothing, profitable emerald green */}
              <div className='p-1.5 bg-emerald-600 rounded-lg'>
                <TrendingUp size={24} className='text-white' strokeWidth={2.5} />
              </div>
              <span className='text-2xl font-black text-gray-900 tracking-tight'>
                ArthaX.
              </span>
            </div>
            <p className='text-gray-500 mb-6 font-medium max-w-sm'>
              Empowering the next generation of investors with lightning-fast execution, zero hidden fees, and institutional-grade analytics.
            </p>
            <div className='flex gap-4 text-gray-400'>
              {/* Updated hovers to emerald */}
              <a href="#" className='hover:text-emerald-600 transition-colors'><Bird size={20} /></a>
              <a href="#" className='hover:text-emerald-600 transition-colors'><UserStar size={20} /></a>
              <a href="#" className='hover:text-emerald-600 transition-colors'><Mail size={20} /></a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className='font-bold text-gray-900 mb-6 text-lg'>Company</h4>
            <ul className='space-y-4 text-sm font-medium text-gray-500'>
              <li><a href="#about" className='hover:text-emerald-600 transition-colors'>About Us</a></li>
              <li><a href="#products" className='hover:text-emerald-600 transition-colors'>Products</a></li>
              <li><a href="#pricing" className='hover:text-emerald-600 transition-colors'>Pricing</a></li>
              <li><a href="#" className='hover:text-emerald-600 transition-colors'>Careers</a></li>
              <li><a href="#" className='hover:text-emerald-600 transition-colors'>Press & Media</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className='font-bold text-gray-900 mb-6 text-lg'>Support</h4>
            <ul className='space-y-4 text-sm font-medium text-gray-500'>
              <li><a href="#" className='hover:text-emerald-600 transition-colors'>Contact Us</a></li>
              <li><a href="#" className='hover:text-emerald-600 transition-colors'>Support Portal</a></li>
              <li><a href="#" className='hover:text-emerald-600 transition-colors'>List of Charges</a></li>
              <li><a href="#" className='hover:text-emerald-600 transition-colors'>Downloads & Resources</a></li>
              <li><a href="#" className='hover:text-emerald-600 transition-colors'>Execution Policy</a></li>
            </ul>
          </div>

          {/* Column 4: Account */}
          <div>
            <h4 className='font-bold text-gray-900 mb-6 text-lg'>Account</h4>
            <ul className='space-y-4 text-sm font-medium text-gray-500'>
              <li><a href="#" className='hover:text-emerald-600 transition-colors'>Open an Account</a></li>
              <li><a href="#" className='hover:text-emerald-600 transition-colors'>Fund Transfer</a></li>
              <li><a href="#" className='hover:text-emerald-600 transition-colors'>Referral Programme</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION: The "Assuring" Legal Disclaimer */}
        <div className='border-t border-gray-200 pt-8'>
          <div className='text-[11px] text-gray-400 leading-relaxed space-y-4 text-justify'>
            
            <p>
              <strong className='text-gray-500'>ArthaX Broking Ltd.:</strong> Member of NSE, BSE & MCX – SEBI Registration no.: INZ000000000 CDSL/NSDL: Depository services through ArthaX Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-000-0000. Registered Address: ArthaX Broking Ltd., #42, Outer Ring Road, Bellandur, Bengaluru - 560103, Karnataka, India. For any complaints pertaining to securities broking, please write to complaints@arthax.com.
            </p>

            <p>
              Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
            </p>

            <p>
              <strong className='text-gray-500'>Execution Disclaimer:</strong> Stock market execution speeds are subject to network connectivity, exchange latency, and market volatility. ArthaX ensures 99.9% uptime for order routing but does not guarantee execution at specific tick prices during high-frequency trading hours.
            </p>

            <p>
              Investments in the securities market are subject to market risks; read all the related documents carefully before investing. Brokerage will not exceed the SEBI prescribed limit.
            </p>

          </div>

          {/* Copyright Row */}
          <div className='mt-8 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium'>
            <p>© {new Date().getFullYear()} ArthaX Broking Ltd. All rights reserved.</p>
            <div className='flex gap-6'>
              <a href="#" className='hover:text-gray-900 transition-colors'>Terms & Conditions</a>
              <a href="#" className='hover:text-gray-900 transition-colors'>Privacy Policy</a>
              <a href="#" className='hover:text-gray-900 transition-colors'>Risk Disclosure</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer