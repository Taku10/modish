import React from 'react'
import SaleSticker from './SaleSticker'
import NewSticker from './NewSticker'
import { BsHeart } from 'react-icons/bs'
import { BsHeartFill } from 'react-icons/bs'
import { urlFor } from '../lib/client'
import Link from 'next/link';


const Product = ({item}) => {

    const{sale, newl, image, title, price, slug}=item
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
            <Link href={`/product/${slug.current}`}><p className='product-title'>{title}</p></Link>
            <p className='product-price'>R {price}</p>
        </div>
    )
}

export default Product