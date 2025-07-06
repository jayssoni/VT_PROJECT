import React from 'react'
import Title from './Title'
import { RiExchangeFundsLine } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function OurPolicy() {
  const policies = [
    {
      icon: RiExchangeFundsLine,
      title: "Easy Exchange Policy",
      description: "Exchange Made Easy – Quick, Simple, and Customer-Friendly Process.",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: TbRosetteDiscountCheckFilled,
      title: "7 Days Return Policy",
      description: "Shop with Confidence – 7 Days Easy Return Guarantee.",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: BiSupport,
      title: "Best Customer Support",
      description: "Trusted Customer Support – Your Satisfaction Is Our Priority.",
      color: "from-green-400 to-emerald-400"
    }
  ];

  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 px-4 relative overflow-hidden'>
      {/* Background decorations */}
      <div className='absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5'></div>
      <div className='absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-2xl'></div>
      <div className='absolute bottom-20 right-10 w-40 h-40 bg-purple-200/30 rounded-full blur-2xl'></div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-100/20 to-blue-100/20 rounded-full blur-3xl'></div>
      
      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='mb-6'>
            <Title text1={"OUR"} text2={"POLICY"}/>
          </div>
          <p className='text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed'>
            Customer-Friendly Policies – Committed to Your Satisfaction and Safety.
          </p>
        </div>

        {/* Policy Cards Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12'>
          {policies.map((policy, index) => {
            const IconComponent = policy.icon;
            return (
              <div 
                key={index} 
                className='group relative bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/80'
              >
                {/* Card Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${policy.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className={`relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-gradient-to-br ${policy.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                  <IconComponent className='w-10 h-10 md:w-12 md:h-12 text-white' />
                </div>

                {/* Content */}
                <div className='text-center relative z-10'>
                  <h3 className='text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300'>
                    {policy.title}
                  </h3>
                  <p className='text-gray-600 text-base md:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300'>
                    {policy.description}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${policy.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className='text-center mt-16'>
          <div className='bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200/50 max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>
              Ready to Experience the Difference?
            </h3>
            <p className='text-gray-600 text-lg mb-6'>
              Join thousands of satisfied customers who trust OneCart for their shopping needs.
            </p>
            <button className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105'>
              Start Shopping Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy