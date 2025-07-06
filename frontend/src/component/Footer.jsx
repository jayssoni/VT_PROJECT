import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
  return (
    <div className='w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden'>
      {/* Background decorations */}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20'></div>
      <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'></div>
      
      {/* Main Footer Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          
          {/* Company Info */}
          <div className='lg:col-span-2 space-y-6'>
            {/* Logo and Brand */}
            <div className='flex items-center gap-3 mb-6'>
              <div className='relative'>
                <img 
                  src={logo} 
                  alt="OneCart Logo" 
                  className='w-12 h-12 rounded-xl shadow-lg border-2 border-blue-400/50'
                />
                <div className='absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-xl'></div>
              </div>
              <div>
                <h2 className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
                  OneCart
                </h2>
                <p className='text-gray-400 text-sm'>Your Shopping Partner</p>
              </div>
            </div>

            {/* Description */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
              <p className='text-gray-300 leading-relaxed text-base'>
                OneCart is your all-in-one online shopping destination, offering top-quality products, 
                unbeatable deals, and fast delivery—all backed by trusted service designed to make your 
                life easier every day.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className='bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-6 border border-blue-500/20'>
              <h3 className='text-lg font-semibold mb-3 text-blue-300'>Stay Updated</h3>
              <p className='text-gray-400 text-sm mb-4'>Get the latest deals and updates delivered to your inbox.</p>
              <div className='flex gap-2'>
                <input 
                  type='email' 
                  placeholder='Enter your email' 
                  className='flex-1 px-4 py-2 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors'
                />
                <button className='bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl'>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className='space-y-6'>
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
              <h3 className='text-xl font-semibold mb-6 text-blue-300 flex items-center gap-2'>
                <span className='w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full'></span>
                Company
              </h3>
              <ul className='space-y-3'>
                {['Home', 'About Us', 'Products', 'Delivery', 'Privacy Policy', 'Terms & Conditions'].map((item, index) => (
                  <li key={index}>
                    <a href='#' className='text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 py-1 px-3 rounded-lg hover:bg-gray-700/50 group'>
                      <span className='w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className='space-y-6'>
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
              <h3 className='text-xl font-semibold mb-6 text-purple-300 flex items-center gap-2'>
                <span className='w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full'></span>
                Get In Touch
              </h3>
              <ul className='space-y-4'>
                <li className='flex items-center gap-3 p-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/20'>
                  <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                  <span className='text-gray-300'>+91-9876543210</span>
                </li>
                <li className='flex items-center gap-3 p-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/20'>
                  <div className='w-2 h-2 bg-blue-400 rounded-full'></div>
                  <span className='text-gray-300'>contact@onecart.com</span>
                </li>
                <li className='flex items-center gap-3 p-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/20'>
                  <div className='w-2 h-2 bg-purple-400 rounded-full'></div>
                  <span className='text-gray-300'>+1-123-456-7890</span>
                </li>
                <li className='flex items-center gap-3 p-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/20'>
                  <div className='w-2 h-2 bg-pink-400 rounded-full'></div>
                  <span className='text-gray-300'>admin@onecart.com</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50'>
              <h3 className='text-lg font-semibold mb-4 text-pink-300'>Follow Us</h3>
              <div className='flex gap-3'>
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social, index) => (
                  <a 
                    key={index}
                    href='#' 
                    className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='pt-8 border-t border-gray-700/50'>
          <div className='bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
              <div className='text-center md:text-left'>
                <p className='text-gray-400 text-sm'>
                  © 2025 OneCart.com - All Rights Reserved
                </p>
                <p className='text-gray-500 text-xs mt-1'>
                  Made with ❤️ for amazing shopping experiences
                </p>
              </div>
              <div className='flex gap-4 text-sm text-gray-400'>
                <a href='#' className='hover:text-blue-400 transition-colors'>Privacy</a>
                <span>•</span>
                <a href='#' className='hover:text-blue-400 transition-colors'>Terms</a>
                <span>•</span>
                <a href='#' className='hover:text-blue-400 transition-colors'>Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer