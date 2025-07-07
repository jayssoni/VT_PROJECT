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
    let [image1, setImage1] = useState(false)
    let [image2, setImage2] = useState(false)
    let [image3, setImage3] = useState(false)
    let [image4, setImage4] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("Men")
    const [price, setPrice] = useState("")
    const [subCategory, setSubCategory] = useState("TopWear")
    const [bestseller, setBestSeller] = useState(false)
    const [sizes, setSizes] = useState([])
    const [loading, setLoading] = useState(false)
    let { serverUrl } = useContext(authDataContext)

    const handleAddProduct = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            let formData = new FormData()
            formData.append("name", name)
            formData.append("description", description)
            formData.append("price", price)
            formData.append("category", category)
            formData.append("subCategory", subCategory)
            formData.append("bestseller", bestseller)
            formData.append("sizes", JSON.stringify(sizes))
            formData.append("image1", image1)
            formData.append("image2", image2)
            formData.append("image3", image3)
            formData.append("image4", image4)

            let result = await axios.post(serverUrl + "/api/product/addproduct", formData, { withCredentials: true })

            console.log(result.data)
            toast.success("Add Product Successfully")
            setLoading(false)

            if (result.data) {
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
        <div className='w-full min-h-screen bg-[#E2E8F0] text-[#1E293B] overflow-x-hidden'>
            <Nav />
            <Sidebar />
            <div className='w-[82%] min-h-screen pt-[80px] pb-[40px] absolute right-0'>
                <div className='max-w-[1200px] mx-auto px-6'>
                    <form onSubmit={handleAddProduct} className='w-full bg-[#F9FAFB] rounded-lg shadow-xl p-8 border border-[#D1D5DB]'>
                        <h1 className='text-2xl md:text-3xl font-bold text-[#4B5EAA] mb-8 border-b-2 border-[#D1D5DB] pb-4'>
                            Add Product
                        </h1>
                        <div className='space-y-8'>
                            <div className='space-y-4'>
                                <p className='text-lg md:text-xl font-semibold text-[#1E293B]'>
                                    Upload Images
                                </p>
                                <div className='flex flex-wrap gap-4'>
                                    {[{ state: image1, setter: setImage1 }, { state: image2, setter: setImage2 },
                                    { state: image3, setter: setImage3 }, { state: image4, setter: setImage4 }].map((img, index) => (
                                        <label key={index} htmlFor={`image${index + 1}`}
                                            className='w-[80px] h-[80px] md:w-[100px] md:h-[100px] relative group cursor-pointer transition-transform duration-300 hover:scale-105'>
                                            <div className='absolute inset-0 rounded-xl bg-[#E6FFFA] opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                                            <img
                                                src={!img.state ? upload : URL.createObjectURL(img.state)}
                                                alt=""
                                                className='w-full h-full object-cover rounded-xl border border-[#D1D5DB] group-hover:border-[#4B5EAA] transition-colors duration-300'
                                            />
                                            <input type="file" id={`image${index + 1}`} hidden
                                                onChange={(e) => img.setter(e.target.files[0])} required />
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className='grid md:grid-cols-2 gap-6'>
                                <div className='space-y-4'>
                                    <p className='text-lg font-semibold text-[#1E293B]'>Product Name</p>
                                    <input
                                        type="text"
                                        placeholder='Type here'
                                        className='w-full h-12 rounded-lg bg-[#F9FAFB] px-4 text-base border border-[#D1D5DB] focus:border-[#4B5EAA] focus:outline-none transition-all duration-300 placeholder:text-[#6B7280]'
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        required
                                    />
                                </div>
                                <div className='space-y-4'>
                                    <p className='text-lg font-semibold text-[#1E293B]'>Product Price</p>
                                    <input
                                        type="number"
                                        placeholder='₹ 2000'
                                        className='w-full h-12 rounded-lg bg-[#F9FAFB] px-4 text-base border border-[#D1D5DB] focus:border-[#2C7A7B] focus:outline-none transition-colors duration-200 placeholder:text-[#6B7280]'
                                        onChange={(e) => setPrice(e.target.value)}
                                        value={price}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='space-y-4'>
                                <p className='text-lg font-semibold text-[#1E293B]'>Product Description</p>
                                <textarea
                                    placeholder='Type here'
                                    className='w-full h-32 rounded-lg bg-[#F9FAFB] p-4 text-base border border-[#D1D5DB] focus:border-[#4B5EAA] focus:outline-none transition-colors duration-200 placeholder:text-[#6B7280] resize-none'
                                    onChange={(e) => setDescription(e.target.value)}
                                    value={description}
                                    required
                                />
                            </div>
                            <div className='grid md:grid-cols-2 gap-6'>
                                {[
                                    { label: 'Product Category', value: category, setter: setCategory, options: ['Men', 'Women', 'Kids'] },
                                    { label: 'Sub-Category', value: subCategory, setter: setSubCategory, options: ['TopWear', 'BottomWear', 'WinterWear'] }
                                ].map((select, index) => (
                                    <div key={index} className='space-y-4'>
                                        <p className='text-lg font-semibold text-[#1E293B]'>{select.label}</p>
                                        <select
                                            value={select.value}
                                            onChange={(e) => select.setter(e.target.value)}
                                            className='w-full h-12 rounded-lg bg-[#F9FAFB] px-4 text-base border border-[#D1D5DB] focus:border-[#2C7A7B] focus:outline-none transition-colors duration-200'
                                        >
                                            {select.options.map(opt => (
                                                <option key={opt} value={opt} className='bg-[#F9FAFB] text-[#1E293B]'>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                            </div>
                            <div className='space-y-4'>
                                <p className='text-lg font-semibold text-[#1E293B]'>Product Size</p>
                                <div className='flex flex-wrap gap-3'>
                                    {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                        <button
                                            type="button"
                                            key={size}
                                            onClick={() => setSizes(prev =>
                                                prev.includes(size) ? prev.filter(item => item !== size) : [...prev, size]
                                            )}
                                            className={`h-12 px-6 rounded-lg text-base font-medium border transition-all duration-200 ${sizes.includes(size)
                                                ? 'bg-[#4B5EAA] text-white border-[#4B5EAA]'
                                                : 'bg-[#F9FAFB] hover:bg-[#E6FFFA] text-[#1E293B] border-[#D1D5DB]'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <input
                                    type="checkbox"
                                    id='bestseller'
                                    className='w-5 h-5 rounded border-[#D1D5DB] bg-[#F9FAFB] checked:bg-[#4B5EAA] checked:border-0 transition-colors duration-200 focus:ring-offset-0 focus:ring-0'
                                    onChange={() => setBestSeller(prev => !prev)}
                                    checked={bestseller}
                                />
                                <label htmlFor="bestseller" className='text-lg font-semibold text-[#1E293B]'>
                                    Add to BestSeller
                                </label>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className='h-12 px-8 rounded-lg bg-[#4B5EAA] border border-[#4B5EAA] text-white font-semibold text-base flex items-center justify-center gap-3 hover:space-x-2 hover:bg-[#2C7A7B] hover:border-[#2C7A7B] transition-all duration-200 disabled:opacity-50'
                            >
                                {loading ? <Loading /> : "Add Product"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add