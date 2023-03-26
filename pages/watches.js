import React from 'react'
import { Product, WatchBanner} from '../components'
import { client } from '../lib/client'

const Watches = ({ products }) => {


    return (
       <div className='watch-container'>
            <WatchBanner/>
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

export default Watches
