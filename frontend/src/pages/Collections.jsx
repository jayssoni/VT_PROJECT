import React, { useContext, useEffect, useState } from 'react'
import Title from '../component/Title'
import { shopDataContext } from '../context/ShopContext'
import Card from '../component/Card'
import { FiFilter, FiX } from 'react-icons/fi'

function Collections() {
  const [showFilter, setShowFilter] = useState(false)
  const { products, search, showSearch } = useContext(shopDataContext)
  const [filterProduct, setFilterProduct] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relavent")

  const priceSteps = [10, 200, 500, 1000, 3000, 5000, 10000, 20000, 50000]
  const [priceIndex, setPriceIndex] = useState(priceSteps.length - 1)

  const toggleCategory = (e) => {
    const value = e.target.value
    setCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  const toggleSubCategory = (e) => {
    const value = e.target.value
    setSubCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  const applyFilter = () => {
    let copy = products.slice()
    if (showSearch && search) {
      copy = copy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }
    if (category.length > 0) {
      copy = copy.filter(item => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      copy = copy.filter(item => subCategory.includes(item.subCategory))
    }

    const selectedPrice = priceSteps[priceIndex]
    copy = copy.filter(item => item.price <= selectedPrice)
    setFilterProduct(copy)
  }

  const sortProducts = () => {
    let copy = filterProduct.slice()
    switch (sortType) {
      case 'low-high':
        setFilterProduct(copy.sort((a, b) => a.price - b.price))
        break
      case 'high-low':
        setFilterProduct(copy.sort((a, b) => b.price - a.price))
        break
      default:
        applyFilter()
        break
    }
  }

  useEffect(() => {
    sortProducts()
  }, [sortType])

  useEffect(() => {
    setFilterProduct(products)
  }, [products])

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch, priceIndex])

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] pt-[70px] text-gray-800'>
      {/* Mobile Filter Button */}
      <div className='lg:hidden fixed bottom-6 right-6 z-20'>
        <button 
          onClick={() => setShowFilter(!showFilter)}
          className='bg-white p-3 rounded-full shadow-lg flex items-center justify-center'
        >
          {showFilter ? <FiX size={24} /> : <FiFilter size={24} />}
        </button>
      </div>

      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row'>

        {/* Sidebar Filter - Desktop */}
        <div className='hidden lg:block w-full lg:w-1/5 px-4 py-6'>
          <div className='bg-white rounded-xl p-4 shadow-md sticky top-[80px]'>
            <div className='text-xl font-semibold text-gray-700'>FILTERS</div>

            <div className='mt-4'>
              <div className='mb-6'>
                <p className='text-sm font-semibold mb-2'>CATEGORIES</p>
                {['Men', 'Women', 'Kids'].map(cat => (
                  <label key={cat} className='flex items-center text-sm mb-1'>
                    <input
                      type="checkbox"
                      value={cat}
                      onChange={toggleCategory}
                      className='mr-2 h-4 w-4'
                    />
                    {cat}
                  </label>
                ))}
              </div>

              <div className='mb-6'>
                <p className='text-sm font-semibold mb-2'>SUB-CATEGORIES</p>
                {['TopWear', 'BottomWear', 'WinterWear'].map(sub => (
                  <label key={sub} className='flex items-center text-sm mb-1'>
                    <input
                      type="checkbox"
                      value={sub}
                      onChange={toggleSubCategory}
                      className='mr-2 h-4 w-4'
                    />
                    {sub}
                  </label>
                ))}
              </div>

              <div className='mb-6'>
                <p className='text-sm font-semibold mb-2'>PRICE RANGE</p>
                <input
                  type='range'
                  min={0}
                  max={priceSteps.length - 1}
                  step={1}
                  value={priceIndex}
                  onChange={(e) => setPriceIndex(Number(e.target.value))}
                  className='w-full appearance-none h-2 bg-gray-300 rounded-full outline-none'
                />
                <p className='text-sm mt-2'>Upto ₹{priceSteps[priceIndex]}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Overlay */}
        {showFilter && (
          <div className='fixed inset-0 z-10 bg-black bg-opacity-50 lg:hidden'>
            <div className='absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white p-6 overflow-y-auto'>
              <div className='flex justify-between items-center mb-6'>
                <div className='text-xl font-semibold text-gray-700'>FILTERS</div>
                <button onClick={() => setShowFilter(false)}>
                  <FiX size={24} />
                </button>
              </div>

              <div className='mt-4'>
                <div className='mb-6'>
                  <p className='text-sm font-semibold mb-2'>CATEGORIES</p>
                  {['Men', 'Women', 'Kids'].map(cat => (
                    <label key={cat} className='flex items-center text-sm mb-1'>
                      <input
                        type="checkbox"
                        value={cat}
                        onChange={toggleCategory}
                        className='mr-2 h-4 w-4'
                      />
                      {cat}
                    </label>
                  ))}
                </div>

                <div className='mb-6'>
                  <p className='text-sm font-semibold mb-2'>SUB-CATEGORIES</p>
                  {['TopWear', 'BottomWear', 'WinterWear'].map(sub => (
                    <label key={sub} className='flex items-center text-sm mb-1'>
                      <input
                        type="checkbox"
                        value={sub}
                        onChange={toggleSubCategory}
                        className='mr-2 h-4 w-4'
                      />
                      {sub}
                    </label>
                  ))}
                </div>

                <div className='mb-6'>
                  <p className='text-sm font-semibold mb-2'>PRICE RANGE</p>
                  <input
                    type='range'
                    min={0}
                    max={priceSteps.length - 1}
                    step={1}
                    value={priceIndex}
                    onChange={(e) => setPriceIndex(Number(e.target.value))}
                    className='w-full appearance-none h-2 bg-gray-300 rounded-full outline-none'
                  />
                  <p className='text-sm mt-2'>Upto ₹{priceSteps[priceIndex]}</p>
                </div>
              </div>

              <button
                onClick={() => setShowFilter(false)}
                className='w-full bg-blue-600 text-white py-2 rounded-lg mt-4'
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Products Section */}
        <div className='w-full lg:w-4/5 px-4 py-6'>
          <div className='flex flex-col md:flex-row md:items-center justify-between mb-6'>
            <Title text1="ALL" text2="COLLECTIONS" />
            <div className='flex flex-col sm:flex-row gap-4 mt-4 md:mt-0'>
              <div className='text-sm text-gray-500'>
                {filterProduct.length} products found
              </div>
              <select
                onChange={(e) => setSortType(e.target.value)}
                className='bg-white border border-gray-300 text-gray-700 rounded-lg px-3 py-2 w-full sm:w-[200px] appearance-none'
              >
                <option value="relavent">Sort By: Relevance</option>
                <option value="low-high">Sort By: Low to High</option>
                <option value="high-low">Sort By: High to Low</option>
              </select>
            </div>
          </div>

          {filterProduct.length === 0 ? (
            <div className='text-center py-12'>
              <p className='text-lg text-gray-600'>No products match your filters</p>
              <button 
                onClick={() => {
                  setCategory([])
                  setSubCategory([])
                  setPriceIndex(priceSteps.length - 1)
                }}
                className='mt-4 text-blue-600 hover:underline'
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className='grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6'>
              {filterProduct.map((item, index) => (
                <Card
                  key={index}
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image1}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Collections