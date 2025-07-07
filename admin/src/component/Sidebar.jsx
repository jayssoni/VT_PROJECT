import React from 'react'
import { MdOutlineAddBox, MdDashboard } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb"; // Corrected import
import { useNavigate, useLocation } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate()
    const location = useLocation()

    const isActiveRoute = (route) => {
        return location.pathname === route
    }

    return (
        <div className='w-[250px] min-h-[100vh] bg-[#E6FFFA] py-[60px] fixed left-0 top-0 border-r border-[#D1D5DB] shadow-xl'>
            <div className='flex flex-col gap-4 pt-[40px] px-4'>
                <div 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 border ${isActiveRoute('/') ? 'bg-[#4B5EAA]/20 text-[#4B5EAA] shadow-md border-[#4B5EAA]' : 'hover:bg-[#4B5EAA]/10 text-[#1E293B] hover:text-[#4B5EAA] border-[#D1D5DB]'}`}
                    onClick={() => navigate('/')}
                >
                    <MdDashboard className='w-[20px] h-[20px]' />
                    <p className='hidden md:block text-[15px] font-medium'>Dashboard</p>
                </div>
                <div 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 border ${isActiveRoute('/add') ? 'bg-[#2C7A7B]/20 text-[#2C7A7B] shadow-md border-[#2C7A7B]' : 'hover:bg-[#2C7A7B]/10 text-[#1E293B] hover:text-[#2C7A7B] border-[#D1D5DB]'}`}
                    onClick={() => navigate('/add')}
                >
                    <MdOutlineAddBox className='w-[20px] h-[20px]' />
                    <p className='hidden md:block text-[15px] font-medium'>Add Products</p>
                </div>
                <div 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 border ${isActiveRoute('/lists') ? 'bg-[#4B5EAA]/20 text-[#4B5EAA] shadow-md border-[#4B5EAA]' : 'hover:bg-[#4B5EAA]/10 text-[#1E293B] hover:text-[#4B5EAA] border-[#D1D5DB]'}`}
                    onClick={() => navigate('/lists')}
                >
                    <HiOutlineClipboardList className='w-[20px] h-[20px]' />
                    <p className='hidden md:block text-[15px] font-medium'>Product List</p>
                </div>
                <div 
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300 border ${isActiveRoute('/orders') ? 'bg-[#2C7A7B]/20 text-[#2C7A7B] shadow-md border-[#2C7A7B]' : 'hover:bg-[#2C7A7B]/10 text-[#1E293B] hover:text-[#2C7A7B] border-[#D1D5DB]'}`}
                    onClick={() => navigate('/orders')}
                >
                    <TbTruckDelivery className='w-[24px] h-[24px]' />
                    <p className='hidden md:block text-[15px] font-medium'>Orders</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar