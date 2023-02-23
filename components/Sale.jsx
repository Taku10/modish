import React from 'react'
import { urlFor } from '../lib/client'
import { BsHeart } from 'react-icons/bs'
import SaleSticker from './SaleSticker'
import Link from 'next/link';

const Sale = ({ item }) => {
  const { image, title, price, slug } = item
  return (
    <div className='item-container'>
      <div className='item-image'>
        <SaleSticker/>
        <BsHeart className='wish-icon' />
        <img src={urlFor(image && image[0])} alt="" />
        <button>ADD TO CART</button>
      </div>
      <Link href={`/product/${slug.current}`}><p className='product-title'>{title}</p></Link>
      <p className='product-price'>R {price}</p>
    </div>
  )
}

export default Sale