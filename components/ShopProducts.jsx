import React,{useState} from 'react'
import Categories from './Categories'
import Search from './Search'
import SortingOptions from './SortingOptions'
import Product from './Product'
import InfiniteScroll from 'react-infinite-scroller';

const ShopProducts = ({ products }) => {
  const[data, setData]=useState(products);
  const[hasMore, setHasMore]= useState(true)

  const loadMore =()=>{
    setData(products)
  }

  return (
    <div className='shop-products-container'>
      <div className='shop-products-wrapper'>
        <div className='shop-grid-left'>
          <Categories />
          <Search />
        </div>
        <div className='shop-grid-right'>
          <SortingOptions />
          <div className='all-products'>
            <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={true || false} useWindow={false} className='infinite-scroller'>
              {data.map((item, i) => (
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