import React, { useState } from 'react'
import "./LogIn.css"
import { ImCross } from "react-icons/im";
const LogIn = ({setShowLog}) => {
  const[currstate,setCurrState]=useState("Log In")

  return (
    <div className='login-popup'>
<form className='login-popup-container'>
  <div className='login-popup-title'>
    <h2>{currstate}</h2>
 <h6 onClick={()=>setShowLog(false)}><ImCross /></h6>

  </div>
  <div className='login-popup-inputs'>
    {currstate==="Log In"?<></>:  <input type="text" placeholder='your name required'/>}
    {/* <input type="text" placeholder='your name required'/> */}
    <input type='email' placeholder='your email is required'/>
    <input type='password' placeholder='your password is required'/>

  </div>
  <button>{currstate==="Sign up"?"create account":"Log In"}</button>
  <div className='login-popup-condition'>
    <input type='checkbox' required/>
    <p>By Continuing, I agree to the terms of use && privacy policy.</p>

  </div>
  {currstate==="Log In"?<p>create new account?<span onClick={()=>setCurrState("Sign up")}>Click here</span></p>: 
   <p>already have an account?<span onClick={()=>setCurrState("Log In")}>login here</span></p> }
  


</form>
    </div>
  )
}

export default LogIn