import React,{useState} from 'react'
import Categories from './Categories'
import Search from './Search'
import SortingOptions from './SortingOptions'
import Product from './Product'
import InfiniteScroll from 'react-infinite-scroller';

const ShopProducts = ({ products }) => {
  const[data, setData]=useState(products);
  const[hasMore, setHasMore]= useState(true)

  const fetchMoreData =()=>{
    setTimeout(()=>{
      setData(data.concat(products))
    }, 500)
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
            <InfiniteScroll dataLength={data.length} next={fetchMoreData} hasMore={hasMore} className='infinite-scroller'>
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