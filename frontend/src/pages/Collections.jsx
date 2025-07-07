import React, { useContext, useEffect, useState } from 'react';
import Title from '../component/Title';
import { shopDataContext } from '../context/ShopContext';
import Card from '../component/Card';
import { FiFilter, FiX, FiArrowDown } from 'react-icons/fi';

function Collections() {
  const [showFilter, setShowFilter] = useState(false);
  const { products, search, showSearch } = useContext(shopDataContext);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const priceSteps = [10, 200, 500, 1000, 3000, 5000, 10000, 20000, 50000];
  const [priceIndex, setPriceIndex] = useState(priceSteps.length - 1);

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const applyFilter = () => {
    let copy = products.slice();
    if (showSearch && search) {
      copy = copy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      copy = copy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      copy = copy.filter(item => subCategory.includes(item.subCategory));
    }

    const selectedPrice = priceSteps[priceIndex];
    copy = copy.filter(item => item.price <= selectedPrice);
    setFilterProduct(copy);
  };

  const sortProducts = () => {
    let copy = filterProduct.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProduct(copy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProduct(copy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch, priceIndex]);

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#f0f4f8] via-[#e0e7ff] to-[#c7d2fe] pt-[70px] text-gray-800 relative overflow-hidden'>
      {/* Subtle Background Decoration */}
      <div className='absolute top-0 left-0 w-1/3 h-1/3 bg-purple-200/20 rounded-full blur-3xl -z-10'></div>
      <div className='absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-200/20 rounded-full blur-3xl -z-10'></div>

      {/* Mobile Filter Button */}
      <div className='lg:hidden fixed bottom-6 right-6 z-20'>
        <button 
          onClick={() => setShowFilter(!showFilter)}
          className='bg-gradient-to-r from-purple-600 to-blue-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300'
        >
          {showFilter ? <FiX size={24} /> : <FiFilter size={24} />}
        </button>
      </div>

      <div className='flex flex-col lg:flex-row mx-auto max-w-[2000px]'>
        {/* Sidebar Filter - Desktop */}
        <div className='hidden lg:block w-full lg:w-1/5 px-6 py-8'>
          <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-[80px]'>
            <div className='text-xl font-bold text-gray-900 flex items-center'>
              <FiFilter className='mr-2 text-purple-600' /> FILTERS
            </div>

            <div className='mt-6'>
              <div className='mb-6'>
                <p className='text-sm font-semibold text-gray-700 mb-3'>CATEGORIES</p>
                {['Men', 'Women', 'Kids'].map(cat => (
                  <label key={cat} className='flex items-center text-sm mb-2 text-gray-600'>
                    <input
                      type="checkbox"
                      value={cat}
                      onChange={toggleCategory}
                      className='mr-3 h-4 w-4 accent-purple-600'
                    />
                    {cat}
                  </label>
                ))}
              </div>

              <div className='mb-6'>
                <p className='text-sm font-semibold text-gray-700 mb-3'>SUB-CATEGORIES</p>
                {['TopWear', 'BottomWear', 'WinterWear'].map(sub => (
                  <label key={sub} className='flex items-center text-sm mb-2 text-gray-600'>
                    <input
                      type="checkbox"
                      value={sub}
                      onChange={toggleSubCategory}
                      className='mr-3 h-4 w-4 accent-purple-600'
                    />
                    {sub}
                  </label>
                ))}
              </div>

              <div className='mb-6'>
                <p className='text-sm font-semibold text-gray-700 mb-3'>PRICE RANGE</p>
                <input
                  type='range'
                  min={0}
                  max={priceSteps.length - 1}
                  step={1}
                  value={priceIndex}
                  onChange={(e) => setPriceIndex(Number(e.target.value))}
                  className='w-full appearance-none h-2 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full outline-none cursor-pointer'
                />
                <p className='text-sm mt-2 text-gray-600'>Upto ₹{priceSteps[priceIndex]}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Filter Overlay */}
        {showFilter && (
          <div className='fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden'>
            <div className='absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white p-6 overflow-y-auto rounded-l-2xl shadow-lg'>
              <div className='flex justify-between items-center mb-6 border-b border-gray-200 pb-4'>
                <div className='text-xl font-bold text-gray-900'>FILTERS</div>
                <button onClick={() => setShowFilter(false)} className='text-gray-600 hover:text-gray-800'>
                  <FiX size={24} />
                </button>
              </div>

              <div className='mt-6'>
                <div className='mb-6'>
                  <p className='text-sm font-semibold text-gray-700 mb-3'>CATEGORIES</p>
                  {['Men', 'Women', 'Kids'].map(cat => (
                    <label key={cat} className='flex items-center text-sm mb-2 text-gray-600'>
                      <input
                        type="checkbox"
                        value={cat}
                        onChange={toggleCategory}
                        className='mr-3 h-4 w-4 accent-purple-600'
                      />
                      {cat}
                    </label>
                  ))}
                </div>

                <div className='mb-6'>
                  <p className='text-sm font-semibold text-gray-700 mb-3'>SUB-CATEGORIES</p>
                  {['TopWear', 'BottomWear', 'WinterWear'].map(sub => (
                    <label key={sub} className='flex items-center text-sm mb-2 text-gray-600'>
                      <input
                        type="checkbox"
                        value={sub}
                        onChange={toggleSubCategory}
                        className='mr-3 h-4 w-4 accent-purple-600'
                      />
                      {sub}
                    </label>
                  ))}
                </div>

                <div className='mb-6'>
                  <p className='text-sm font-semibold text-gray-700 mb-3'>PRICE RANGE</p>
                  <input
                    type='range'
                    min={0}
                    max={priceSteps.length - 1}
                    step={1}
                    value={priceIndex}
                    onChange={(e) => setPriceIndex(Number(e.target.value))}
                    className='w-full appearance-none h-2 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full outline-none cursor-pointer'
                  />
                  <p className='text-sm mt-2 text-gray-600'>Upto ₹{priceSteps[priceIndex]}</p>
                </div>
              </div>

              <button
                onClick={() => setShowFilter(false)}
                className='w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg mt-6 font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300'
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Products Section */}
        <div className='w-full lg:w-4/5 px-6 py-8'>
          <div className='flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-gray-200 pb-4'>
            <Title text1="ALL" text2="COLLECTIONS" />
            <div className='flex flex-col sm:flex-row gap-4 mt-4 md:mt-0'>
              <div className='text-sm text-gray-600 font-medium'>
                {filterProduct.length} products found
              </div>
              <div className='relative'>
                <select
                  onChange={(e) => setSortType(e.target.value)}
                  className='bg-white border border-gray-300 text-gray-700 rounded-lg px-4 py-2 w-full sm:w-[200px] appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-purple-600'
                >
                  <option value="relavent">Sort By: Relevance</option>
                  <option value="low-high">Sort By: Low to High</option>
                  <option value="high-low">Sort By: High to Low</option>
                </select>
                <FiArrowDown className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none' />
              </div>
            </div>
          </div>

          {filterProduct.length === 0 ? (
            <div className='text-center py-12'>
              <p className='text-lg text-gray-600 font-medium'>No products match your filters</p>
              <button 
                onClick={() => {
                  setCategory([]);
                  setSubCategory([]);
                  setPriceIndex(priceSteps.length - 1);
                }}
                className='mt-4 text-purple-600 font-semibold hover:text-purple-800 transition-colors duration-200'
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-2 mx-auto'>
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
  );
}

export default Collections;