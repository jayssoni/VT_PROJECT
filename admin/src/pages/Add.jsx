import React, { useContext } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import upload from '../assets/upload image.jpg'
import { useState } from 'react'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '../component/Loading'

function Add() {
  let [image1,setImage1] = useState(false)
  let [image2,setImage2] = useState(false)
  let [image3,setImage3] = useState(false)
  let [image4,setImage4] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Men")
  const [price, setPrice] = useState("")
  const [subCategory, setSubCategory] = useState("TopWear")
  const [bestseller, setBestSeller] = useState(false)
  const [sizes,setSizes] = useState([])
  const [loading,setLoading] = useState(false)
  let {serverUrl} = useContext(authDataContext)

  const handleAddProduct = async (e) => {
    setLoading(true)
    e.preventDefault()
    try {
      let formData = new FormData()
      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))
      formData.append("image1",image1)
      formData.append("image2",image2)
      formData.append("image3",image3)
      formData.append("image4",image4)

      let result = await axios.post(serverUrl + "/api/product/addproduct" , formData, {withCredentials:true} )

      console.log(result.data)
      toast.success("ADD Product Successfully")
      setLoading(false)

      if(result.data){
          setName("")
      setDescription("")
      setImage1(false)
      setImage2(false)
      setImage3(false)
      setImage4(false)
      setPrice("")
      setBestSeller(false)
      setCategory("Men")
      setSubCategory("TopWear")
      }

      
    } catch (error) {
       console.log(error)
       setLoading(false)
       toast.error("Add Product Failed")
    }

    
  }
  return (
    <div className='w-full min-h-screen bg-gradient-to-br from-cyan-50 via-white to-emerald-50 text-slate-800 overflow-x-hidden'>
      <Nav/>
      <Sidebar/>

      <div className='w-[82%] min-h-screen pt-[80px] pb-[40px] absolute right-0'>
        <div className='max-w-[1200px] mx-auto px-6'>
          <form onSubmit={handleAddProduct} className='w-full bg-gradient-to-br from-white to-cyan-50/30 rounded-lg shadow-xl p-8 border-2 border-gray-400'>
            <h1 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-8 border-b-2 border-gray-300 pb-4'>
              Add Product
            </h1>

            <div className='space-y-8'>
              {/* Image Upload Section */}
              <div className='space-y-4'>
                <p className='text-lg md:text-xl font-semibold text-slate-800'>
                  Upload Images
                </p>
                <div className='flex flex-wrap gap-4'>
                  {[{state: image1, setter: setImage1}, {state: image2, setter: setImage2},
                    {state: image3, setter: setImage3}, {state: image4, setter: setImage4}].map((img, index) => (
                    <label key={index} htmlFor={`image${index + 1}`}
                      className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] relative group
                        cursor-pointer transition-transform duration-300 hover:scale-105'>
                      <div className='absolute inset-0 rounded-xl bg-blue-500/20 opacity-0
                        group-hover:opacity-100 transition-opacity duration-300'/>
                      <img
                        src={!img.state ? upload : URL.createObjectURL(img.state)}
                        alt=""
                        className='w-full h-full object-cover rounded-xl border-2
                          border-gray-200 group-hover:border-blue-500 transition-colors duration-300'
                      />
                      <input type="file" id={`image${index + 1}`} hidden
                        onChange={(e) => img.setter(e.target.files[0])} required />
                    </label>
                  ))}
                </div>
              </div>

              {/* Text Input Fields */}
              <div className='grid md:grid-cols-2 gap-6'>
                <div className='space-y-4'>
                  <p className='text-lg font-semibold text-cyan-700'>Product Name</p>
                  <input
                    type="text"
                    placeholder='Type here'
                    className='w-full h-12 rounded-lg bg-white px-4 text-base
                      border-2 border-gray-400 focus:border-cyan-500 focus:outline-none
                      transition-all duration-300 placeholder:text-slate-400'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                </div>

                <div className='space-y-4'>
                  <p className='text-lg font-semibold text-gray-800'>Product Price</p>
                  <input
                    type="number"
                    placeholder='₹ 2000'
                    className='w-full h-12 rounded-lg bg-white px-4 text-base
                      border-2 border-gray-400 focus:border-emerald-500 focus:outline-none
                      transition-colors duration-200 placeholder:text-gray-400'
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    required
                  />
                </div>
              </div>

              {/* Description Field */}
              <div className='space-y-4'>
                <p className='text-lg font-semibold text-gray-800'>Product Description</p>
                <textarea
                  placeholder='Type here'
                  className='w-full h-32 rounded-lg bg-white p-4 text-base
                    border-2 border-gray-400 focus:border-cyan-500 focus:outline-none
                    transition-colors duration-200 placeholder:text-gray-400 resize-none'
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                />
              </div>

              {/* Category Selectors */}
              <div className='grid md:grid-cols-2 gap-6'>
                {[
                  {label: 'Product Category', value: category, setter: setCategory, options: ['Men', 'Women', 'Kids']},
                  {label: 'Sub-Category', value: subCategory, setter: setSubCategory, options: ['TopWear', 'BottomWear', 'WinterWear']}
                ].map((select, index) => (
                  <div key={index} className='space-y-4'>
                    <p className='text-lg font-semibold text-gray-800'>{select.label}</p>
                    <select
                      value={select.value}
                      onChange={(e) => select.setter(e.target.value)}
                      className='w-full h-12 rounded-lg bg-white px-4 text-base
                        border-2 border-gray-400 focus:border-emerald-500 focus:outline-none
                        transition-colors duration-200'
                    >
                      {select.options.map(opt => (
                        <option key={opt} value={opt} className='bg-white text-gray-800'>{opt}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>

              {/* Size Selector */}
              <div className='space-y-4'>
                <p className='text-lg font-semibold text-gray-800'>Product Size</p>
                <div className='flex flex-wrap gap-3'>
                  {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button
                      type="button"
                      key={size}
                      onClick={() => setSizes(prev =>
                        prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size]
                      )}
                      className={`h-12 px-6 rounded-lg text-base font-medium border-2
                        transition-all duration-200 ${sizes.includes(size)
                          ? 'bg-gray-700 text-white shadow-sm border-gray-600'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-400'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bestseller Checkbox */}
              <div className='flex items-center gap-3'>
                <input
                  type="checkbox"
                  id='bestseller'
                  className='w-5 h-5 rounded border-gray-300 bg-white
                    checked:bg-gray-700 checked:border-0 transition-colors duration-200
                    focus:ring-offset-0 focus:ring-0'
                  onChange={() => setBestSeller(prev => !prev)}
                  checked={bestseller}
                />
                <label htmlFor="bestseller" className='text-lg font-semibold text-gray-800'>
                  Add to BestSeller
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className='h-12 px-8 rounded-lg bg-gray-700 border-2 border-gray-600
                  text-white font-semibold text-base flex items-center justify-center gap-3
                  hover:bg-gray-800 hover:border-gray-700 transition-all duration-200 disabled:opacity-50'
              >
                {loading ? <Loading/> : "Add Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Add
