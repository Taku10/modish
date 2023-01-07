import React from 'react'
import Categories from './Categories'
import Search from './Search'
import SortingOptions from './SortingOptions'
import Product from './Product'

const ShopProducts = ({ products }) => {
  return (
    <div className='shop-products-container'>
      <div className='shop-products-wrapper'>
        <div className='shop-grid-left'>
          <Categories />
          <Search />
        </div>
        <div className='shop-grid-right'>
          <SortingOptions />
          <div className='all-products'>
            {products.map((item, i) => (
              <Product item={item} key={i}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopProducts