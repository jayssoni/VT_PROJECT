import React, { useState, useContext, useEffect } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { FiPackage } from 'react-icons/fi'
import { toast } from 'react-toastify'

function Orders() {
    const [orders, setOrders] = useState([])
    const {serverUrl} = useContext(authDataContext)

    const fetchAllOrders = async () => {
        try {
            const result = await axios.post(serverUrl + '/api/order/list', {}, {withCredentials:true})
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
                {orderId, status: e.target.value},
                {withCredentials:true}
            )
            if(result.data) {
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
        switch(status) {
            case 'Order Placed': return 'text-yellow-600'
            case 'Packing': return 'text-blue-600'
            case 'Shipped': return 'text-purple-600'
            case 'Out for delivery': return 'text-orange-600'
            case 'Delivered': return 'text-green-600'
            default: return 'text-gray-600'
        }
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-cyan-50 via-white to-emerald-50'>
            <Nav/>
            <Sidebar/>

            <div className='ml-[250px] p-8 pt-24'>
                <h1 className='text-3xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-8'>
                    Order Management
                </h1>

                <div className='grid gap-6'>
                    {orders.map((order, index) => (
                        <div 
                            key={index}
                            className='bg-gradient-to-br from-white to-cyan-50 rounded-lg border-2 border-gray-400 p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'
                        >
                            <div className='flex items-center gap-4 mb-6'>
                                <div className='w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-100 to-cyan-200 text-cyan-600 flex items-center justify-center border-2 border-cyan-300'>
                                    <FiPackage size={24} />
                                </div>
                                <div className='border-l-2 border-gray-300 pl-4'>
                                    <h2 className='text-xl font-semibold text-cyan-700'>
                                        Order #{order._id.slice(-6)}
                                    </h2>
                                    <p className='text-cyan-600'>
                                        {new Date(order.date).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            <div className='grid md:grid-cols-3 gap-6'>
                                <div className='space-y-4'>
                                    <h3 className='font-semibold text-emerald-600 border-b-2 border-gray-300 pb-2'>Items</h3>
                                    <div className='space-y-2 text-cyan-700'>
                                        {order.items.map((item, idx) => (
                                            <p key={idx} className='border-b border-gray-200 pb-1'>
                                                {item.name} × {item.quantity}
                                                <span className='text-cyan-500 ml-2'>({item.size})</span>
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                <div className='space-y-4 border-l-2 border-gray-300 pl-4'>
                                    <h3 className='font-semibold text-emerald-600 border-b-2 border-gray-300 pb-2'>Shipping Details</h3>
                                    <div className='space-y-2'>
                                        <p className='text-cyan-700'>{order.address.firstName} {order.address.lastName}</p>
                                        <p className='text-cyan-600'>{order.address.street}</p>
                                        <p className='text-cyan-600'>
                                            {order.address.city}, {order.address.state}
                                        </p>
                                        <p className='text-cyan-600'>{order.address.phone}</p>
                                    </div>
                                </div>

                                <div className='space-y-4 border-l-2 border-gray-300 pl-4'>
                                    <h3 className='font-semibold text-emerald-600 border-b-2 border-gray-300 pb-2'>Order Info</h3>
                                    <div className='space-y-2'>
                                        <p className='text-cyan-700 border-t border-gray-200 pt-2'>Amount: <span className='text-2xl font-bold ml-2 text-cyan-800'>₹{order.amount}</span></p>
                                        <p className='text-cyan-700'>Payment: <span className={order.payment ? 'text-emerald-600' : 'text-amber-600'}>
                                            {order.payment ? 'Paid' : 'Pending'}
                                        </span></p>
                                        <p className='text-cyan-700'>Method: {order.paymentMethod}</p>
                                        
                                        <select
                                            value={order.status}
                                            onChange={(e) => statusHandler(e, order._id)}
                                            className={`mt-4 w-full px-4 py-2 rounded-lg bg-white border-2 border-gray-400 outline-none focus:ring-2 focus:ring-cyan-100 ${getStatusColor(order.status)}`}
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
