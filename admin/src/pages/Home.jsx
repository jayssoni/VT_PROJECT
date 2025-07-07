import React, { useState, useContext, useEffect } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { MdOutlineInventory2 } from 'react-icons/md'
import { FiPackage } from 'react-icons/fi'

function Home() {
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalOrders, setTotalOrders] = useState(0)
    const { serverUrl } = useContext(authDataContext)

    const fetchCounts = async () => {
        try {
            const products = await axios.get(`${serverUrl}/api/product/list`, {}, {withCredentials: true})
            setTotalProducts(products.data.length)
            const orders = await axios.post(`${serverUrl}/api/order/list`, {}, {withCredentials: true})
            setTotalOrders(orders.data.length)
        } catch (err) {
            console.error("Failed to fetch counts", err)
        }
    }

    useEffect(() => {
        fetchCounts()
    }, [])

    return (
        <div className='min-h-screen bg-[#E2E8F0]'>
            <Nav />
            <Sidebar />
            <div className='ml-[250px] p-8 pt-24'>
                <h1 className='text-3xl font-bold text-[#4B5EAA] mb-8'>
                    Dashboard Overview
                </h1>
                <div className='grid md:grid-cols-2 gap-6'>
                    <div className='bg-[#F9FAFB] rounded-lg border border-[#D1D5DB] p-6 shadow-lg hover:shadow-xl transition-all duration-300'>
                        <div className='flex items-center gap-4 mb-4'>
                            <div className='w-12 h-12 rounded-lg bg-[#E6FFFA] text-[#4B5EAA] flex items-center justify-center shadow-sm border border-[#2C7A7B]/20'>
                                <MdOutlineInventory2 size={24} />
                            </div>
                            <h2 className='text-xl font-semibold text-[#1E293B] border-l-2 border-[#D1D5DB] pl-3'>Total Products</h2>
                        </div>
                        <p className='text-3xl font-bold text-[#1E293B] border-t-2 border-[#D1D5DB] pt-3'>{totalProducts}</p>
                    </div>
                    <div className='bg-[#F9FAFB] rounded-lg border border-[#D1D5DB] p-6 shadow-lg hover:shadow-xl transition-all duration-300'>
                        <div className='flex items-center gap-4 mb-4'>
                            <div className='w-12 h-12 rounded-lg bg-[#E6FFFA] text-[#2C7A7B] flex items-center justify-center shadow-sm border border-[#2C7A7B]/20'>
                                <FiPackage size={24} />
                            </div>
                            <h2 className='text-xl font-semibold text-[#1E293B] border-l-2 border-[#D1D5DB] pl-3'>Total Orders</h2>
                        </div>
                        <p className='text-3xl font-bold text-[#1E293B] border-t-2 border-[#D1D5DB] pt-3'>{totalOrders}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home