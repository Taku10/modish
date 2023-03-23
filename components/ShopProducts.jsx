import React, { useState, useContext, useEffect } from 'react'
import Categories from './Categories'
import NotFound from './NotFound'
import Search from './Search'
import SortingOptions from './SortingOptions'
import Product from './Product'
import InfiniteScroll from 'react-infinite-scroller';
import { AiOutlineSearch } from 'react-icons/ai'
import { Context } from '../context/StateContext'


const ShopProducts = ({ products }) => {
  const [data, setData] = useState(products);
  const useStateContext = useContext(Context);
  const{search, setSearch} = useStateContext;

  const search_data = data.filter((item) => item.title.toLowerCase().includes(search)) //search input

 






  return (
    <div className='shop-products-container'>
      <div className='shop-products-wrapper'>
        <div className='shop-grid-left'>
          <Categories data = {data} />
         
        </div>
        <div className='shop-grid-right'>
        <div className='search-container'>
            <form action="">
              <input type="text" placeholder='Search Products...' onChange={(e) => setSearch(e.target.value)} />
              <AiOutlineSearch className='search-icon' />
            </form>
          </div>
          <div className='all-products'>
            <div className='search-data'>
              {search_data.length < 1 ? <NotFound />:
                search_data.map((item, i) => (
                  <Product item={item} key={i} />
                ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopProducts