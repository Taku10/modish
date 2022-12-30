import React from 'react'
import { urlFor } from '../lib/client'
import { BsHeart } from 'react-icons/bs'

const InstaPost = ({ item }) => {
    const { image, photographer, caption, likes } = item

    return (
        <div className='insta-post'>
            <img src={urlFor(image && image[0])} alt="insta-post" />
            <div className='caption-photo'>
                <p className='caption'>{caption}</p>
                <p className='photographer'>{photographer}</p>
            </div>
            <div className='post-likes'>
                <BsHeart className='heart-likes' />
                <p>{likes}</p>
            </div>
        </div>
    )
}

export default InstaPost
