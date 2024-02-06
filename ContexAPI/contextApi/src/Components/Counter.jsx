import React, { useContext } from 'react'
import { CountContext } from '../Constant/store'

const Counter = () => {
    const count = useContext(CountContext)
  return (
     
    <div>{count}</div>

  )
}

export default Counter