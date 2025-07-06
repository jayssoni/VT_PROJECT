import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { shopDataContext } from '../context/ShopContext'
import Card from './Card'

function BestSeller() {
  const { products } = useContext(shopDataContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const filterProduct = products.filter((item) => item.bestseller)
    setBestSeller(filterProduct.slice(0, 4))
  }, [products])

  return (
    <div className='w-full bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 px-4 relative overflow-hidden'>
      {/* Background decorations */}
      <div className='absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-pink-500/5'></div>
      <div className='absolute top-10 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl'></div>
      <div className='absolute bottom-10 left-10 w-40 h-40 bg-red-200/30 rounded-full blur-2xl'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-100/20 to-orange-100/20 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='inline-block relative'>
            {/* Badge */}
            <div className='absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg animate-pulse'>
              🔥 HOT
            </div>
            
            {/* Title Container */}
            <div className='bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50'>
              <Title text1={"BEST"} text2={"SELLERS"} />
              <p className='text-gray-600 text-lg md:text-xl mt-4 font-medium'>
                Tried, Tested, Loved – Discover Our All-Time Best Sellers.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {bestSeller.map((item, index) => (
            <div 
              key={index} 
              className='group relative transform hover:scale-105 transition-all duration-500'
            >
              {/* Bestseller Badge */}
              <div className='absolute -top-2 -right-2 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce'>
                #{index + 1} Best
              </div>

              {/* Card Container */}
              <div className='relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:bg-white/80'>
                {/* Background Gradient */}
                <div className='absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500'></div>
                
                {/* Rank Display */}
                <div className='absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg'>
                  {index + 1}
                </div>

                {/* Card Content */}
                <div className='relative z-10 mt-4'>
                  <Card 
                    name={item.name} 
                    id={item._id} 
                    price={item.price} 
                    image={item.image1} 
                  />
                </div>

                {/* Hover Border Effect */}
                <div className='absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none'></div>
              </div>

              {/* Sales Stats */}
              <div className='absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500'>
                🔥 {1000 - index * 150}+ sold
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-200/50'>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>
              Why Are These Our Best Sellers?
            </h3>
            <p className='text-gray-600 text-lg mb-6 max-w-2xl mx-auto'>
              Thousands of customers can't be wrong! These products consistently receive 5-star reviews and keep flying off our shelves.
            </p>
            <div className='flex justify-center items-center gap-6 text-sm font-semibold'>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                <span className='text-gray-700'>Premium Quality</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
                <span className='text-gray-700'>Fast Delivery</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-3 h-3 bg-orange-500 rounded-full'></div>
                <span className='text-gray-700'>Best Price</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestSeller