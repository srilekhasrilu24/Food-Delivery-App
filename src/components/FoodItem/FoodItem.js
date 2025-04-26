import React, { useContext, useState } from 'react'
import "./FoodItem.css"
import AddIcon from "../../assets/adding.jpg"
import RemoveIcon from "../../assets/delete-icon.jpg"
import AddedIcon from "../../assets/addedicon.jpg"
import RatingStar from "../../assets/ratingstar.jpg"
import { StoreContext } from '../../Context/Context'
const FoodItem = ({id,name,price,description,image}) => {

const{cartItems,addToCart,removeFromCart}=useContext(StoreContext)
  return (
    <div className='food-item'>
        <div className='food-item-img-container'>
            <img className='food-item-image' src={image}/>
            {!cartItems[id]
            ?
            <img src={AddIcon} className='add' onClick={()=>addToCart(id)}/>
            :<div className='food-item-counter'>
                  <img src={RemoveIcon} className='remove' onClick={()=>removeFromCart(id)}/>
                  <p>{cartItems[id]}</p>
                  <img src={AddIcon} className='added' onClick={()=>addToCart(id)}/>
            </div>
            }

        </div>
        <div className='food-item-info'>
            <div className='food-item-name-rating'>
                <p>{name}</p>
                {/* <img src={RatingStar} /> */}

            </div>
            <p className='food-item-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>

        </div>
    </div>
  )
}

export default FoodItem