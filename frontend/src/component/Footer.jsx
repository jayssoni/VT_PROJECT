import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
  return (
    <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px] relative'>
      <div className='w-[100%] md:h-[30vh] h-[15vh] md:mb-[0px] bg-gradient-to-br from-white via-gray-50 to-blue-50 flex items-center justify-center md:px-[50px] px-[5px] shadow-2xl border-t border-gray-200/50'>
        {/* Background decoration */}
        <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5'></div>
        
        <div className='md:w-[30%] w-[35%] h-[100%] flex items-start justify-center flex-col gap-[8px] relative z-10'>
          <div className='flex items-start justify-start gap-[8px] mt-[10px] md:mt-[40px] bg-white/70 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200/50'>
            <img src={logo} alt="" className='md:w-[40px] md:h-[40px] w-[30px] h-[30px] rounded-xl shadow-md'/>
            <p className='text-[19px] md:text-[20px] text-gray-800 font-semibold'>OneCart</p>
          </div>
          <div className='bg-white/50 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200/50'>
            <p className='text-[15px] text-gray-700 hidden md:block leading-relaxed'>
              OneCart is your all-in-one online shopping destination, offering top-quality products, unbeatable deals, and fast delivery—all backed by trusted service designed to make your life easier every day.
            </p>
            <p className='text-[15px] text-gray-700 flex md:hidden font-medium'>
              Fast. Easy. Reliable. OneCart Shopping
            </p>
          </div>
        </div>

        <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center relative z-10'>
          <div className='bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 h-full flex flex-col justify-center'>
            <div className='flex items-center justify-center gap-[5px] mb-4'>
              <p className='text-[19px] md:text-[20px] text-gray-800 font-semibold'>COMPANY</p>
            </div>
            <ul className='space-y-2'>
              <li className='text-[15px] text-gray-700 hidden md:block cursor-pointer hover:text-blue-600 transition-colors duration-300 py-1 px-3 rounded-xl hover:bg-blue-50'>Home</li>
              <li className='text-[15px] text-gray-700 cursor-pointer hover:text-blue-600 transition-colors duration-300 py-1 px-3 rounded-xl hover:bg-blue-50'>About us</li>
              <li className='text-[15px] text-gray-700 hidden md:block cursor-pointer hover:text-blue-600 transition-colors duration-300 py-1 px-3 rounded-xl hover:bg-blue-50'>Delivery</li>
              <li className='text-[15px] text-gray-700 cursor-pointer hover:text-blue-600 transition-colors duration-300 py-1 px-3 rounded-xl hover:bg-blue-50'>Privacy Policy</li>
            </ul>
          </div>
        </div>

        <div className='md:w-[25%] w-[40%] h-[100%] flex items-center justify-center flex-col text-center relative z-10'>
          <div className='bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 h-full flex flex-col justify-center'>
            <div className='flex items-center justify-center gap-[5px] mb-4'>
              <p className='text-[19px] md:text-[20px] text-gray-800 font-semibold'>GET IN TOUCH</p>
            </div>
            <ul className='space-y-2'>
              <li className='text-[15px] text-gray-700 py-1 px-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100'>+91-9876543210</li>
              <li className='text-[15px] text-gray-700 py-1 px-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100'>contact@onecart.com</li>
              <li className='text-[15px] text-gray-700 hidden md:block py-1 px-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100'>+1-123-456-7890</li>
              <li className='text-[15px] text-gray-700 hidden md:block py-1 px-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100'>admin@onecart.com</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className='w-[100%] h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
      
      <div className='w-[100%] h-[6vh] bg-gradient-to-r from-gray-50 to-blue-50 flex items-center justify-center border-t border-gray-200/50 shadow-inner'>
        <div className='bg-white/70 backdrop-blur-sm rounded-2xl px-6 py-2 shadow-lg border border-gray-200/50'>
          <p className='text-gray-700 font-medium'>Copyright 2025@onecart.com - All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer