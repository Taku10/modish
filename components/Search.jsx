import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
  return (
    <div className='search-container'>
        <form action="">
            <input type="text" placeholder='Search products' />
            <AiOutlineSearch/>
        </form>
    </div>
  )
}

export default Search