import React, { useState, useContext, useEffect, useRef } from 'react'
import Categories from './Categories'
import NotFound from './NotFound'
import Search from './Search'
import SortingOptions from './SortingOptions'
import Product from './Product'
import InfiniteScroll from 'react-infinite-scroller';
import { AiOutlineSearch } from 'react-icons/ai'
import { Context } from '../context/StateContext'
import { AiFillCloseCircle } from 'react-icons/ai'


const ShopProducts = ({ products }) => {
  const [data, setData] = useState(products);
  const useStateContext = useContext(Context);
  const { search, setSearch } = useStateContext;
  const search_data = data.filter((item) => item.title.toLowerCase().includes(search)) //search input
  const [sorted, setSorted] = useState(products)

  const ref = useRef(null)





  const handleFilter = (e) => {
    const updated = e.target.value;

    if (updated === "all") {
      setSorted(data);
      ref.current.value = "";
      setSearch("")
    } else if (updated === "women") {
      const filtered = data.filter((item) => item.category === "women")
      setSorted(filtered)
      ref.current.value = "";
      setSearch("")
    } else if (updated === 'men') {
      const filtered = data.filter((item) => item.category === "men")
      setSorted(filtered)
      ref.current.value = "";
      setSearch("")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSorted(search_data)
  }

  const clearSearch = () => {
    ref.current.value = "";
    setSearch("")
    console.log(search)
  }



  return (
    <div className='shop-products-container'>
      <div className='shop-products-wrapper'>
        <div className='shop-grid-left'>
          <div className='categories-container'>
            <h2>Categories</h2>
            <div className='categories-options'>
              <button value='all' onClick={handleFilter}>All</button>
              <button value='women' onClick={handleFilter}>Women</button>
              <button value='men' onClick={handleFilter}>Men</button>
            </div>
          </div>
        </div>
        <div className='shop-grid-right'>
          <div className='search-container'>
            <form onSubmit={handleSubmit}>
              <input type="text" ref={ref} placeholder='Search Products...' onChange={(e) => setSearch(e.target.value)} />
              {search.length >= 1 ? <AiFillCloseCircle title='Clear Search' className='clear-search' onClick={clearSearch} /> : <AiOutlineSearch className='search-icon' title='Search' />}
            </form>
          </div>
          <div className='all-products'>
            <div className='search-data'>
              {/*Display NotFound component if searched product does not exist */}
               {search_data.length < 1 ? <NotFound /> : 
                search ? search_data.map((item, i) => (
                  <Product item={item} key={i} />
                )) : sorted.map((item, i) => (
                  <Product item={item} key={i} />))}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopProducts