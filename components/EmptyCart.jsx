import React from 'react'
import { BsBagXFill } from 'react-icons/bs';
import Link from 'next/link';

const EmptyCart = () => {
    return (
        <div className='empty-cart-container'>
            <div className='empty-cart-wrapper'>
                <h1>Your Cart is Empty!!</h1>
                <BsBagXFill className='empty-bag-icon' />
                <Link href='/shop'>
                    <button className='continue-shopping-button'>Continue Shopping</button>
                </Link>

            </div>

        </div>
    )
}

export default EmptyCart
