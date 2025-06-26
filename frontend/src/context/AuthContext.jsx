import React, { createContext } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const authDataContext = createContext()

function AuthContext({ children }) {
  let serverUrl = 'http://localhost:3000'

  let value = {
    serverUrl,
  }

  return (
      <authDataContext.Provider value={value}>
        {children}
      </authDataContext.Provider>
  )
}

export default AuthContext
