import React, {useState} from 'react'

const Categories = ({data}) => {
    const[filter, setFilter]=useState(data);
    console.log(filter);
    
    return (
        <div className='categories-container'>
            <h2>Categories</h2>
            <div className='categories-options'>
                <p>All</p>
                <p>Women</p>
                <p>Men</p>
                <p>Accesories</p>
            </div>
        </div>
    )
}

export default Categories