import React from 'react'
import { urlFor } from '../lib/client'
import { BsHeart } from 'react-icons/bs'
import { BsHeartFill } from 'react-icons/bs'
import SaleSticker from './SaleSticker';
import NewSticker from './NewSticker';

const BestSeller = ({ item }) => {
    const { bestseller, image, title, price, sale} = item;
    return (
        <div className='item-container'>
            <div className='item-image'>
               { sale && <SaleSticker />}
               {item.newl && <NewSticker/>}
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

export default BestSeller
