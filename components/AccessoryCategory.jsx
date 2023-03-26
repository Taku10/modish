import React from 'react'
import bag from '../images/bag.png'
import glasses from '../images/glasses.png'
import watch from '../images/watch.png'
import { urlFor } from '../lib/client'
import { useRouter } from 'next/router'
import Link from 'next/link'

const AccessoryCategory = ({ access }) => {
    const router = useRouter();


    return (
        <div className='access-container'>
            <div className='access-wrapper'>
                <div className='access watch'>
                    <img src={urlFor(access[0].image[0])} alt="" />
                    <Link href={'/watches'}>
                        <button>{access[0].title}</button>
                    </Link>

                </div>
                <div className='access glasses'>
                    <img src={urlFor(access[1].image[0])} alt="" />
                    <Link href={'/sunglasses'}>
                        <button>{access[1].title}</button>
                    </Link>
                </div>
                <div className='access bag'>
                    <img src={urlFor(access[2].image[0])} alt="" />
                    <Link href={'/bags'}>
                        <button>{access[2].title}</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default AccessoryCategory