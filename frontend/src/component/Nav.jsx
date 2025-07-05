/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoSearchCircleOutline, IoSearchCircleSharp } from "react-icons/io5"
import { FaCircleUser } from "react-icons/fa6"
import { MdOutlineShoppingCart } from "react-icons/md"
import { userDataContext } from '../context/UserContext'
import { authDataContext } from '../context/authContext'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'
import { IoMdHome } from "react-icons/io"
import { HiOutlineCollection } from "react-icons/hi"
import { MdContacts } from "react-icons/md"
import axios from 'axios'

function Nav() {
  const { getCurrentUser, userData } = useContext(userDataContext)
  const { serverUrl } = useContext(authDataContext)
  const { showSearch, setShowSearch, search, setSearch, getCartCount } = useContext(shopDataContext)
  const [showProfile, setShowProfile] = useState(false)
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", { withCredentials: true })
      console.log(result.data)
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-[100vw] h-[70px] bg-[#ffffff0d] backdrop-blur-lg fixed top-0 flex items-center justify-between px-4 md:px-8 z-50 shadow-lg border-b border-[#ffffff1a] rounded-b-2xl'>
      <div className='w-[30%] md:w-[20%] flex items-center justify-start gap-2'>
        <img src={logo} alt="OneCart Logo" className='w-8 h-8 rounded-full border border-[#ffffff1a] shadow-sm' />
        <h1 className='text-2xl font-sans text-white'>OneCart</h1>
      </div>
      <div className='hidden md:flex w-[40%]'>
        <ul className='flex items-center justify-center gap-4'>
          {['HOME', 'COLLECTIONS', 'ABOUT', 'CONTACT'].map((item, index) => (
            <li
              key={index}
              className='text-sm font-medium text-white bg-[#0000004d] hover:bg-[#ffffff1a] py-2 px-4 rounded-full cursor-pointer border border-[#ffffff1a] shadow-sm transition-all'
              onClick={() => navigate(`/${item.toLowerCase()}`)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className='w-[30%] flex items-center justify-end gap-4'>
        {!showSearch ? (
          <IoSearchCircleOutline
            className='w-9 h-9 text-white cursor-pointer hover:text-[#88d9ee] transition-colors'
            onClick={() => { setShowSearch(prev => !prev); navigate("/collection") }}
          />
        ) : (
          <IoSearchCircleSharp
            className='w-9 h-9 text-white cursor-pointer hover:text-[#88d9ee] transition-colors'
            onClick={() => setShowSearch(prev => !prev)}
          />
        )}
        {!userData ? (
          <FaCircleUser
            className='w-8 h-8 text-white cursor-pointer hover:text-[#88d9ee] transition-colors'
            onClick={() => setShowProfile(prev => !prev)}
          />
        ) : (
          <div
            className='w-8 h-8 bg-[#0000004d] text-white rounded-full flex items-center justify-center cursor-pointer border border-[#ffffff1a] shadow-sm hover:bg-[#ffffff1a]'
            onClick={() => setShowProfile(prev => !prev)}
          >
            {userData?.name.slice(0, 1)}
          </div>
        )}
        <div className='relative hidden md:block'>
          <MdOutlineShoppingCart
            className='w-8 h-8 text-white cursor-pointer hover:text-[#88d9ee] transition-colors'
            onClick={() => navigate("/cart")}
          />
          <p className='absolute w-5 h-5 flex items-center justify-center bg-[#0000004d] text-white rounded-full text-xs top-0 right-0 border border-[#ffffff1a] shadow-sm'>
            {getCartCount()}
          </p>
        </div>
      </div>
      {showSearch && (
        <div className='w-full h-20 bg-[#ffffff0d] backdrop-blur-lg absolute top-full left-0 flex items-center justify-center border-t border-[#ffffff1a] shadow-lg'>
          <input
            type="text"
            className='w-[80%] md:w-[50%] h-12 bg-[#0000004d] rounded-full px-6 text-white placeholder:text-white/70 text-lg border border-[#ffffff1a] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#88d9ee]'
            placeholder='Search Here'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      )}
      {showProfile && (
        <div className='absolute w-56 h-40 bg-[#0000004d] backdrop-blur-lg top-[110%] right-4 border border-[#ffffff1a] rounded-xl shadow-lg z-50'>
          <ul className='w-full h-full flex flex-col items-start justify-around text-white text-base py-2'>
            {!userData ? (
              <li
                className='w-full hover:bg-[#ffffff1a] px-4 py-2 cursor-pointer rounded-lg transition-colors'
                onClick={() => { navigate("/login"); setShowProfile(false) }}
              >
                Login
              </li>
            ) : (
              <li
                className='w-full hover:bg-[#ffffff1a] px-4 py-2 cursor-pointer rounded-lg transition-colors'
                onClick={() => { handleLogout(); setShowProfile(false) }}
              >
                LogOut
              </li>
            )}
            <li
              className='w-full hover:bg-[#ffffff1a] px-4 py-2 cursor-pointer rounded-lg transition-colors'
              onClick={() => { navigate("/order"); setShowProfile(false) }}
            >
              Orders
            </li>
            <li
              className='w-full hover:bg-[#ffffff1a] px-4 py-2 cursor-pointer rounded-lg transition-colors'
              onClick={() => { navigate("/about"); setShowProfile(false) }}
            >
              About
            </li>
          </ul>
        </div>
      )}
      <div className='w-[100vw] h-16 flex items-center justify-between px-4 text-xs fixed bottom-0 left-0 bg-[#0000004d] backdrop-blur-lg md:hidden border-t border-[#ffffff1a] shadow-lg'>
        {[
          { icon: <IoMdHome className='w-7 h-7 text-white' />, label: 'Home', path: '/' },
          { icon: <HiOutlineCollection className='w-7 h-7 text-white' />, label: 'Collections', path: '/collection' },
          { icon: <MdContacts className='w-7 h-7 text-white' />, label: 'Contact', path: '/contact' },
          { icon: <MdOutlineShoppingCart className='w-7 h-7 text-white' />, label: 'Cart', path: '/cart' },
        ].map((item, index) => (
          <button
            key={index}
            className='text-white flex items-center justify-center flex-col gap-1'
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
        <p className='absolute w-5 h-5 flex items-center justify-center bg-[#0000004d] text-white rounded-full text-xs top-2 right-4 border border-[#ffffff1a] shadow-sm'>
          {getCartCount()}
        </p>
      </div>
    </div>
  )
}

export default Nav