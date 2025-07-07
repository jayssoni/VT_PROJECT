import React, { useContext } from 'react';
import { shopDataContext } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

function Card({ name, image, id, price }) {
  const { currency } = useContext(shopDataContext);
  const navigate = useNavigate();

  return (
    <div
      className="w-[400px] max-w-[95%] h-[420px] bg-white/90 rounded-3xl border border-gray-200 shadow-xl p-6 cursor-pointer hover:scale-105 hover:shadow-2xl hover:-translate-y-3 active:scale-95 transition-all duration-500"
      onClick={() => navigate(`/productdetail/${id}`)}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-[75%] rounded-2xl object-cover"
      />
      <div className="pt-4">
        <div className="text-gray-800 text-lg font-medium line-clamp-2">
          {name}
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="text-lg font-semibold text-blue-600">
            {currency} {price}
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;