import React, { useContext, useEffect, useState } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { FiTrash2 } from 'react-icons/fi'
import { toast } from 'react-toastify'

function Lists() {
    const [list, setList] = useState([])
    const {serverUrl} = useContext(authDataContext)

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
            const result = await axios.post(`${serverUrl}/api/product/remove/${id}`, {}, {withCredentials:true})
            if(result.data) {
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
        <div className='min-h-screen bg-gradient-to-br from-cyan-50 via-white to-emerald-50'>
            <Nav/>
            <Sidebar/>

            <div className='ml-[250px] p-8 pt-24'>
                <h1 className='text-3xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-8'>
                    Product List
                </h1>

                <div className='grid gap-6'>
                    {list?.length > 0 ? (
                        list.map((item, index) => (
                            <div 
                                key={index}
                                className='bg-gradient-to-br from-white to-cyan-50 rounded-lg border-2 border-gray-400 p-4 flex items-center gap-6 shadow-lg hover:shadow-xl transition-shadow duration-300'
                            >
                                <img 
                                    src={item.image1} 
                                    alt={item.name}
                                    className='w-24 h-24 object-cover rounded-lg border-2 border-gray-300'
                                />
                                
                                <div className='flex-1 border-l-2 border-gray-300 pl-4'>
                                    <h3 className='text-xl font-semibold text-cyan-700'>{item.name}</h3>
                                    <p className='text-cyan-600 mt-1'>{item.category}</p>
                                    <p className='text-xl font-semibold mt-2 text-cyan-800 border-t border-gray-200 pt-2'>₹{item.price}</p>
                                </div>

                                <button
                                    onClick={() => removeList(item._id)}
                                    className='w-10 h-10 rounded-lg bg-gradient-to-b from-red-50 to-pink-50 text-red-600 flex items-center justify-center hover:from-red-100 hover:to-pink-100 transition-all duration-300 border-2 border-red-300'
                                >
                                    <FiTrash2 size={20} />
                                </button>
                            </div>
                        ))
                    ) : (
                        <div className='text-center text-cyan-500 py-8'>No products available.</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Lists
