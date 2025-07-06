import React from 'react'
import Title from '../component/Title'
import contact from '../assets/contact.jpg'
import NewLetterBox from '../component/NewLetterBox'

function Contact() {
  return (
    <div className='w-full min-h-screen bg-[#F9FAFB] pt-20 flex flex-col items-center gap-14 px-4 md:px-10'>
      <Title text1={'CONTACT'} text2={'US'} />

      <div className='w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12'>

        {/* Left: Image */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img
            src={contact}
            alt="Contact"
            className='w-[85%] rounded-xl shadow-lg'
          />
        </div>

        {/* Right: Contact Info */}
        <div className='w-full lg:w-1/2 flex flex-col gap-6 bg-white rounded-xl p-6 md:p-10 shadow-md text-[#1F2937]'>

          {/* Store Location */}
          <div>
            <h3 className='text-xl font-semibold text-[#0EA5E9] mb-1'>Our Store</h3>
            <p className='text-sm text-[#374151] leading-6'>
              12345 Random Station<br />
              Random City, State, India
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className='text-xl font-semibold text-[#0EA5E9] mb-1'>Contact</h3>
            <p className='text-sm text-[#374151] leading-6'>
              Tel: +91-9876543210<br />
              Email: admin@onecart.com
            </p>
          </div>

          {/* Career Section */}
          <div>
            <h3 className='text-xl font-semibold text-[#0EA5E9] mb-1'>Careers at OneCart</h3>
            <p className='text-sm text-[#374151] mb-4 leading-6'>
              Learn more about our teams and job openings.
            </p>
            <button className='bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-sm px-6 py-2 rounded-lg shadow-md transition'>
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      <NewLetterBox />
    </div>
  )
}

export default Contact
