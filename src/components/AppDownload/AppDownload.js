import React from 'react'
import "./AppDownload.css"
import Google from "../../assets/google.png"
import App from "../../assets/appp.jpg"
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'
    >
        <p style={{padding:"0px",margin:"0px"}}>For Better Experience Download <br/>FoodDelivery App</p>
        <div className='app-download-platforms'>
           <img src={Google} />
           <img src={App} />


        </div>
    </div>
  )
}

export default AppDownload