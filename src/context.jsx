
import React from 'react'
import { createContext, useState, useEffect } from 'react'
// import axios from 'axios'

export const FullContext = createContext()
export const FullContextProvider = ({ children }) => {
    const [name,setname] = useState('john');
    const [role,setrole] = useState('Division Head');
  return (
    <FullContext.Provider
      value={{name,role}}
    >
      {children}
    </FullContext.Provider>
  )
}