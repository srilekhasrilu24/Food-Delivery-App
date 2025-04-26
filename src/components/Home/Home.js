import React, { useState } from 'react'
import "../Home/Home.css"
import Header from '../Header/Header'
import ExploreMenu from '../ExploreMenu/ExploreMenu'
import FoodDispaly from '../FoodDisplay/FoodDispaly'
import AppDownload from '../AppDownload/AppDownload'

function Home() {
  const [category,setCategory]=useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDispaly category={category}/>
        <AppDownload/>

    </div>
  )
}

export default Home