import React from 'react'
import { client } from '../lib/client'
import {AboutBanner} from '../components'

const About = () => {
  return (
    <div className='about-container'>
      <AboutBanner />
    </div>
  )
}


export const getServerSideProps = async () => {
    const query = '*[_type == "navbanner"]'

    const navBanner = await client.fetch(query)

    return {
        props: {
          navBanner
        }
      }
}
export default About
