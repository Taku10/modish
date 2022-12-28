import React from 'react'
import {BsFillPlayFill} from 'react-icons/bs'

const VideoBanner = () => {
  return (
    <div className='video-banner-container'>
      <div className='video-banner-text'>
            <h2>The Beauty</h2>
            <h1>LOOKBOOK</h1>
            <div className='play-video'>
                <BsFillPlayFill className='play-icon'/>
                <p>PLAY VIDEO</p>
            </div>
      </div>
    </div>
  )
}

export default VideoBanner
