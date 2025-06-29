/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from 'react'
import { authDataContext } from './AuthContext'
import { useContext } from 'react'
import axios from 'axios'
import { useState } from 'react'


export const userDataContext = createContext()

const UserContext = ({children}) => {
      let [userData,setUserData] = useState("")
    let {serverUrl} = useContext(authDataContext)

       const getCurrentUser = async () => {
        try { 
            let result = await axios.get(serverUrl + "/api/user/getcurrentuser",{withCredentials:true})

            setUserData(result.data)
            console.log(result.data)

        } catch (error) {
            setUserData(null)
            console.log(error)
        }
    }

     let value = {
        userData,
        getCurrentUser,
        setUserData
    }


  return (
    <userDataContext.Provider value={value}>
      {children}    
    </userDataContext.Provider>
  )
}

export default UserContext