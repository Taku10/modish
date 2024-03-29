import React,{useState, useEffect, useContext} from 'react'
import { GrFacebookOption } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs'
import { FaPinterestP } from 'react-icons/fa'
import { GrSnapchat } from 'react-icons/gr'
import { AiFillYoutube } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import { BsBag } from 'react-icons/bs'
import Link from 'next/link'
import { Context } from '../context/StateContext'


const Navbar = () => {
 const[nav, setNav]=useState(false)

 const useStateContext = useContext(Context);
 const{totalQuantities} = useStateContext;


  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 1) {
        setNav(true)
      } else {
        setNav(false)
      } if (window.innerWidth <= 992) {
        setNav(false)
      }
    }
    window.addEventListener('scroll', changeNav);
  })

  return (
    <div className={`${nav ? 'navbar-container active' : 'navbar-container'}`}>
      <nav className={`${nav ? 'top-nav active' : 'top-nav'}`}>
        <div className="top-icons">
          <GrFacebookOption className='nav-icon' />
          <BsInstagram className='nav-icon' />
          <FaPinterestP className='nav-icon' />
          <GrSnapchat className='nav-icon' />
          <AiFillYoutube className='nav-icon' />
        </div>
        <div className='top-shipping-text'>
          <p>Free shipping for standard order over R1000</p>
        </div>
        <div className='top-email'>
          <p>info@modish.com</p>
        </div>
      </nav>
      <nav className= 'main-nav'>
        <div className='logo'>
          <h1>Modish<span>.</span></h1>
        </div>
        <ul className='nav-items'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/shop'>Shop</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
        <div className='log-cart'>
          <div className='log'>
            <BsPersonCircle className='log-cart-icon' />
          </div>
          <div className='cart'>
            <span>{totalQuantities}</span>
            <Link href='/cart'><BsBag className='log-cart-icon' /></Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar