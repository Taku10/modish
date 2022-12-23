import React from "react"
import {HomeBanner, AccessoryCategory, HomeProducts} from "../components/"
import { client } from '../lib/client'


const Home=({home_banner, access_category})=> {

  console.log(access_category)

  return (
    <div className='home-wrapper'>
      <HomeBanner banner={home_banner} />
      <AccessoryCategory access = {access_category}/>
      <HomeProducts />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "home_banner"]'
  const accessQuery = '*[_type == "accessories_category"]'

  const home_banner = await client.fetch(query)
  const access_category = await client.fetch(accessQuery)
  
  return {
    props: {
      home_banner, access_category
    }
  }
}

export default Home