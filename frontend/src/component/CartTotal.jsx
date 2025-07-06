import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import Title from './Title'

function CartTotal() {
    const {currency , delivery_fee , getCartAmount} = useContext(shopDataContext)
    const subtotal = getCartAmount()
    const total = subtotal === 0 ? 0 : subtotal + delivery_fee
    
    return (
        <div className='w-full lg:ml-8 max-w-md'>
            {/* Header */}
            <div className='bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 shadow-lg border border-gray-200/50 backdrop-blur-sm mb-6'>
                <Title text1={'CART'} text2={'TOTALS'}/>
                <p className='text-gray-600 text-sm mt-2'>Review your order summary</p>
            </div>

            {/* Cart Summary Card */}
            <div className='bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden'>
                {/* Header with gradient */}
                <div className='bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white'>
                    <h3 className='text-xl font-bold'>Order Summary</h3>
                    <p className='text-blue-100 text-sm'>Final pricing breakdown</p>
                </div>

                {/* Content */}
                <div className='p-6 space-y-4'>
                    {/* Subtotal */}
                    <div className='flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-gray-200/50'>
                        <div className='flex items-center gap-2'>
                            <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                            <span className='text-gray-700 font-medium'>Subtotal</span>
                        </div>
                        <span className='text-gray-900 font-semibold text-lg'>
                            {currency} {subtotal}.00
                        </span>
                    </div>

                    {/* Divider */}
                    <div className='flex items-center gap-4'>
                        <div className='flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
                        <span className='text-gray-400 text-xs'>+</span>
                        <div className='flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
                    </div>

                    {/* Shipping Fee */}
                    <div className='flex justify-between items-center p-4 bg-blue-50 rounded-2xl border border-blue-200/50'>
                        <div className='flex items-center gap-2'>
                            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                            <span className='text-gray-700 font-medium'>Shipping Fee</span>
                        </div>
                        <span className='text-gray-900 font-semibold text-lg'>
                            {currency} {delivery_fee}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className='flex items-center gap-4'>
                        <div className='flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
                        <span className='text-gray-400 text-xs'>=</span>
                        <div className='flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent'></div>
                    </div>

                    {/* Total */}
                    <div className='p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white shadow-lg'>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center gap-2'>
                                <div className='w-3 h-3 bg-yellow-400 rounded-full animate-pulse'></div>
                                <span className='text-white font-bold text-lg'>Total Amount</span>
                            </div>
                            <span className='text-white font-bold text-2xl'>
                                {currency} {total}
                            </span>
                        </div>
                        <p className='text-blue-100 text-sm mt-2'>
                            {subtotal === 0 ? 'Add items to continue' : 'Inclusive of all taxes'}
                        </p>
                    </div>

                    {/* Additional Info */}
                    <div className='bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl border border-green-200/50'>
                        <div className='flex items-center gap-2 mb-2'>
                            <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                            <span className='text-green-700 font-semibold text-sm'>Free Benefits</span>
                        </div>
                        <ul className='text-green-600 text-sm space-y-1'>
                            <li>• 7-day return policy</li>
                            <li>• Quality guarantee</li>
                            <li>• 24/7 customer support</li>
                        </ul>
                    </div>

                    {/* Savings Badge */}
                    {subtotal > 500 && (
                        <div className='bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-2xl text-center shadow-lg'>
                            <div className='flex items-center justify-center gap-2 mb-1'>
                                <span className='text-lg'>🎉</span>
                                <span className='font-bold'>Congratulations!</span>
                            </div>
                            <p className='text-sm'>You saved {currency} {Math.floor(subtotal * 0.1)} on this order!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CartTotal