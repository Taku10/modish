import React from 'react'
import SaleSticker from './SaleSticker'
import NewSticker from './NewSticker'
import { BsHeart } from 'react-icons/bs'
import { BsHeartFill } from 'react-icons/bs'
import { urlFor } from '../lib/client'

const Product = ({item}) => {

    const{sale, newl, image, title, price}=item
    return (
        <div className='product-container'>
            <div className='product-image'>
                {sale && <SaleSticker />}
                {item.newl && <NewSticker />}
                <BsHeart className='wish-icon' />
                <BsHeartFill className='wish-icon-fill' />
                <img src={urlFor(image && image[0])} alt="" />
                <button>ADD TO CART</button>
            </div>
            <p className='product-title'>{title}</p>
            <p className='product-price'>R {price}</p>
        </div>
    )
}

export default Product