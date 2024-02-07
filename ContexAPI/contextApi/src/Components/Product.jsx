import React,{useContext} from "react";
import { StoreCart } from "../Store";

const Product = ({products}) => {
//    console.log(product)
    if(!products.products){
        return
    }
// console.log(products.products)

const {cart ,setCart} = useContext(StoreCart) 
console.log(cart)

  return (
    <section id="products-container">
    {products.products.map((prod)=>(
     <div className="products" key={prod.id}>
     <div className="product-img">
       <img
         src={prod.thumbnail}
         alt="Product-img"
       />
     </div>
     <div className="product-details">
       <div className="product-info">
         <div>{prod.title}</div>
         <div>{prod.rating}⭐</div>
       </div>
       <div className="product-price">
         <div> Price:${prod.price}</div>
         <div> {
prod.discountPercentage}% OFF</div>
       </div>

       {cart.includes(prod) ?  <button className="btn-addCart btn-remove"
        onClick={()=>setCart(cart.filter((prRemove)=> prRemove.id !== prod.id))}
      >Remove</button> : <button className="btn-addCart"
         onClick={()=>setCart([...cart, prod])}
       >Add To Cart</button>
      
        }
       
      
     </div>
   </div>




    ))}
    
    </section>
  );
};

export default Product;
