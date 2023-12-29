import axios from 'axios'
import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'


export default function Login() {
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const response = await axios.post('http://localhost:3000/login',{email,password}) 
        console.log(response.data.message ,response.data.role)
        if(response.data.message === "success"){
           if(response.data.role === "admin"){
              navigate("/dashboard");
           }else{
              navigate("/visitor");
           }
        }else{
         console.log("login failed");
        }
        } catch (error) {
             console.log(error)
        }
    }


  return (
    <div>
    <form onSubmit={handleSubmit}>
       <input
        type="text"
        name="email"
        placeholder="Enter your email"
        onChange={(e)=>setEmail(e.target.value)}
       />
       <br/>
       <br/>
       <input
       type="text" 
       name="password"
       placeholder="Enter your password"
       onChange={(e)=>setPassword(e.target.value)}
        />
  <button type='submit'>Login</button>
    </form>




  <Link to="/">Got to home</Link>
  <br/>
  <br/>
  <Link to="/register">Do not have account ? register here</Link>

    </div>
  )
}
