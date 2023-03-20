import React, { useState, useContext } from 'react'
import Categories from './Categories'
import Search from './Search'
import SortingOptions from './SortingOptions'
import Product from './Product'
import InfiniteScroll from 'react-infinite-scroller';
import { AiOutlineSearch } from 'react-icons/ai'


const ShopProducts = ({ products }) => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState(products);
  const [sort, setSort] = useState(products);
  
  


  const handleSort = (event) => {
    const value = event.target.value;
    setSort(value);
  }


  

  

  const search_data = data.filter((item) => item.title.toLowerCase().includes(search))

  const sortBy = (e) => {
    let updated = e.target.value;
    if(updated === 'name'){
      const filtered = products.filter((item, i)=>(
        console.log(Array.from(item[i]))
      ))
      setSort(filtered)
      // console.log(filtered)
    }
  }


  return (
    <div className='shop-products-container'>
      <div className='shop-products-wrapper'>
        <div className='shop-grid-left'>
          <Categories />
          <div className='search-container'>
            <form action="">
              <input type="text" placeholder='Search Fruits' onChange={(e) => setSearch(e.target.value)} />
              <AiOutlineSearch className='search-icon' />
            </form>
          </div>
        </div>
        <div className='shop-grid-right'>
          <div className='sort-wrapper'>
            <p>Sort By</p>
            <div className='sort-options'>
                <button value='name' onClick={sortBy}>Name</button>
                <button value='price' onClick={sortBy}>Price</button>
                
            </div>
          </div>
          <div className='all-products'>
            <div className='search-data'>
              {
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