import React, { useState } from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import PlaceHolder from './components/PlaceHolder/PlaceHolder'
import Footer from './components/Footer/Footer'
import LogIn from './components/LogIn/LogIn'

const App = () => {
  const[showlogin,setShowLog]=useState(false)
  return (
    <>
    {showlogin&&<LogIn setShowLog={setShowLog}/>}
   <div className='app'>
    <NavBar setShowLog={setShowLog}/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<PlaceHolder/>}/>

    </Routes>

   </div>
   <Footer/>
   </>
  )
}

export default App
