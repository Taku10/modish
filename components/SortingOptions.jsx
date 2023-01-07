import React from 'react'

const SortingOptions = () => {
    return (
        <form className='sorting-options'>
            <select name=''>
                <option value="">Default Sorting</option>
                <option value="">Popularity</option>
                <option value="">Price:low to high</option>
                <option value="">Price:high to low</option>
            </select>

            <select name="" id="">
                <option value="">Price</option>
                <option value="">R0 - R100</option>
                <option value="">R100 - R600</option>
                <option value="">R600 - R1200</option>
                <option value="">R1200+</option>
            </select>
        </form>
    )
}

export default SortingOptions