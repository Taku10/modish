import React, { useState } from 'react'

const SortingOptions = ({ data }) => {
    const [selectPrice, setSelectPrice] = useState('')
    const [price, setPrice] = useState(data)

    const handlePrice = (event) => {
        const value = event.target.value;
        setSelectPrice(value);
    }

    console.log(selectPrice)

    const sortByPrice = () => {
        if (selectPrice === '0-100') {
            const zero =price.filter((item => item.price > 0 && item.price < 100))
            console.log(zero)
        }if (selectPrice === '100-600') {
            const six =price.filter((item => item.price > 100 && item.price < 600))
            console.log(six)
        }
    }
    sortByPrice()

    return (
        <form className='sorting-options'>
            <select name=''>
                <option value="">Default Sorting</option>
                <option value="">Popularity</option>
                <option value="">Price:low to high</option>
                <option value="">Price:high to low</option>
            </select>

            <select onChange={handlePrice} >
                <option value="">Price</option>
                <option value='0-100'>R0 - R100</option>
                <option value="100-600">R100 - R600</option>
                <option value="600-1200">R600 - R1200</option>
                <option value="1200">R1200+</option>
            </select>
        </form>
    )
}

export default SortingOptions