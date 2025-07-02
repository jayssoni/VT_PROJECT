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
    const {serverUrl} = useContext(authDataContext)
    const {getAdmin} = useContext(adminDataContext)
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const AdminLogin = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            const result = await axios.post(serverUrl + '/api/auth/adminlogin',{email, password}, {withCredentials:true})
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
        <div className='min-h-screen bg-gradient-to-br from-cyan-50 via-white to-emerald-50 text-slate-900 flex flex-col items-center'>
            <div className='w-full h-20 flex items-center px-6 bg-gradient-to-r from-cyan-50 to-emerald-50 border-b-2 border-gray-400'>
                <div className='flex items-center gap-3'>
                    <img src={logo} alt="" className='w-8 h-8 object-contain border-2 border-gray-300 rounded-lg p-1'/>
                    <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent border-l-2 border-gray-300 pl-3'>OneCart</h1>
                </div>
            </div>

            <div className='flex-1 w-full flex flex-col items-center justify-center px-4'>
                <div className='w-full max-w-md space-y-8'>
                    <div className='text-center border-b-2 border-gray-300 pb-4'>
                        <h2 className='text-3xl font-bold bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent'>Welcome Back</h2>
                        <p className='mt-2 text-cyan-600'>Please sign in to your account</p>
                    </div>

                    <form onSubmit={AdminLogin} className='mt-8 space-y-6 bg-gradient-to-br from-white to-cyan-50/30 p-8 rounded-lg border-2 border-gray-400 shadow-xl'>
                        <div className='space-y-4'>
                            <div className='relative'>
                                <FiMail className='absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400' />
                                <input
                                    type="email"
                                    placeholder='Email Address'
                                    required
                                    className='w-full h-12 bg-white rounded-lg pl-10 pr-4 outline-none focus:ring-2 ring-cyan-200 transition-all duration-300 border-2 border-gray-400'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className='relative'>
                                <RiLockPasswordLine className='absolute left-3 top-1/2 -translate-y-1/2 text-cyan-400' />
                                <input
                                    type={show ? "text" : "password"}
                                    placeholder='Password'
                                    required
                                    className='w-full h-12 bg-white rounded-lg pl-10 pr-12 outline-none focus:ring-2 ring-cyan-200 transition-all duration-300 border-2 border-gray-400'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShow(prev => !prev)}
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 hover:text-cyan-600 transition-colors border-l border-gray-300 pl-2'
                                >
                                    {show ? <IoEye size={20} /> : <IoEyeOutline size={20} />}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className='w-full h-12 bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg font-medium text-white hover:from-cyan-700 hover:to-emerald-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg border-2 border-gray-500'
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
