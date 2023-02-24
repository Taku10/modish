import React, {useState} from 'react'

const Accordian = ({item, i}) => {

    const[select, setSelect]=useState(null)

    const{title, content}=item
    const toggle =(i)=>{
      if(select === i){
          return setSelect(null)
      }

      setSelect(i)
  }

  return (
    <div className='accordian-item'>
      <div className='acc-title' onClick={()=> toggle(i)}>
           <h2>{title}</h2>
           <span>{select === i ? '-': '+' }</span> 
      </div>
      <p className={`${select === i ? 'acc-content show': ' acc-content' }`}>{content}</p>
    </div>
  )
}

export default Accordian
