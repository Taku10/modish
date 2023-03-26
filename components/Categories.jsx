import React, {useState} from 'react'

const Categories = ({data}) => {
    const[sorted, setSorted]=useState(data);
    
    console.log("Categories:", sorted)

    const handleFilter = (e)=>{
        const updated = e.target.value;
        
        if(updated === "all"){
          setSorted(data);
        }else if(updated === "women"){
          const filtered = data.filter((item)=> item.category === "women")
          setSorted(filtered)
        }
       }
    
    return (
        <div className='categories-container'>
            <h2>Categories</h2>
            <div className='categories-options'>
                <button value = 'all' onClick={handleFilter}>All</button>
                <button value ='women' onClick={handleFilter}>Women</button>
                <button  value ='men' onClick={handleFilter}>Men</button>
                <p>Accesories</p>
            </div>
        </div>
    )
}

export default Categories