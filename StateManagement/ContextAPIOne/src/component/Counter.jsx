import React, { useContext } from 'react'
import { counterContextApi } from '../stateManagement/CounterContext'

const Counter = () => {
    const {count ,setCount} = useContext(counterContextApi)

  return (
    <div>
    <button onClick={()=>setCount(count +1 )}>Increment</button>
    <button onClick={()=>setCount(count -1 )}>Decrement</button>
    </div>
  )
}

export default Counter