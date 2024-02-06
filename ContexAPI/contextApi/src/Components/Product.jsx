import React from "react";

const Product = ({products}) => {
//    console.log(product)
    if(!products.products){
        return
    }
// console.log(products.products)

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
       <button className="btn-addCart">Add To Cart</button>
     </div>
   </div>




    ))}
    
    </section>
  );
};

export default Product;
