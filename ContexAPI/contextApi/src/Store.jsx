import React, { createContext, useState } from 'react'

export const StoreCart = createContext()

const Store = ({children}) => {
  const [cart,setCart] = useState([]);
  
  return (
    <StoreCart.Provider value={{cart,setCart}}>
    {children}
    </StoreCart.Provider>
  )
}

export default Store