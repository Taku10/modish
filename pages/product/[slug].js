import React from 'react'
import { client, urlFor } from '../../lib/client'
import { HiMinus, HiPlus } from 'react-icons/hi'

const ProductDetails = ({ products }) => {

    const { title, price, image } = products
    console.log(title)

    return (
        <div className='product-details-container'>
            <div className='product-details-wrapper'>
                <div className='details-grid-1'>
                    <img src={urlFor(image && image[0])} />
                </div>
                <div className='details-grid-2'>
                    <div className='details-wrapper'>
                        <div className='details-title-price'>
                            <h2>{title}</h2>
                            <h2>R {price}</h2>
                            <p>
                                Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
                            </p>
                        </div>
                        <div className='details-options'>
                            <div className='choose-size'>
                                <label htmlFor='size'>Size:</label>
                                <select id='size' autoFocus={false}>
                                    <option value="" key="">Choose an option</option>
                                    <option value="" key="">Size S</option>
                                    <option value="" key="">Size M</option>
                                    <option value="" key="">Size L</option>
                                    <option value="" key="">Size XL</option>
                                </select>
                            </div>
                            <div className='choose-color'>
                                <label htmlFor='color'>Color:</label>
                                <select id='color'>
                                    <option value="" key="">Choose an option</option>
                                    <option value="" key="">Gray</option>
                                    <option value="" key="">Red</option>
                                    <option value="" key="">Black</option>
                                    <option value="" key="">Blue</option>
                                </select>
                            </div>
                        </div>
                        <div className='cart-update'>
                            <div className='item-counter-details'>
                                <button><HiMinus className='item-minus-details' /></button>
                                <p className='item-qty-details'>0</p>
                                <button><HiPlus className='item-plus-details' /></button>
                            </div>
                            <button>ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails

export const getStaticPaths = async () => {
    const query = `*[_type == "products"]{
        slug {
            current
        }
    }`

    const products = await client.fetch(query)
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}


export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "products" && slug.current == '${slug}'][0]`
    const relatedQuery = '*[_type == "products"]'
    const products = await client.fetch(query);
    const relatedProducts = await client.fetch(relatedQuery);

    return {
        props: { relatedProducts, products }
    }
}