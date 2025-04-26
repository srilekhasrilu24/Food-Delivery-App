import React from 'react'
import "./Footer.css"
import Logo from "../../assets/footerlogo.jpg"
import Facebook from "../../assets/facebook.png"
import Watsapp from "../../assets/watsapp.png"
import Twitter from "../../assets/twitter.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
            <h1 style={{ color: "#ff6347", fontSize: "28px", fontWeight: "bold", display: "flex", alignItems: "center", gap: "10px" }}>
  🍽️ <span style={{ color: "white" }}>FoodDelivery</span>
</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<div className='footer-social-icons'>
    <p style={{padding:"0px",margin:"0px"}}><FaFacebook /></p>
    <p style={{padding:"0px",margin:"0px"}}><FaTwitterSquare /></p>
    <p style={{padding:"0px",margin:"0px"}}><FaInstagram /></p>
  {/* <img src={Facebook}/>
  <img src={Watsapp}/>
  <img src={Twitter}/> */}
</div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>

        </ul>

</div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7898</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>
           

        </div>
<hr/>
<p className='footer-copy-right'>
Copyright 2025 tomato.com . All Right Reserved
</p>
    </div>
  )
}

export default Footer