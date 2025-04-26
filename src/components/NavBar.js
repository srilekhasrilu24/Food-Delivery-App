import React, { useContext, useState } from 'react';
import "../components/NavBar/NavBar.css";
import Logo from "../assets/logo.jpg"
import Search from "../assets/search.png";
import Cart from "../assets/cart.png"
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/Context';
const NavBar = ({setShowLog}) => {
  const[menu,Setmenu]=useState("home")
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <div className='navbar'>
      <Link to="/">
       <img src={Logo}   className='logo'/>
       </Link>
       <ul className='navbar-menu'>
        <Link to="/" onClick={()=>Setmenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu'  onClick={()=>Setmenu("menu")}className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>Setmenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a  href='#footer' onClick={()=>Setmenu("contact-us")}className={menu==="contact-us"?"active":""}>contact us</a>

       </ul>
       <div className='navbar-right'>
        
        <img src={Search} />
        <div className='navbar-search-icon'>
        <Link to="/cart">
        <img src={Cart}/>
        </Link>
          
            <div className={getTotalCartAmount()===0?"":"dot"}></div>

        </div>
        <button onClick={()=>setShowLog(true)}>Sign in</button>
        

       </div>
    </div>
  )
}

export default NavBar