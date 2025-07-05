import React from 'react'
import LatestCollection from '../component/LatestCollection'
import BestSeller from '../component/BestSeller'

function Product() {
  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] flex items-center justify-start flex-col py-[40px] relative'>
      {/* Background pattern */}
      <div className='absolute inset-0 opacity-5'>
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(59,130,246,0.1),_transparent_50%)]'></div>
        <div className='absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl'></div>
        <div className='absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl'></div>
      </div>

      <div className='w-[100%] min-h-[70px] flex items-center justify-center gap-[10px] flex-col mb-12 relative z-10'>
        <div className='bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2'>
          <LatestCollection/>
        </div>
      </div>

      <div className='w-[100%] min-h-[70px] flex items-center justify-center gap-[10px] flex-col relative z-10'>
        <div className='bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-gray-200/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2'>
          <BestSeller/>
        </div>
      </div>
    </div>
  )
}

export default Product