import React from 'react'
import { MdOutlineAddBox, MdDashboard } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()

    const isActiveRoute = (route) => {
        return location.pathname === route
    }

    return (
        <div className='w-[250px] min-h-[100vh] bg-gradient-to-b from-cyan-50 via-white to-emerald-50 py-[60px] fixed left-0 top-0 border-r-2 border-gray-400 shadow-xl'>
            <div className='flex flex-col gap-4 pt-[40px] px-4'>
                <div 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 border-2 ${isActiveRoute('/') ? 'bg-gradient-to-r from-cyan-100 to-cyan-50 text-cyan-700 shadow-md border-cyan-400' : 'hover:bg-gradient-to-r hover:from-white/80 hover:to-cyan-50 text-slate-600 hover:text-cyan-600 border-gray-300'}`}
                    onClick={() => navigate('/')}
                >
                    <MdDashboard className='w-[20px] h-[20px]'/>
                    <p className='hidden md:block text-[15px] font-medium'>Dashboard</p>
                </div>

                <div 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 border-2 ${isActiveRoute('/add') ? 'bg-gradient-to-r from-emerald-100 to-emerald-50 text-emerald-700 shadow-md border-emerald-400' : 'hover:bg-gradient-to-r hover:from-white/80 hover:to-emerald-50 text-slate-600 hover:text-emerald-600 border-gray-300'}`}
                    onClick={() => navigate('/add')}
                >
                    <MdOutlineAddBox className='w-[20px] h-[20px]'/>
                    <p className='hidden md:block text-[15px] font-medium'>Add Products</p>
                </div>

                <div 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 border-2 ${isActiveRoute('/lists') ? 'bg-gradient-to-r from-teal-100 to-teal-50 text-teal-700 shadow-md border-teal-400' : 'hover:bg-gradient-to-r hover:from-white/80 hover:to-teal-50 text-slate-600 hover:text-teal-600 border-gray-300'}`}
                    onClick={() => navigate('/lists')}
                >
                    <HiOutlineClipboardList className='w-[20px] h-[20px]'/>
                    <p className='hidden md:block text-[15px] font-medium'>Product List</p>
                </div>

                <div 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 border-2 ${isActiveRoute('/orders') ? 'bg-gradient-to-r from-indigo-100 to-indigo-50 text-indigo-700 shadow-md border-indigo-400' : 'hover:bg-gradient-to-r hover:from-white/80 hover:to-indigo-50 text-slate-600 hover:text-indigo-600 border-gray-300'}`}
                    onClick={() => navigate('/orders')}
                >
                    <TbTruckDelivery className='w-[24px] h-[24px]'/>
                    <p className='hidden md:block text-[15px] font-medium'>Orders</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
