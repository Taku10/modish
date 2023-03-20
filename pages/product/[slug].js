import React, { useRef, useContext,  } from 'react'
import { client, urlFor } from '../../lib/client'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { Accordian, Related } from '../../components'
import { data } from '../../accordian/data'
import { Context } from '../../context/StateContext'



const ProductDetails = ({ products, relatedProducts }) => {

    const { title, price, image } = products
    const useStateContext = useContext(Context);
    const { qty, decreaseQty, increaseQty, onAdd } = useStateContext;

    return (
        <>
            <div className='product-details-container'>
                <div className='product-details-wrapper'>
                    <div className='details-grid-1'>
                        <div className='details-image'>
                            <img src={urlFor(image && image[0])} />
                        </div>
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
                                    <label htmlFor='size'>Size</label>
                                    <select id='size' autoFocus={false}>
                                        <option value="" key="1">Choose an option</option>
                                        <option value="s" key="s">Size S</option>
                                        <option value="m" key="m">Size M</option>
                                        <option value="l" key="l">Size L</option>
                                        <option value="xl" key="xl">Size XL</option>
                                    </select>
                                </div>
                                <div className='choose-color'>
                                    <label htmlFor='color'>Color</label>
                                    <select id='color'>
                                        <option value="" key="2">Choose an option</option>
                                        <option value="gray" key="gray">Gray</option>
                                        <option value="red" key="red">Red</option>
                                        <option value="black" key="black">Black</option>
                                        <option value="blue" key="blue">Blue</option>
                                    </select>
                                </div>
                            </div>
                            <div className='cart-update'>
                                <div className='item-counter-details'>
                                    <button onClick={decreaseQty}><HiMinus className='item-minus-details'  /></button>
                                    <p className='item-qty-details'>{qty}</p>
                                    <button onClick={increaseQty}><HiPlus className='item-plus-details'  /></button>
                                </div>
                                <button className='add-to-cart-details' onClick={() => onAdd(products, qty)}>ADD TO CART</button>
                            </div>
                            <div className='accordian-container'>
                                {data.map((item, i) => (
                                    <Accordian item={item} i={i} key={item.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Related products={products} related={relatedProducts}/>
        </>

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