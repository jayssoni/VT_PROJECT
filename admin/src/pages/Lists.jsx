import React, { useContext, useEffect, useState } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { FiTrash2 } from 'react-icons/fi'
import { toast } from 'react-toastify'

function Lists() {
    const [list, setList] = useState([])
    const { serverUrl } = useContext(authDataContext)

    const fetchList = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/product/list")
            setList(result.data)
        } catch (error) {
            console.log(error)
            toast.error("Failed to fetch products")
        }
    }

    const removeList = async (id) => {
        try {
            const result = await axios.post(`${serverUrl}/api/product/remove/${id}`, {}, {withCredentials: true})
            if (result.data) {
                toast.success("Product removed successfully")
                fetchList()
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed to remove product")
        }
    }

    useEffect(() => {
        fetchList()
    }, [])

    return (
        <div className='min-h-screen bg-[#F8FAFC]'>
            <Nav />
            <Sidebar />
            <div className='ml-[250px] p-8 pt-24'>
                <h1 className='text-3xl font-bold text-[#4B5EAA] mb-8'>
                    Product List
                </h1>
                <div className='grid gap-6'>
                    {list?.length > 0 ? (
                        list.map((item, index) => (
                            <div 
                                key={index}
                                className='bg-white rounded-lg border border-[#E5E7EB] p-4 flex items-center gap-6 shadow-lg hover:shadow-xl transition-shadow duration-300'
                            >
                                <img 
                                    src={item.image1} 
                                    alt={item.name}
                                    className='w-24 h-24 object-cover rounded-lg border border-[#E5E7EB]'
                                />
                                <div className='flex-1 border-l-2 border-[#E5E7EB] pl-4'>
                                    <h3 className='text-xl font-semibold text-[#1E293B]'>{item.name}</h3>
                                    <p className='text-[#6B7280] mt-1'>{item.category}</p>
                                    <p className='text-xl font-semibold mt-2 text-[#1E293B] border-t border-[#E5E7EB] pt-2'>₹{item.price}</p>
                                </div>
                                <button
                                    onClick={() => removeList(item._id)}
                                    className='w-10 h-10 rounded-lg bg-[#F87171]/10 text-[#F87171] flex items-center justify-center hover:bg-[#F87171]/20 transition-all duration-300 border border-[#F87171]/20'
                                >
                                    <FiTrash2 size={20} />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className='text-center text-[#6B7280] py-8'>No products available.</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Lists