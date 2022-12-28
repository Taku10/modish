import React from "react"
import {HomeBanner, AccessoryCategory, HomeProducts, VideoBanner, Instagram} from "../components/"
import { client } from '../lib/client'


const Home=({home_banner, access_category, products, instagram})=> {

  console.log(access_category)

  return (
    <div className='home-wrapper'>
      <HomeBanner banner={home_banner} />
      <AccessoryCategory access = {access_category}/>
      <HomeProducts products={products}/>
      <VideoBanner />
      <Instagram  instagram={instagram}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "home_banner"]'
  const accessQuery = '*[_type == "accessories_category"]'
  const productsQuery = '*[_type == "products"]'
  const instagramQuery = '*[_type == "instagram"]'

  const home_banner = await client.fetch(query)
  const access_category = await client.fetch(accessQuery)
  const products = await client.fetch(productsQuery)
  const instagram = await client.fetch(instagramQuery)
  
  return {
    props: {
      home_banner, access_category, products, instagram
    }
  }
}

export default Home