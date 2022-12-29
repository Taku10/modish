import React from 'react'
import InstaPost from './InstaPost'


const Instagram = ({instagram}) => {
    
  return (
    <div className='instagram-container'>
        <div className='instagram-wrapper'>
            <h1>@ FOLLOW US ON INSTAGRAM</h1>
            <div className='instagram-post-wrapper'>
                {instagram.map((item)=>
                  <InstaPost item={item}/>
                )}
            </div>
        </div>
    </div>
  )
}

export default Instagram