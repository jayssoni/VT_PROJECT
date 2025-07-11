import React from 'react'

function Title({ text1, text2 }) {
  return (
    <div className='inline-flex gap-2 items-center text-center mb-3 text-[35px] md:text-[40px] font-semibold'>
      <p className='text-[#1F2937]'>
        {text1} <span className='text-[#0EA5E9]'>{text2}</span>
      </p>
    </div>
  )
}

export default Title
