import React, { useContext, useEffect, useState } from 'react'
import { StoreCart } from '../Store'
import { Link } from 'react-router-dom'

const Cart = () => {
  const [total,setTotal] = useState(0)
  const {cart, setCart} = useContext(StoreCart)
useEffect(()=>{
   setTotal(cart.reduce((acc,curr)=> acc = acc + curr.price,0))

},[cart])



  return (
  
    
    <div className='cart-container'>
      <h1>Cart Page</h1>

      {cart.map((prod)=>(
  <div className='products-cart' key={prod.id}>
  <div className='cart-img'>
    <img src={prod.thumbnail} alt='product-pic'/></div>
  <div>{prod.title}</div>
  <div>Price :${prod.price} <button className='delete-item-btn'
   onClick={()=>setCart(cart.filter((item)=> item.id !== prod.id))}>❌</button> </div>
</div>

      ))}


    
   {cart.length == 0  ? (<div className='empty-cart'><h1>Your cart is Empty shop from </h1>  <Link to="/" className='theHome'>Home </Link></div>) :  <div  className='products-cart'>
        <div className='logo'>TopShop</div>
        <div>Total price</div>
        <div>Price :${total}</div>
      </div>
}
    </div>
  )
}

export default Cart