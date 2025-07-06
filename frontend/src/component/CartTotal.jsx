import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'

function CartTotal() {
    const {currency, delivery_fee, getCartAmount} = useContext(shopDataContext)
    const subtotal = getCartAmount()
    const total = subtotal === 0 ? 0 : subtotal + delivery_fee
    const discount = subtotal > 500 ? Math.floor(subtotal * 0.1) : 0
    
    return (
        <div className='w-full bg-white rounded shadow-sm border border-gray-200 p-4'>
            {/* Header */}
            <div className='pb-4 border-b border-gray-200'>
                <h3 className='text-lg font-medium text-gray-800'>PRICE DETAILS</h3>
            </div>

            {/* Price Breakdown */}
            <div className='py-4 space-y-3 border-b border-gray-200'>
                {/* Price Row */}
                <div className='flex justify-between'>
                    <span className='text-gray-600'>Price ({subtotal === 0 ? 0 : 1} item)</span>
                    <span className='text-gray-800'>{currency}{subtotal.toFixed(2)}</span>
                </div>

                {/* Discount Row */}
                {discount > 0 && (
                    <div className='flex justify-between'>
                        <span className='text-gray-600'>Discount</span>
                        <span className='text-green-600'>-{currency}{discount.toFixed(2)}</span>
                    </div>
                )}

                {/* Delivery Row */}
                <div className='flex justify-between'>
                    <span className='text-gray-600'>Delivery Charges</span>
                    <span className={subtotal === 0 ? 'text-gray-800' : 'text-green-600'}>
                        {subtotal === 0 ? currency + '0.00' : 'FREE'}
                    </span>
                </div>
            </div>

            {/* Total Amount */}
            <div className='py-4 flex justify-between'>
                <span className='text-lg font-medium text-gray-800'>Total Amount</span>
                <span className='text-lg font-medium text-gray-800'>
                    {currency}{(total - discount).toFixed(2)}
                </span>
            </div>

            {/* Savings Banner */}
            {discount > 0 && (
                <div className='py-2 text-green-600 font-medium text-sm'>
                    You will save {currency}{discount.toFixed(2)} on this order
                </div>
            )}

            {/* Checkout Button */}
            <button 
                className={`w-full py-3 rounded text-white font-medium mt-2 ${
                    subtotal === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                }`}
                disabled={subtotal === 0}
            >
                {subtotal === 0 ? 'ADD ITEMS TO CONTINUE' : 'PLACE ORDER'}
            </button>

            {/* Secure Payment Info */}
            <div className='flex items-center justify-center gap-1 mt-4 pt-4 border-t border-gray-200'>
                <svg className='w-5 h-5 text-gray-500' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className='text-xs text-gray-500'>Safe and Secure Payments</span>
            </div>
        </div>
    )
}

export default CartTotal