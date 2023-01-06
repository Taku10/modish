import React from 'react'
import Categories from './Categories'
import Search from './Search'

const ShopProducts = () => {
  return (
    <div className='shop-products-container'>
        <div className='shop-products-wrapper'>
          <div className='shop-grid-left'>
            <Categories/>
            <Search/>
          </div>
          <div className='shop-grid-right'>

          </div>
        </div>
    </div>
  )
}

export default ShopProducts