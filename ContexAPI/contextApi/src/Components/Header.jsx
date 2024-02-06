import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>LOGO</div>
      <div className='nav'>
      <div>
      <Link to="/" className='navLink'>Home</Link>
      </div>
      <div>
      <Link to="/cart" className='navLink'>Cart</Link>
      </div>


      </div>
     
    </div>
  )
}

export default Header