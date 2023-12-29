
import './App.css'
import SignUpPage from './components/Signup'
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import PaidVisitor from './components/PaidVisitor'
import Dashboard from './components/Dashboard'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>  
      <Route path='/register' element={<SignUpPage/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/visitor' element={<PaidVisitor/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
     
  )
}

export default App
