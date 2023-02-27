import React, { useState } from 'react'
import Categories from './Categories'
import Search from './Search'
import SortingOptions from './SortingOptions'
import Product from './Product'
import InfiniteScroll from 'react-infinite-scroller';
import {AiOutlineSearch} from 'react-icons/ai'

const ShopProducts = ({ products }) => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState(products);
  const [hasMore, setHasMore] = useState(true)

  const loadMore = () => {
    setData(products)
  }

  const search_data= data.filter((item) => item.title.toLowerCase().includes(search))
  console.log(data)

  return (
    <div className='shop-products-container'>
      <div className='shop-products-wrapper'>
        <div className='shop-grid-left'>
          <Categories />
          <div className='search-container'> 
            <form action="">
            <input type="text" placeholder='Search Fruits' onChange={(e) => setSearch(e.target.value)}  />
              <AiOutlineSearch className='search-icon' />
            </form>
          </div>
        </div>
        <div className='shop-grid-right'>
          <SortingOptions data={products}/>
          <div className='all-products'>
            <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={true || false} useWindow={false} className='infinite-scroller'>
              {search_data.map((item, i) => (
                <Product item={item} key={i} />
              ))}
            </InfiniteScroll>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopProducts