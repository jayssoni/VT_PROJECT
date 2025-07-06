import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import CartTotal from '../component/CartTotal';

function Cart() {
    const { products, currency, cartItem, updateQuantity } = useContext(shopDataContext)
    const [cartData, setCartData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const tempData = [];
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                if (cartItem[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItem[items][item],
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItem]);

    const increaseQuantity = (id, size, currentQty) => {
        updateQuantity(id, size, currentQty + 1)
    }

    const decreaseQuantity = (id, size, currentQty) => {
        if (currentQty > 1) {
            updateQuantity(id, size, currentQty - 1)
        }
    }

    return (
        <div className='w-full min-h-screen bg-gray-100 pt-4 pb-10'>
            {/* Header */}
            <div className='bg-white shadow-sm'>
                <div className='max-w-6xl mx-auto px-4 py-3 flex items-center'>
                    <h1 className='text-2xl font-medium text-gray-800'>My Cart ({cartData.length})</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className='max-w-6xl mx-auto px-4 py-4 flex flex-col lg:flex-row gap-4'>
                {/* Cart Items Section */}
                <div className='lg:w-3/4'>
                    {cartData.length === 0 ? (
                        <div className='bg-white rounded shadow p-8 text-center'>
                            <div className='text-gray-500 mb-4'>Your cart is empty</div>
                            <button 
                                onClick={() => navigate('/')}
                                className='bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700'
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className='bg-white rounded shadow divide-y'>
                            {cartData.map((item, index) => {
                                const productData = products.find((product) => product._id === item._id);
                                
                                return (
                                    <div key={index} className='p-4 flex flex-col sm:flex-row gap-4'>
                                        {/* Product Image */}
                                        <div className='w-full sm:w-32 flex-shrink-0'>
                                            <img 
                                                className='w-full h-32 object-contain' 
                                                src={productData.image1} 
                                                alt={productData.name} 
                                            />
                                        </div>
                                        
                                        {/* Product Details */}
                                        <div className='flex-1'>
                                            <h3 className='text-lg font-medium text-gray-800 mb-1'>{productData.name}</h3>
                                            <p className='text-gray-600 text-sm mb-2'>Size: {item.size}</p>
                                            <p className='text-lg font-bold text-gray-900 mb-3'>
                                                {currency} {productData.price}
                                            </p>
                                            
                                            {/* Quantity Controls */}
                                            <div className='flex items-center gap-2 mb-3'>
                                                <span className='text-sm text-gray-600'>Quantity:</span>
                                                <div className='flex items-center border border-gray-300 rounded'>
                                                    <button 
                                                        onClick={() => decreaseQuantity(item._id, item.size, item.quantity)}
                                                        className='px-2 py-1 text-gray-600 hover:bg-gray-100'
                                                    >
                                                        <FiChevronDown size={16} />
                                                    </button>
                                                    <span className='px-3 py-1 text-center w-10'>{item.quantity}</span>
                                                    <button 
                                                        onClick={() => increaseQuantity(item._id, item.size, item.quantity)}
                                                        className='px-2 py-1 text-gray-600 hover:bg-gray-100'
                                                    >
                                                        <FiChevronUp size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                            
                                            {/* Actions */}
                                            <div className='flex gap-4'>
                                                <button 
                                                    onClick={() => updateQuantity(item._id, item.size, 0)}
                                                    className='flex items-center gap-1 text-red-600 hover:text-red-800 text-sm'
                                                >
                                                    <RiDeleteBin6Line size={16} />
                                                    <span className='cursor-pointer'>Remove</span>
                                                </button>
                                            </div>
                                        </div>
                                        
                                        {/* Price */}
                                        <div className='w-full sm:w-40 flex-shrink-0 flex sm:flex-col justify-between'>
                                            <div className='text-right sm:text-left'>
                                                <p className='text-gray-500 text-sm'>Delivery in 3-5 days</p>
                                            </div>
                                            <div className='text-lg font-bold text-gray-900 text-right'>
                                                {currency} {(productData.price * item.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
                
                {/* Price Summary - Only shown when cart has items */}
                {cartData.length > 0 && (
                    <div className='lg:w-1/4'>
                        <div className='bg-white rounded shadow p-4 sticky top-4'>
                            <h3 className='text-lg font-medium text-gray-800 mb-4'>PRICE DETAILS</h3>
                            <CartTotal />
                            
                            <div className='mt-4 pt-4 border-t border-gray-200'>
                                <p className='text-green-600 font-medium'>You will save on this order</p>
                            </div>
                            
                            <button 
                                onClick={() => navigate("/placeorder")}
                                className='w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded shadow-md transition-colors'
                            >
                                PLACE ORDER
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart