import React from 'react'
import { CartBanner } from '../components'
import { HiMinus, HiPlus } from 'react-icons/hi'
import bag from '../images/bag.png'
import watch from '../images/watch.png'


const Cart = () => {
  return (
    <div className='cart-container'>
      <CartBanner />
      <div className='cart-products-container'>
        <table className='cart-table'>
          <tbody className='cart-table-body'>
            <tr className='cart-headers'>
              <th></th>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </tr>
            <div className="cart-items-container">
              <tr className='cart-items'>
                <td className='cart-image-container'>
                  <div className='cart-image'>
                    <img src={bag.src} alt="image-1" />
                  </div>
                </td>
                <td>Men's Watch</td>
                <td>R244</td>
                <td>
                  <div className='item-counter'>
                    <button><HiMinus className='item-minus' /></button>
                    <p className='item-qty'>0</p>
                    <button><HiPlus className='item-plus' /></button>
                  </div>
                </td>
                <td>R 2000</td>

              </tr>
              <tr className='cart-items'>
                <td className='cart-image-container'>
                  <div className="cart-image">
                    <img src={watch.src} alt="image-1" />
                  </div>
                </td>
                <td>Men's Watch</td>
                <td>R244</td>
                <td>
                  <div className='item-counter'>
                    <button><HiMinus className='item-minus' /></button>
                    <p className='item-qty'>0</p>
                    <button><HiPlus className='item-plus' /></button>
                  </div>
                </td>
                <td>R 2000</td>

              </tr>
            </div>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart 
