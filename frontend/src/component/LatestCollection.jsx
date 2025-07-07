import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { shopDataContext } from '../context/ShopContext';
import Card from './Card';

function LatestCollection() {
  let { products } = useContext(shopDataContext);
  let [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 8));
  }, [products]);

  return (
    <div className="w-full max-w-[1800px] mx-auto bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/40 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-200/40 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            {/* Title Container */}
            <div className="bg-white rounded-xl p-6 border border-gray-300">
              <Title text1={"LATEST"} text2={"COLLECTIONS"} />
              <p className="text-gray-600 text-lg mt-4">
                Step Into Style – New Collection Dropping This Season!
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <span className="bg-purple-500 text-white px-4 py-1 rounded-md text-sm font-medium">
                  Trending Now
                </span>
                <span className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm font-medium">
                  Limited Edition
                </span>
                <span className="bg-pink-500 text-white px-4 py-1 rounded-md text-sm font-medium">
                  Fresh Arrivals
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {latestProducts.map((item, index) => (
            <div
              key={index}
              className="group relative transform hover:scale-105 transition-all duration-300"
            >
              <Card
                name={item.name}
                image={item.image1}
                id={item._id}
                price={item.price}
              />
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-10 border border-gray-300 max-w-[800px] mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Be the First to Own the Latest Trends
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Don't miss out on our fresh arrivals! These exclusive pieces are flying off the shelves. Get yours before they're gone!
            </p>

            {/* Call to Action Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-purple-500 text-white px-10 py-3 rounded-full font-semibold text-lg hover:bg-purple-600 transition-all duration-300">
                Shop New Collection →
              </button>
              <button className="bg-white text-gray-700 px-10 py-3 rounded-full font-semibold text-lg border border-gray-300 hover:bg-gray-100 transition-all duration-300">
                View All Products
              </button>
            </div>

            {/* Additional Info */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Free Shipping Over $50
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                30-Day Returns
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Premium Quality
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestCollection;