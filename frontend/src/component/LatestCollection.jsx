import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function LatestCollection() {
    let {products} = useContext(shopDataContext)
    let [latestProducts, setLatestProducts] = useState([])

    useEffect(() => {
        setLatestProducts(products.slice(0, 8));
    }, [products])

    return (
        <div className='w-full bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16 px-4 relative overflow-hidden'>
            {/* Background decorations */}
            <div className='absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5'></div>
            <div className='absolute top-20 left-10 w-32 h-32 bg-purple-200/40 rounded-full blur-2xl animate-pulse'></div>
            <div className='absolute bottom-20 right-10 w-40 h-40 bg-pink-200/40 rounded-full blur-2xl animate-pulse' style={{animationDelay: '1s'}}></div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl'></div>

            <div className='max-w-7xl mx-auto relative z-10'>
                {/* Header Section */}
                <div className='text-center mb-16'>
                    <div className='inline-block relative'>
                        {/* New Badge */}
                        <div className='absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-bounce'>
                            ✨ NEW
                        </div>
                        
                        {/* Title Container */}
                        <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-purple-200/50'>
                            <Title text1={"LATEST"} text2={"COLLECTIONS"}/>
                            <p className='text-gray-600 text-lg md:text-xl mt-4 font-medium'>
                                Step Into Style – New Collection Dropping This Season!
                            </p>
                            
                            {/* Feature Tags */}
                            <div className='flex flex-wrap justify-center gap-3 mt-6'>
                                <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md'>
                                    Trending Now
                                </span>
                                <span className='bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md'>
                                    Limited Edition
                                </span>
                                <span className='bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md'>
                                    Fresh Arrivals
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {latestProducts.map((item, index) => (
                        <div 
                            key={index} 
                            className='group relative transform hover:scale-105 transition-all duration-500'
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            {/* New Label */}
                            <div className='absolute -top-2 -right-2 z-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg'>
                                NEW
                            </div>

                            {/* Card Container */}
                            <div className='relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-purple-200/50 hover:shadow-2xl transition-all duration-500 hover:bg-white/80 overflow-hidden'>
                                {/* Background Gradient */}
                                <div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500'></div>
                                
                                {/* Shine Effect */}
                                <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000'></div>

                                {/* Card Content */}
                                <div className='relative z-10'>
                                    <Card 
                                        name={item.name} 
                                        image={item.image1} 
                                        id={item._id} 
                                        price={item.price}
                                    />
                                </div>

                                {/* Hover Border Effect */}
                                <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'></div>
                            </div>

                            {/* Launch Date */}
                            <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500'>
                                🚀 Just Launched
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className='text-center mt-16'>
                    <div className='bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-purple-200/50'>
                        <h3 className='text-2xl font-bold text-gray-800 mb-4'>
                            Be the First to Own the Latest Trends
                        </h3>
                        <p className='text-gray-600 text-lg mb-6 max-w-2xl mx-auto'>
                            Don't miss out on our fresh arrivals! These exclusive pieces are flying off the shelves. 
                            Get yours before they're gone!
                        </p>
                        
                        {/* Call to Action Button */}
                        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                            <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-purple-600 hover:to-pink-600'>
                                Shop New Collection →
                            </button>
                            <button className='bg-white/80 text-gray-700 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-purple-200/50 hover:bg-white'>
                                View All Products
                            </button>
                        </div>
                        
                        {/* Additional Info */}
                        <div className='flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500'>
                            <div className='flex items-center gap-2'>
                                <span className='text-green-500'>✓</span>
                                Free Shipping Over $50
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-green-500'>✓</span>
                                30-Day Returns
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='text-green-500'>✓</span>
                                Premium Quality
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestCollection