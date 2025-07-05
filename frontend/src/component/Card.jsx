import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({name , image , id , price}) {
    let {currency} = useContext(shopDataContext)
    let navigate = useNavigate()
    
    return (
        <div 
            className='w-[320px] max-w-[90%] h-[420px] bg-white/90 backdrop-blur-lg rounded-3xl hover:scale-105 hover:shadow-2xl transition-all duration-500 flex items-start justify-start flex-col p-6 cursor-pointer border border-gray-200/50 shadow-xl group transform hover:-translate-y-3 active:scale-95' 
            onClick={()=>navigate(`/productdetail/${id}`)}
        >
            <div className='w-[100%] h-[75%] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:shadow-xl transition-all duration-500'>
                <img 
                    src={image} 
                    alt={name} 
                    className='w-[100%] h-[100%] object-cover group-hover:scale-110 transition-transform duration-700'
                />
            </div>
            
            <div className='flex-1 flex flex-col justify-between w-full pt-4'>
                <div className='text-gray-800 text-[18px] font-medium leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors duration-300'>
                    {name}
                </div>
                <div className='flex items-center justify-between mt-3'>
                    <div className='text-gray-900 text-[16px] font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                        {currency} {price}
                    </div>
                    <div className='w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300'>
                        <svg className='w-4 h-4 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card