import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { adminDataContext } from '../context/AdminContext'
import { toast } from 'react-toastify'
import { FiLogOut } from 'react-icons/fi'

function Nav() {
    let navigate = useNavigate()
    let { serverUrl } = useContext(authDataContext)
    let { getAdmin } = useContext(adminDataContext)

    const logOut = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true })
            console.log(result.data)
            toast.success("LogOut Successfully")
            getAdmin()
            navigate("/login")
        } catch (error) {
            console.log(error)
            toast.error("LogOut Failed")
        }
    }

    return (
        <div className='w-full h-[70px] bg-[#F9FAFB] shadow-lg z-10 fixed top-0 flex items-center justify-between px-6 border-b border-[#D1D5DB]'>
            <div className='flex items-center gap-3 cursor-pointer group' onClick={() => navigate("/")}>
                <img src={logo} alt="" className='w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 border border-[#D1D5DB] rounded-lg p-1' />
                <h1 className='text-2xl font-bold text-[#4B5EAA] border-l-2 border-[#D1D5DB] pl-3'>OneCart</h1>
            </div>
            <button 
                className='flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F87171]/10 text-[#F87171] hover:bg-[#F87171]/20 transition-all duration-300 shadow-sm border border-[#F87171]/20' 
                onClick={logOut}
            >
                <FiLogOut className="w-4 h-4" />
                <span>Logout</span>
            </button>
        </div>
    )
}

export default Nav