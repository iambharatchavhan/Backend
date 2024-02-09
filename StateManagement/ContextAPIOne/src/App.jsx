
import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Header from './component/Header'
import Body from './component/Body'


function App() {

  return (
    <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={<Body/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
