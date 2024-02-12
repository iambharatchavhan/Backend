import { useState } from 'react'
import { RecoilRoot } from 'recoil'
import './App.css'
import Header from './components/Header'
function App() {
 

  return (
   <RecoilRoot>
    <Header/>
   </RecoilRoot>
  )
}

export default App
