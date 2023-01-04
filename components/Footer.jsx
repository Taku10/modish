import React from 'react'
import { GrFacebookOption } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs'
import { FaPinterestP } from 'react-icons/fa'
import { GrSnapchat } from 'react-icons/gr'
import { AiFillYoutube } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-inner-container'>
      <div className='footer-inner-wrapper'>
        <div className='get-in-touch footer-row'>
          <h3>GET IN TOUCH</h3>
          <p>
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="footer-socials">
            <GrFacebookOption className='footer-icon' />
            <BsInstagram className='footer-icon' />
            <FaPinterestP className='footer-icon' />
            <GrSnapchat className='footer-icon' />
            <AiFillYoutube className='footer-icon' />
          </div>
        </div>
        <div className="footer-categeries footer-row">
          <h3>Categories</h3>
          <ul className='footer-nav-items'>
            <li><Link href=''>Men</Link></li>
            <li><Link href=''>Women</Link></li>
            <li><Link href=''>Dresses</Link></li>
            <li><Link href=''>Sunglasses</Link></li>
          </ul>
        </div>
        <div className='footer-links footer-row'>
          <ul className='footer-nav-items'>
            <li><Link href=''>Search</Link></li>
            <li><Link href=''>About Us</Link></li>
            <li><Link href=''>Contact Us</Link></li>
          </ul>
        </div>
        <div className='footer-newsletter footer-row'>
          <form action="">
            <input type="text" onChange='' placeHolder='email@example.com'/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Footer
