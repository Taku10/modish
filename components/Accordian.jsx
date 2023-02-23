import React from 'react'

const Accordian = ({item}) => {

    const{title, content}=item

  return (
    <div className='accordian-item'>
      <div className='acc-title'>
           <h2>{title}</h2>
           <span>+</span> 
      </div>
      <p className='acc-content'>{content}</p>
    </div>
  )
}

export default Accordian
