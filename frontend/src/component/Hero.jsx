import React from 'react'
import { FaCircle } from "react-icons/fa"

function Hero({heroData, heroCount, setHeroCount}) {
  return (
    <div className='absolute inset-0 w-full h-full flex items-center justify-start z-10'>
      <div className='w-full max-w-7xl mx-auto px-4 lg:px-8'>
        <div className='flex flex-col items-start justify-center h-full'>
          {/* Main text content */}
          <div className='mb-8 lg:mb-12'>
            <div className='bg-white/10 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500 max-w-2xl'>
              <p className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight'>
                {heroData.text1}
              </p>
              <p className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight mt-2'>
                {heroData.text2}
              </p>
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className='flex items-center justify-center gap-4 bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 mb-6'>
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-125 border-2 ${
                  heroCount === index 
                    ? 'bg-gradient-to-r from-orange-400 to-red-500 border-white shadow-lg' 
                    : 'bg-white/70 border-white/50 hover:bg-white/90'
                }`}
                onClick={() => setHeroCount(index)}
              />
            ))}
          </div>
          
          {/* Call to action button */}
          <div>
            <button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 backdrop-blur-md text-lg'>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero