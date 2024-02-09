import React, { useContext } from 'react'
import { counterContextApi } from '../stateManagement/CounterContext'


const Header = () => {
  const {name} = useContext(counterContextApi)
    


  return (
    
    <div>
      <h1>Welcome, {name}</h1>
    </div>
  )
}

export default Header