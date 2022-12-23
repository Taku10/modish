import React from "react"
import {HomeBanner, AccessoryCategory} from "../components/"
import { client } from '../lib/client'


const Home=({home_banner})=> {
  return (
    <div className='home-wrapper'>
      <HomeBanner banner={home_banner} />
      <AccessoryCategory />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "home_banner"]'
  const home_banner = await client.fetch(query)

  return {
    props: {
      home_banner
    }
  }
}

export default Home