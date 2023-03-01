import React from 'react'
import ProductRelated from './ProductRelated'

const Related = ({ related, products }) => {

    const sub = related.filter((item) => item.sub_category === products.sub_category).slice(0, 4)
    const duplicate_product = sub.find((item, i) => item.slug.current === products.slug.current)



    return (
        <div className='related-container'>
            <h1>Related Products</h1>
            <div className='related-wrapper'>
                {sub.map((item, i) => (
                    <ProductRelated item={item} key={i}/>
                ))}
            </div>

        </div>
    )
}

export default Related
