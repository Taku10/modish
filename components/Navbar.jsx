import React from 'react'
import { GrFacebookOption } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs'
import { FaPinterestP } from 'react-icons/fa'
import { GrSnapchat } from 'react-icons/gr'
import { AiFillYoutube } from 'react-icons/ai'
import { BsPersonCircle } from 'react-icons/bs'
import { BsBag } from 'react-icons/bs'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className='navbar-container'>
      <nav className="top-nav">
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
      <nav className="main-nav">
        <div className='logo'>
          <h1>Modish<span>.</span></h1>
        </div>
        <ul className='nav-items'>
          <li><Link href=''>Home</Link></li>
          <li><Link href=''>Shop</Link></li>
          <li><Link href=''>About</Link></li>
          <li><Link href=''>Contact</Link></li>
        </ul>
        <div className='log-cart'>
          <BsPersonCircle  className='log-cart-icon'/>
          <BsBag className='log-cart-icon'/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar