import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      Home Page 
  <Link to="/register">Got to Register</Link>
  <Link to="/login">Got to Register</Link>
    </div>
  )
}
