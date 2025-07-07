import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoEyeOutline, IoEye } from "react-icons/io5"
import axios from 'axios'
import { authDataContext } from '../context/AuthContext'
import { adminDataContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FiMail } from 'react-icons/fi'
import { RiLockPasswordLine } from 'react-icons/ri'

function Login() {
    const [show, setShow] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { serverUrl } = useContext(authDataContext)
    const { getAdmin } = useContext(adminDataContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const AdminLogin = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            const result = await axios.post(serverUrl + '/api/auth/adminlogin', { email, password }, { withCredentials: true })
            toast.success("Login Successful")
            getAdmin()
            navigate("/")
        } catch (error) {
            console.log(error)
            toast.error("Login Failed")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='min-h-screen bg-[#E2E8F0] text-[#1E293B] flex flex-col items-center'>
            <div className='w-full h-20 flex items-center px-6 bg-[#F9FAFB] border-b border-[#D1D5DB]'>
                <div className='flex items-center gap-3'>
                    <img src={logo} alt="" className='w-8 h-8 object-contain border border-[#D1D5DB] rounded-lg p-1' />
                    <h1 className='text-2xl font-bold text-[#4B5EAA] border-l-2 border-[#D1D5DB] pl-3'>OneCart</h1>
                </div>
            </div>
            <div className='flex-1 w-full flex flex-col items-center justify-center px-4'>
                <div className='w-full max-w-md space-y-8'>
                    <div className='text-center border-b-2 border-[#D1D5DB] pb-4'>
                        <h2 className='text-3xl font-bold text-[#4B5EAA]'>Welcome Back</h2>
                        <p className='mt-2 text-[#6B7280]'>Please sign in to your account</p>
                    </div>
                    <form onSubmit={AdminLogin} className='mt-8 space-y-6 bg-[#F9FAFB] p-8 rounded-lg border border-[#D1D5DB] shadow-xl'>
                        <div className='space-y-4'>
                            <div className='relative'>
                                <FiMail className='absolute left-3 top-1/2 -translate-y-1/2 text-[#4B5EAA]' />
                                <input
                                    type="email"
                                    placeholder='Email Address'
                                    required
                                    className='w-full h-12 bg-[#F9FAFB] rounded-lg pl-10 pr-4 outline-none focus:ring-2 ring-[#4B5EAA]/20 transition-all duration-300 border border-[#D1D5DB]'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='relative'>
                                <RiLockPasswordLine className='absolute left-3 top-1/2 -translate-y-1/2 text-[#4B5EAA]' />
                                <input
                                    type={show ? "text" : "password"}
                                    placeholder='Password'
                                    required
                                    className='w-full h-12 bg-[#F9FAFB] rounded-lg pl-10 pr-12 outline-none focus:ring-2 ring-[#4B5EAA]/20 transition-all duration-300 border border-[#D1D5DB]'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShow(prev => !prev)}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-[#4B5EAA] hover:text-[#2C7A7B] transition-colors border-l border-[#D1D5DB] pl-2'
                                >
                                    {show ? <IoEye size={20} /> : <IoEyeOutline size={20} />}
                                </button>
                            </div>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className='w-full h-12 bg-[#4B5EAA] rounded-lg font-medium text-white hover:bg-[#2C7A7B] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg border border-[#4B5EAA]'
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login