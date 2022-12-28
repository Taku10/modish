import React from 'react'
import { urlFor } from '../lib/client'

const BestSeller = ({item}) => {
    const{bestseller, image, title, price}=item
    return (
        <div className='item-container'>
            <div className='item-image'>
                <img src={urlFor(image && image[0])} alt="" />
            </div>
            <p>{title}</p>
            <p>R {price}</p>
        </div>
    )
}

export default BestSeller