import React, {useContext} from 'react'
import { Context } from '../context/StateContext'

const NotFound = () => {
  const useStateContext = useContext(Context);
  const{search, setSearch} = useStateContext;


  return (
    <div className='not-found-container'>
      <h1 className='not-found-message'>{search} Not found!!</h1>
    </div>
  )
}

export default NotFound
