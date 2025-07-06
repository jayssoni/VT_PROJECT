import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({ name, image, id, price }) {
    const { currency } = useContext(shopDataContext)
    const navigate = useNavigate()

    return (
        <div
            className='w-[320px] max-w-[90%] h-[420px] bg-white/90 backdrop-blur-lg rounded-3xl border border-gray-200/50 shadow-xl p-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-3 active:scale-95 group'
            onClick={() => navigate(`/productdetail/${id}`)}
        >
            <div className='w-full h-[75%] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-100 transition-all duration-500 group-hover:shadow-xl'>
                <img
                    src={image}
                    alt={name}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
            </div>

            <div className='pt-4 w-full'>
                <div className='text-gray-800 text-[18px] font-medium leading-tight line-clamp-2 transition-colors duration-300 group-hover:text-blue-600'>
                    {name}
                </div>
                <div className='flex items-center justify-between mt-3'>
                    <div className='text-[16px] font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                        {currency} {price}
                    </div>
                    <div className='w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:shadow-xl'>
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
