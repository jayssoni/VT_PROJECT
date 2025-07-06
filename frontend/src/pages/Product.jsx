import React from 'react'
import LatestCollection from '../component/LatestCollection'
import BestSeller from '../component/BestSeller'

function Product() {
  return (
    <div className='w-full min-h-screen bg-gray-50'>
      {/* Flipkart-style header banner */}
      <div className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 py-4'>
          <h1 className='text-2xl font-medium text-gray-800'>Our Products</h1>
          <p className='text-gray-600 text-sm mt-1'>Discover our latest collections and best sellers</p>
        </div>
      </div>

      {/* Main content container */}
      <div className='max-w-7xl mx-auto px-4 py-6'>
        {/* Latest Collection Section */}
        <div className='mb-10'>
          <div className='bg-white rounded-lg shadow-md p-4 mb-4'>
            <h2 className='text-xl font-semibold text-gray-800 border-b pb-2 mb-4'>Latest Collection</h2>
            <LatestCollection />
          </div>
        </div>

        {/* Best Sellers Section */}
        <div className='mb-10'>
          <div className='bg-white rounded-lg shadow-md p-4'>
            <h2 className='text-xl font-semibold text-gray-800 border-b pb-2 mb-4'>Best Sellers</h2>
            <BestSeller />
          </div>
        </div>

        {/* Flipkart-style promotional banner */}
        <div className='bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-4 text-white mb-10'>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='mb-4 md:mb-0'>
              <h3 className='text-xl font-bold mb-1'>Special Offers</h3>
              <p className='text-blue-100'>Get extra 10% off on first purchase</p>
            </div>
            <button className='bg-white text-blue-600 px-6 py-2 rounded font-medium hover:bg-blue-50 transition-colors'>
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Flipkart-style footer note */}
      <div className='bg-gray-100 border-t border-gray-200 py-6'>
        <div className='max-w-7xl mx-auto px-4 text-center text-gray-600 text-sm'>
          <p>© 2023 YourStore. All Rights Reserved.</p>
          <p className='mt-2'>Prices and availability are subject to change</p>
        </div>
      </div>
    </div>
  )
}

export default Product