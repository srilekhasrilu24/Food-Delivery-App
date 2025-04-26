import React, { useContext } from 'react'
import "../Cart/Cart.css"
import { StoreContext } from '../../Context/Context'
import { Navigate, useNavigate } from 'react-router-dom'
function Cart() {
  const{cartItems, food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext)
  const navigate=useNavigate()
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-item-title'>
          <p>
Item
          </p>
          <p>title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>

        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <>
              <div className='cart-item-title cart-items-item'>
             <img src={item.image}/>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price*cartItems[item._id]}</p>
                <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>

                </div>
                <hr/>
                </>
            )
          }

        })}

      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          
          <div>
          <h2>Cart totals</h2>
            <div className='cart-total-details'>
<p>SubTotal</p>
<p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className='cart-total-details'>
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>

            </div>
       <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
          </div>
        
          {/* <div className='cart-promocode' >
            <p>If you have a promo code,Enter it here</p>
            <div className='cart-promocode-input'>
              <input type='text' placeholder='promo code'/>
              <button>submit</button>

            </div>
      
          </div> */}

        </div>

      </div>

    </div>
  )
}

export default Cart