import React from 'react'
import { CartBanner } from '../components'

const Cart = () => {
  return (
    <div className='cart-container'>
        <CartBanner/>
        <div className='cart-products-container'>
          <table className='cart-table'>
           <tbody className='cart-table-body'>
            <tr className='cart-headers'>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
            </tr>
           </tbody>
          </table>
        </div>
    </div>
  )
}

export default Cart 
