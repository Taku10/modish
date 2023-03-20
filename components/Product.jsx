import React, {useContext} from 'react'
import SaleSticker from './SaleSticker'
import NewSticker from './NewSticker'
import { BsHeart } from 'react-icons/bs'
import { BsHeartFill } from 'react-icons/bs'
import { urlFor } from '../lib/client'
import Link from 'next/link';
import { Context } from '../context/StateContext';


const Product = ({ item, related }) => {

    const { sale, newl, image, title, price, slug } = item

    const useStateContext = useContext(Context);
    const { onAdd ,qty} = useStateContext;


    return (
        <div className='product-container'>
            <div className='product-image'>
                {sale && <SaleSticker />}
                {item.newl && <NewSticker />}
                <BsHeart className='wish-icon' />
                <BsHeartFill className='wish-icon-fill' />
                <img src={urlFor(image && image[0])} alt="" />
                <button onClick={()=>onAdd(item, qty)}>ADD TO CART</button>
            </div>
            <Link href={`/product/${slug.current}`}><p className='product-title'>{title}</p></Link>
            <p className='product-price'>R {price}</p>
        </div>
    )
}

export default Product