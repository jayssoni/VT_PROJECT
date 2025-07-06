import React from 'react'

function NewLetterBox() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="w-full bg-[#F9FAFB] py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg px-6 py-10 flex flex-col items-center text-center gap-6 border border-gray-200">
        
        {/* Title */}
        <h2 className="text-[26px] md:text-[32px] font-bold text-[#0EA5E9] tracking-tight">
          Subscribe & Get 20% OFF
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-sm md:text-base max-w-[500px]">
          Sign up for our newsletter to receive exclusive offers, first looks at new arrivals, and more!
        </p>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col sm:flex-row gap-4 items-center justify-center"
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-full sm:w-[70%] px-5 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-[#0EA5E9] focus:outline-none text-sm text-gray-800 shadow-sm"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-medium transition duration-300 shadow-md"
          >
            Subscribe
          </button>
        </form>

      </div>
    </div>
  )
}

export default NewLetterBox
