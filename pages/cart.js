import React, { useContext, useState, useEffect } from 'react'
import { CartBanner, EmptyCart } from '../components'
import { HiMinus, HiPlus } from 'react-icons/hi'
import bag from '../images/bag.png'
import watch from '../images/watch.png'
import { Context } from '../context/StateContext'
import { urlFor } from '../lib/client'
import {AiFillCloseCircle}  from 'react-icons/ai';




const Cart = () => {
  const[itemPrice, setItemPrice]=useState(0);
  const useStateContext = useContext(Context);
  const { cartItems, setCartItems, totalPrice, totalQuantities, toggleCartItemQuantity, onRemove, } = useStateContext;

  


  return (
    <div className='cart-container'>
      <CartBanner />
      {cartItems < 1 && <EmptyCart />}
      { cartItems.length >= 1 && <div className='cart-products-container'>
        <table className='cart-table'>
          <tbody className='cart-table-body'>
            <tr className='cart-headers'>
              <th></th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>

            </tr>
            <div className="cart-items-container">
              {
                 cartItems.map((item) => (
                  
                  <tr className='cart-items'>
                    <AiFillCloseCircle  className='remove-cart-item' onClick={()=> onRemove(item)}/>
                    <td className='cart-image-container'>
                      <div className='cart-image'>
                        <img src={urlFor(item?.image[0])} alt="image-1" />
                      </div>
                    </td>
                    <td>{item.title}</td>
                    <td>R {item.price}</td>
                    <td>
                      <div className='item-counter'>
                        <button onClick={()=> toggleCartItemQuantity( item._id,'dec')}><HiMinus className='item-minus' /></button>
                        <p className='item-qty'>{item.quantity}</p>
                        <button onClick={()=> toggleCartItemQuantity( item._id,'inc')}><HiPlus className='item-plus' /></button>
                      </div>
                    </td>

                  </tr>
                ))
              }

            </div>
          </tbody>
        </table>
        <div className='total-container'>
          <h2>CART TOTALS</h2>
          <div className='subtotal-wrapper'>
            <p>Subtotal:</p>
            <p className='subtotal'>R {totalPrice}</p>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>}
    </div>
  )
}

export default Cart 
