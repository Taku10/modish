import React from 'react'
import ProductRelated from './ProductRelated'

const Related = ({ related, products }) => {

    const findDuplicate = related.find((item)=>item.slug.current=== products.slug.current )
    const sub = related.filter((item)=> item.sub_category === products.sub_category).slice(0, 4)
    console.log(findDuplicate )


    return (
        <div className='related-container'>

            {sub.map((item) => (
                <ProductRelated item={item} />
            ))}
        </div>
    )
}

export default Related
