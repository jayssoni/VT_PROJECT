import React from 'react'
import { FaCircle } from "react-icons/fa"

function Hero({heroData, heroCount, setHeroCount}) {
  return (
    <div className='w-[40%] h-[100%] relative z-10'>
      <div className='absolute text-white md:text-[40px] lg:text-[55px] text-[20px] md:left-[10%] md:top-[90px] lg:top-[130px] left-[10%] top-[10px]'>
        {/* Background card for text */}
        <div className='bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500'>
          <p className='font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight'>
            {heroData.text1}
          </p>
          <p className='font-bold bg-gradient-to-r from-pink-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent leading-tight mt-2'>
            {heroData.text2}
          </p>
        </div>
      </div>
      
      <div className='absolute md:top-[400px] lg:top-[500px] top-[160px] left-[10%] flex items-center justify-center gap-[15px] bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20'>
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`w-[16px] h-[16px] rounded-full cursor-pointer transition-all duration-300 transform hover:scale-125 border-2 ${
              heroCount === index 
                ? 'bg-gradient-to-r from-orange-400 to-red-500 border-white shadow-lg' 
                : 'bg-white/70 border-white/50 hover:bg-white/90'
            }`}
            onClick={() => setHeroCount(index)}
          />
        ))}
      </div>
      
      {/* Call to action button */}
      <div className='absolute md:top-[480px] lg:top-[580px] top-[210px] left-[10%]'>
        <button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-2xl shadow-xl border border-white/20 transform hover:scale-105 transition-all duration-300 backdrop-blur-md'>
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Hero