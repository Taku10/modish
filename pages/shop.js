import React from 'react'
import { ShopBanner, ShopProducts } from '../components'
import { client } from '../lib/client'

const Shop = ({products}) => {

  return (
    <div className='shop-container'>
        <ShopBanner/>
        <ShopProducts products={products}/>
    </div>
  )
}


export const getServerSideProps = async () => {
  
  const productsQuery = '*[_type == "products"]'
  const products = await client.fetch(productsQuery)

  return {
    props: {
     products
    }
  }
}

export default Shop