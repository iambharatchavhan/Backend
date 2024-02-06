 import React,{useState,useEffect}from 'react'
 import axios from 'axios'

 
 const useProducts = () => {
    const [data,setData] = useState(null)
    const [isLoading,setIsLoading] = useState(true)
    const [isError,setIsError] = useState(null)


  useEffect(()=>{
    const fetchData = async () =>{
        try {

       const res = await axios.get("https://dummyjson.com/products")
       setData(res.data)
       setIsLoading(false)
       
        } catch (error) {

           setIsError(error)
           setIsLoading(false)
            
        }

    }

    fetchData();


  },[])

    

   return {data,isError,isLoading}
 }
 
 export default useProducts