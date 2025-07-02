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
    let {serverUrl} = useContext(authDataContext)
    let {getAdmin} = useContext(adminDataContext)

    const logOut = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout", {withCredentials:true})
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
        <div className='w-full h-[70px] bg-gradient-to-r from-cyan-50 via-white to-emerald-50 shadow-lg z-10 fixed top-0 flex items-center justify-between px-6 border-b-2 border-gray-300'>
            <div className='flex items-center gap-3 cursor-pointer group' onClick={()=>navigate("/")}>
                <img src={logo} alt="" className='w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110 border-2 border-gray-200 rounded-lg p-1'/>
                <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent border-l-2 border-gray-300 pl-3'>OneCart</h1>
            </div>
            <button 
                className='flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-rose-50 to-orange-50 text-rose-600 hover:from-rose-100 hover:to-orange-100 transition-all duration-300 shadow-sm border-2 border-gray-400' 
                onClick={logOut}
            >
                <FiLogOut className="w-4 h-4" />
                <span>Logout</span>
            </button>
        </div>
    )
}

export default Nav
