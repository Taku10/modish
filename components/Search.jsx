import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
  return (
    <div className='search-container'>
        <form action="">
            <input type="text" placeholder='Search products...' />
            <AiOutlineSearch className='search-icon'/>
        </form>
    </div>
  )
}

export default Search