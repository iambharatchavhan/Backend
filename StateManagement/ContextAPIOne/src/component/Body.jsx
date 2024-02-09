import React, { useContext } from 'react'
import Counter from './Counter'
import { counterContextApi } from '../stateManagement/CounterContext'
const Body = () => {
    const {count,name,setName} = useContext(counterContextApi)
  return (
    <>
    <h1>The Current Count is {count}</h1>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    <input type='text'
     value={name}
     placeholder='Enter Your Name'
     onChange={(e)=>setName(e.target.value)}
    />
    </>
  )
}

export default Body