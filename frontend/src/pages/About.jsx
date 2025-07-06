import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.jpg'
import NewLetterBox from '../component/NewLetterBox'

function About() {
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-[#F0F4F8] via-[#FAFAFA] to-[#F9FAFB] text-[#1F2937] pt-[80px]'>
      {/* Section Title */}
      <Title text1="ABOUT" text2="US" />

      {/* Main Content */}
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center px-4 gap-10 mt-8'>

        {/* Image */}
        <div className='lg:w-1/2 w-full flex justify-center'>
          <img
            src={about}
            alt="about"
            className='w-[80%] lg:w-[70%] rounded-2xl shadow-xl border border-gray-200'
          />
        </div>

        {/* About Text */}
        <div className='lg:w-1/2 w-full mt-6 lg:mt-0 flex flex-col gap-4'>
          <p className='text-sm md:text-base lg:w-[90%] text-gray-700'>
            OneCart is born for smart, seamless shopping — created to deliver quality products, trending styles, and everyday essentials in one place. With reliable service, fast delivery, and great value, OneCart makes your online shopping experience simple, satisfying, and stress-free.
          </p>
          <p className='text-sm md:text-base lg:w-[90%] text-gray-700'>
            We blend style, convenience, and affordability. Whether it’s fashion, essentials, or trends — everything you need is on one trusted platform with quick delivery and easy returns.
          </p>
          <h2 className='text-lg font-semibold text-[#2563EB]'>Our Mission</h2>
          <p className='text-sm md:text-base lg:w-[90%] text-gray-700'>
            Our mission is to redefine online shopping by offering quality, affordability, and convenience. OneCart connects customers with trusted products and brands — making your journey smooth and valuable.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='w-full mt-20'>
        <Title text1="WHY" text2="CHOOSE US" />
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10'>

          {/* Box 1 */}
          <div className='bg-white shadow-md rounded-2xl p-6 text-center hover:scale-[1.02] transition-transform border border-[#E5E7EB]'>
            <h3 className='text-[#2563EB] font-semibold text-lg mb-2'>Quality Assurance</h3>
            <p className='text-sm text-gray-600'>
              We guarantee quality through strict checks, reliable sourcing, and a commitment to your satisfaction always.
            </p>
          </div>

          {/* Box 2 */}
          <div className='bg-white shadow-md rounded-2xl p-6 text-center hover:scale-[1.02] transition-transform border border-[#E5E7EB]'>
            <h3 className='text-[#2563EB] font-semibold text-lg mb-2'>Convenience</h3>
            <p className='text-sm text-gray-600'>
              Shop easily with fast delivery, smooth navigation, secure checkout, and all your needs at one place.
            </p>
          </div>

          {/* Box 3 */}
          <div className='bg-white shadow-md rounded-2xl p-6 text-center hover:scale-[1.02] transition-transform border border-[#E5E7EB]'>
            <h3 className='text-[#2563EB] font-semibold text-lg mb-2'>Exceptional Service</h3>
            <p className='text-sm text-gray-600'>
              Our dedicated team ensures fast replies, helpful support, and an experience that feels personal and professional.
            </p>
          </div>

        </div>
      </div>

      {/* Newsletter */}
      <NewLetterBox />
    </div>
  )
}

export default About
