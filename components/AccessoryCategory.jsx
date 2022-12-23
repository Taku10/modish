import React from 'react'
import bag from '../images/bag.png'
import glasses from '../images/glasses.png'
import watch from '../images/watch.png'
import { urlFor } from '../lib/client'

const AccessoryCategory = ({access}) => {
  return (
    <div className='access-container'>
        <div className='access-wrapper'>
            <div className='access glasses'>
                <img src={urlFor(access[0].image[0])} alt="" />
                <button>{access[0].title}</button>
            </div>
            <div className='access watch'>
                <img src={urlFor(access[1].image[0])} alt="" />
                <button>{access[1].title}</button>
            </div>
            <div className='access bag'>
                <img src={urlFor(access[2].image[0])}alt="" />
                <button>{access[2].title}</button>
            </div>
        </div>
    </div>
  )
}

export default AccessoryCategory