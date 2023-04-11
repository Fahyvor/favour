import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
// import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/favour-okafor-3b0b0422b/" target="blank"><BsLinkedin /></a>
        <a href="https://github.com/fahyvor" target="blank"><FaGithub /></a>
        {/* <a href="https://dribble.com" target="blank"><FiDribbble /></a> */}
    </div>
  )
}

export default HeaderSocials