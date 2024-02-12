import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { networkAtom,messages } from '../States/atom'

const Header = () => {
    // Only want value
    const networkValue = useRecoilValue(networkAtom)
    const network = networkValue >=100 ? "99+" : networkValue
    // want both value and setFunction to update value 
    const [message, setMessage] = useRecoilState(messages)
    // just want setFunction => setRecoilState()



  return (
    <div>
      <div>Connections:{network}</div>
      <div>Jobs:</div>
      <div>Notifications</div>
      <div>Messages:{message}</div>
      <button onClick={()=>setMessage(message + 1)}>Update</button>

    </div>
  )
}

export default Header