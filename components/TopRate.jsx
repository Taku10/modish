import React ,{useContext} from 'react'
import { urlFor } from '../lib/client'
import { BsHeart } from 'react-icons/bs'
import SaleSticker from './SaleSticker';
import NewSticker from './NewSticker';
import Link from 'next/link';
import { Context } from '../context/StateContext';


const TopRate = ({ item }) => {
  const { image, title, price, sale,slug } = item;

  const useStateContext = useContext(Context);
  const{onAdd, qty} = useStateContext;


  return (
    <div className='item-container'>
      <div className='item-image'>
        {sale && <SaleSticker />}
        {item.newl && <NewSticker />}
        <BsHeart className='wish-icon' />
        <img src={urlFor(image && image[0])} alt="" />
        <button onClick={()=>onAdd(item, qty)}>ADD TO CART</button>
      </div>
      <Link href={`/product/${slug.current}`}><p className='product-title'>{title}</p></Link>
      <p className='product-price'>R {price}</p>
    </div>
  )
}

export default TopRate