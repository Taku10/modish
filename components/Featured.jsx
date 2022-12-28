import React from 'react'
import { urlFor } from '../lib/client'
import { BsHeart } from 'react-icons/bs'

const Featured = ({ item }) => {
  const { image, title, price } = item
  return (
    <div className='item-container'>
      <div className='item-image'>
        <BsHeart className='wish-icon' />
        <img src={urlFor(image && image[0])} alt="" />
        <button>ADD TO CART</button>
      </div>
      <p className='product-title'>{title}</p>
      <p className='product-price'>R {price}</p>
    </div>
  )
}

export default Featured