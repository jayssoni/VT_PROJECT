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
            const products = await axios.get(`${serverUrl}/api/product/list`, {}, {withCredentials:true})
            setTotalProducts(products.data.length)

            const orders = await axios.post(`${serverUrl}/api/order/list`, {}, {withCredentials:true})
            setTotalOrders(orders.data.length)
        } catch (err) {
            console.error("Failed to fetch counts", err)
        }
    }

    useEffect(() => {
        fetchCounts()
    }, [])

    return (
        <div className='min-h-screen bg-gradient-to-br from-cyan-50 via-white to-emerald-50'>
            <Nav/>
            <Sidebar/>

            <div className='ml-[250px] p-8 pt-24'>
                <h1 className='text-3xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-8'>
                    Dashboard Overview
                </h1>

                <div className='grid md:grid-cols-2 gap-6'>
                    <div className='bg-gradient-to-br from-white to-cyan-50 rounded-lg border-2 border-gray-400 p-6 shadow-lg hover:shadow-xl transition-all duration-300'>
                        <div className='flex items-center gap-4 mb-4'>
                            <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-600 flex items-center justify-center shadow-sm border-2 border-cyan-300'>
                                <MdOutlineInventory2 size={24} />
                            </div>
                            <h2 className='text-xl font-semibold text-cyan-700 border-l-2 border-gray-300 pl-3'>Total Products</h2>
                        </div>
                        <p className='text-3xl font-bold text-cyan-800 border-t-2 border-gray-200 pt-3'>{totalProducts}</p>
                    </div>

                    <div className='bg-gradient-to-br from-white to-emerald-50 rounded-lg border-2 border-gray-400 p-6 shadow-lg hover:shadow-xl transition-all duration-300'>
                        <div className='flex items-center gap-4 mb-4'>
                            <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-600 flex items-center justify-center shadow-sm border-2 border-emerald-300'>
                                <FiPackage size={24} />
                            </div>
                            <h2 className='text-xl font-semibold text-emerald-700 border-l-2 border-gray-300 pl-3'>Total Orders</h2>
                        </div>
                        <p className='text-3xl font-bold text-emerald-800 border-t-2 border-gray-200 pt-3'>{totalOrders}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
