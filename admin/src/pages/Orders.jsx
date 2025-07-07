import React, { useState, useContext, useEffect } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { FiPackage } from 'react-icons/fi'
import { toast } from 'react-toastify'

function Orders() {
    const [orders, setOrders] = useState([])
    const { serverUrl } = useContext(authDataContext)

    const fetchAllOrders = async () => {
        try {
            const result = await axios.post(serverUrl + '/api/order/list', {}, {withCredentials: true})
            setOrders(result.data.reverse())
        } catch (error) {
            console.log(error)
            toast.error("Failed to fetch orders")
        }
    }

    const statusHandler = async (e, orderId) => {
        try {
            const result = await axios.post(
                serverUrl + '/api/order/status',
                { orderId, status: e.target.value },
                { withCredentials: true }
            )
            if (result.data) {
                await fetchAllOrders()
                toast.success("Order status updated")
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed to update status")
        }
    }

    useEffect(() => {
        fetchAllOrders()
    }, [])

    const getStatusColor = (status) => {
        switch (status) {
            case 'Order Placed': return 'text-[#FBBF24]'
            case 'Packing': return 'text-[#3B82F6]'
            case 'Shipped': return 'text-[#8B5CF6]'
            case 'Out for delivery': return 'text-[#F97316]'
            case 'Delivered': return 'text-[#10B981]'
            default: return 'text-[#6B7280]'
        }
    }

    return (
        <div className='min-h-screen bg-[#E2E8F0]'>
            <Nav />
            <Sidebar />
            <div className='ml-[250px] p-8 pt-24'>
                <h1 className='text-3xl font-bold text-[#4B5EAA] mb-8'>
                    Order Management
                </h1>
                <div className='grid gap-6'>
                    {orders.map((order, index) => (
                        <div 
                            key={index}
                            className='bg-[#F9FAFB] rounded-lg border border-[#D1D5DB] p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'
                        >
                            <div className='flex items-center gap-4 mb-6'>
                                <div className='w-12 h-12 rounded-lg bg-[#E6FFFA] text-[#4B5EAA] flex items-center justify-center border border-[#2C7A7B]/20'>
                                    <FiPackage size={24} />
                                </div>
                                <div className='border-l-2 border-[#D1D5DB] pl-4'>
                                    <h2 className='text-xl font-semibold text-[#1E293B]'>
                                        Order #{order._id.slice(-6)}
                                    </h2>
                                    <p className='text-[#6B7280]'>
                                        {new Date(order.date).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                            <div className='grid md:grid-cols-3 gap-6'>
                                <div className='space-y-4'>
                                    <h3 className='font-semibold text-[#2C7A7B] border-b-2 border-[#D1D5DB] pb-2'>Items</h3>
                                    <div className='space-y-2 text-[#1E293B]'>
                                        {order.items.map((item, idx) => (
                                            <p key={idx} className='border-b border-[#D1D5DB] pb-1'>
                                                {item.name} × {item.quantity}
                                                <span className='text-[#6B7280] ml-2'>({item.size})</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className='space-y-4 border-l-2 border-[#D1D5DB] pl-4'>
                                    <h3 className='font-semibold text-[#2C7A7B] border-b-2 border-[#D1D5DB] pb-2'>Shipping Details</h3>
                                    <div className='space-y-2'>
                                        <p className='text-[#1E293B]'>{order.address.firstName} {order.address.lastName}</p>
                                        <p className='text-[#6B7280]'>{order.address.street}</p>
                                        <p className='text-[#6B7280]'>
                                            {order.address.city}, {order.address.state}
                                        </p>
                                        <p className='text-[#6B7280]'>{order.address.phone}</p>
                                    </div>
                                </div>
                                <div className='space-y-4 border-l-2 border-[#D1D5DB] pl-4'>
                                    <h3 className='font-semibold text-[#2C7A7B] border-b-2 border-[#D1D5DB] pb-2'>Order Info</h3>
                                    <div className='space-y-2'>
                                        <p className='text-[#1E293B] border-t border-[#D1D5DB] pt-2'>Amount: <span className='text-2xl font-bold ml-2 text-[#1E293B]'>₹{order.amount}</span></p>
                                        <p className='text-[#1E293B]'>Payment: <span className={order.payment ? 'text-[#10B981]' : 'text-[#FBBF24]'}>
                                            {order.payment ? 'Paid' : 'Pending'}
                                        </span></p>
                                        <p className='text-[#1E293B]'>Method: {order.paymentMethod}</p>
                                        <select
                                            value={order.status}
                                            onChange={(e) => statusHandler(e, order._id)}
                                            className={`mt-4 w-full px-4 py-2 rounded-lg bg-[#F9FAFB] border border-[#D1D5DB] outline-none focus:ring-2 focus:ring-[#4B5EAA]/20 ${getStatusColor(order.status)}`}
                                        >
                                            <option value="Order Placed">Order Placed</option>
                                            <option value="Packing">Packing</option>
                                            <option value="Shipped">Shipped</option>
                                            <option value="Out for delivery">Out for delivery</option>
                                            <option value="Delivered">Delivered</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Orders