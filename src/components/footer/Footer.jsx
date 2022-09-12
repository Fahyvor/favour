import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>FAVOUR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#porfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/fahyvor"> <FaFacebookF /></a>
        <a href="https://instagram.com/fahyvor"> <FiInstagram /></a>
        <a href="https://twitter.com/fahyvor"> <IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Favour Okafor Snr. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer