import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreCart } from '../Store'


const Header = () => {
 const {cart} = useContext(StoreCart)

  return (
    <div className='header'>
      <div className='logo'>TopShop</div>
      <div className='nav'>
      <div>
      <Link to="/" className='navLink'>Home</Link>
      </div>
      <div>
      <Link to="/cart" className='navLink'>Cart <span className='count'>{cart.length}</span></Link>
      </div>


      </div>
     
    </div>
  )
}

export default Header