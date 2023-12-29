    import React,{useState} from 'react'
    import axios from "axios"
    import { Link } from 'react-router-dom'
    import { useNavigate } from 'react-router-dom'



    export default function SignUpPage() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
        const res = await axios.post('http://localhost:3000/register',{name,email,password})
        navigate("/login")
            
        } catch (error) {
            console.log(error)
        } 
    }


    return (
        <section>
        <div className='sign-up-parent'>
        <form onSubmit={handleSubmit}>
            <div>
                

        
            <input type="text"
            placeholder='Enter your name'
            autoComplete='off'
            name='name'
            onChange={(e)=>setName(e.target.value)}
        />
            </div>
            <div>
                <input type="text" 
                placeholder='Enter your Email'
                autoComplete='off'
                name='email'
                onChange={(e)=> setEmail(e.target.value)}
                />
            </div>
            <div>
                <input type="password"
                name="password"
                id=""
                placeholder='Enter your password'
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <button type='submit'>Register</button>
          <Link to="/login"> 
          <h2>Already have account please sing in here</h2>
          </Link>      
          <Link to="/">Got to home</Link>
            </form>
        </div>
        </section>
    )
    }
