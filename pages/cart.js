import React from 'react'
import { CartBanner } from '../components'
import {HiMinus, HiPlus} from 'react-icons/hi'

const Cart = () => {
  return (
    <div className='cart-container'>
        <CartBanner/>
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
            <tr className='cart-items'>
              <td className='cart-image'>
                <img src="" alt="image-1" />
              </td>
              <td>Men's Watch</td>
              <td>R244</td>
              <td>
                <div className='item-counter'>
                  <button><HiMinus /></button>
                  <p>0</p>
                  <button><HiPlus/></button>
                </div>
              </td>
            </tr>
           </tbody>
          </table>
        </div>
    </div>
  )
}

export default Cart 
