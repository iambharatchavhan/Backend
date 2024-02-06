import React from 'react'
import useProducts from '../CustomAPI/useProducts'
import Product from './Product'

const Home = () => {
  const {data, isError, isLoading} = useProducts()
  // console.log(data)
  return (
    <section id='home'>
      <div>
      {isLoading && (<h1>Loading.....</h1>)}
   {data && ( <Product products= {data}/>)}


      </div>
  
   </section>
  )
}

export default Home