import React from 'react'
import { urlFor } from '../lib/client'

const InstaPost = ({item}) => {
    const{image, photographer, caption}=item

  return (
    <div className='insta-post'>
      <img src={urlFor(image && image[0])} alt="insta-post" />
        <div className='caption-phto'>
            <p className='caption'>{caption}</p>
            <p className='photographer'>{photographer}</p>
        </div>
    </div>
  )
}

export default InstaPost
