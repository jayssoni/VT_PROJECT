import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoSearchCircleOutline } from "react-icons/io5"
import { FaCircleUser } from "react-icons/fa6"
import { MdOutlineShoppingCart } from "react-icons/md"
import { userDataContext } from '../context/UserContext'
import { IoSearchCircleSharp } from "react-icons/io5"
import { useNavigate } from 'react-router-dom'
import { IoMdHome } from "react-icons/io"
import { HiOutlineCollection } from "react-icons/hi"
import { MdContacts } from "react-icons/md"
import axios from 'axios'
import { authDataContext } from '../context/authContext'
import { shopDataContext } from '../context/ShopContext'

function Nav() {
    let {getCurrentUser, userData} = useContext(userDataContext)
    let {serverUrl} = useContext(authDataContext)
    let {showSearch, setShowSearch, search, setSearch, getCartCount} = useContext(shopDataContext)
    let [showProfile, setShowProfile] = useState(false)
    let navigate = useNavigate()
    
    const handleLogout = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/auth/logout", {withCredentials: true})
            console.log(result.data)
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }

    const handleSearch = (e) => {
        if (e.key === 'Enter' && search.trim()) {
            navigate(`/collection?search=${encodeURIComponent(search)}`)
            setShowSearch(false)
        }
    }

    return (
        <div className='w-[100vw] h-[70px] bg-white/90 backdrop-blur-lg z-50 fixed top-0 flex items-center justify-between px-[30px] shadow-xl border-b border-gray-200/50'>
            <div className='w-[20%] lg:w-[30%] flex items-center justify-start gap-[12px]'>
                <div className='w-[45px] h-[45px] rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg'>
                    <img src={logo} alt="" className='w-[28px] h-[28px] rounded-lg'/>
                </div>
                <h1 className='text-[25px] text-gray-800 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer' onClick={() => navigate("/")}>OneCart</h1>
            </div>
            
            <div className='w-[50%] lg:w-[40%] hidden md:flex'>
                <ul className='flex items-center justify-center gap-[15px]'>
                    <li className='text-[15px] font-medium cursor-pointer bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-purple-100 py-[12px] px-[24px] rounded-2xl text-gray-700 hover:text-blue-600 transition-all duration-300 shadow-lg border border-gray-200/50 transform hover:scale-105' onClick={() => navigate("/")}>HOME</li>
                    <li className='text-[15px] font-medium cursor-pointer bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-purple-100 py-[12px] px-[24px] rounded-2xl text-gray-700 hover:text-blue-600 transition-all duration-300 shadow-lg border border-gray-200/50 transform hover:scale-105' onClick={() => navigate("/collection")}>COLLECTIONS</li>
                    <li className='text-[15px] font-medium cursor-pointer bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-purple-100 py-[12px] px-[24px] rounded-2xl text-gray-700 hover:text-blue-600 transition-all duration-300 shadow-lg border border-gray-200/50 transform hover:scale-105' onClick={() => navigate("/about")}>ABOUT</li>
                    <li className='text-[15px] font-medium cursor-pointer bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-purple-100 py-[12px] px-[24px] rounded-2xl text-gray-700 hover:text-blue-600 transition-all duration-300 shadow-lg border border-gray-200/50 transform hover:scale-105' onClick={() => navigate("/contact")}>CONTACT</li>
                </ul>
            </div>

            <div className='w-[30%] lg:w-[30%] flex items-center justify-end gap-[15px]'>
                {/* Search Icon */}
                <div className='cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => setShowSearch(!showSearch)}>
                    {showSearch ? (
                        <IoSearchCircleSharp className='text-[32px] text-blue-600' />
                    ) : (
                        <IoSearchCircleOutline className='text-[32px] text-gray-600 hover:text-blue-600' />
                    )}
                </div>

                {/* Profile Icon */}
                <div className='relative'>
                    <div className='cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => setShowProfile(!showProfile)}>
                        <FaCircleUser className='text-[30px] text-gray-600 hover:text-blue-600' />
                    </div>
                    
                    {/* Profile Dropdown */}
                    {showProfile && (
                        <div className='absolute right-0 top-[45px] w-[200px] bg-white rounded-2xl shadow-xl border border-gray-200/50 py-[10px] z-50'>
                            {userData ? (
                                <>
                                    <div className='px-[20px] py-[10px] border-b border-gray-200'>
                                        <p className='text-[14px] font-medium text-gray-800'>{userData.name}</p>
                                        <p className='text-[12px] text-gray-500'>{userData.email}</p>
                                    </div>
                                    <div className='px-[20px] py-[8px] hover:bg-gray-50 cursor-pointer text-[14px] text-gray-700' onClick={() => {navigate("/profile"); setShowProfile(false)}}>
                                        My Profile
                                    </div>
                                    <div className='px-[20px] py-[8px] hover:bg-gray-50 cursor-pointer text-[14px] text-gray-700' onClick={() => {navigate("/orders"); setShowProfile(false)}}>
                                        My Orders
                                    </div>
                                    <div className='px-[20px] py-[8px] hover:bg-gray-50 cursor-pointer text-[14px] text-red-600' onClick={() => {handleLogout(); setShowProfile(false)}}>
                                        Logout
                                    </div>
                                </>
                            ) : (
                                <div className='px-[20px] py-[8px] hover:bg-gray-50 cursor-pointer text-[14px] text-gray-700' onClick={() => {navigate("/login"); setShowProfile(false)}}>
                                    Login
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Cart Icon */}
                <div className='relative cursor-pointer hover:scale-110 transition-transform duration-300' onClick={() => navigate("/cart")}>
                    <MdOutlineShoppingCart className='text-[32px] text-gray-600 hover:text-blue-600' />
                    {getCartCount() > 0 && (
                        <span className='absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold rounded-full w-[18px] h-[18px] flex items-center justify-center'>
                            {getCartCount()}
                        </span>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden cursor-pointer' onClick={() => setShowSearch(!showSearch)}>
                    <div className='w-[25px] h-[3px] bg-gray-600 mb-[5px] rounded-full'></div>
                    <div className='w-[25px] h-[3px] bg-gray-600 mb-[5px] rounded-full'></div>
                    <div className='w-[25px] h-[3px] bg-gray-600 rounded-full'></div>
                </div>
            </div>

            {/* Search Bar Overlay */}
            {showSearch && (
                <div className='absolute top-[70px] left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50 p-[20px] z-40'>
                    <div className='max-w-[600px] mx-auto relative'>
                        <input
                            type="text"
                            placeholder="Search for products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={handleSearch}
                            className='w-full py-[15px] px-[20px] pr-[60px] rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-[16px] bg-white shadow-lg'
                            autoFocus
                        />
                        <IoSearchCircleSharp 
                            className='absolute right-[15px] top-[15px] text-[25px] text-blue-600 cursor-pointer'
                            onClick={() => {
                                if (search.trim()) {
                                    navigate(`/collection?search=${encodeURIComponent(search)}`)
                                    setShowSearch(false)
                                }
                            }}
                        />
                    </div>
                </div>
            )}

            {/* Mobile Navigation Menu */}
            <div className='md:hidden absolute top-[70px] left-0 w-full bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/50 py-[20px] px-[30px] z-40'>
                <ul className='flex flex-col gap-[15px]'>
                    <li className='flex items-center gap-[10px] text-[16px] font-medium cursor-pointer py-[12px] px-[20px] rounded-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 text-gray-700 hover:text-blue-600 transition-all duration-300' onClick={() => navigate("/")}>
                        <IoMdHome className='text-[20px]' />
                        HOME
                    </li>
                    <li className='flex items-center gap-[10px] text-[16px] font-medium cursor-pointer py-[12px] px-[20px] rounded-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 text-gray-700 hover:text-blue-600 transition-all duration-300' onClick={() => navigate("/collection")}>
                        <HiOutlineCollection className='text-[20px]' />
                        COLLECTIONS
                    </li>
                    <li className='flex items-center gap-[10px] text-[16px] font-medium cursor-pointer py-[12px] px-[20px] rounded-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 text-gray-700 hover:text-blue-600 transition-all duration-300' onClick={() => navigate("/about")}>
                        <FaCircleUser className='text-[20px]' />
                        ABOUT
                    </li>
                    <li className='flex items-center gap-[10px] text-[16px] font-medium cursor-pointer py-[12px] px-[20px] rounded-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 text-gray-700 hover:text-blue-600 transition-all duration-300' onClick={() => navigate("/contact")}>
                        <MdContacts className='text-[20px]' />
                        CONTACT
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav