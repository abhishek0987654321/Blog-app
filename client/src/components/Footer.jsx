import React from 'react'
import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <div>
      <footer>
        <img src={Logo} alt="" />
        <span>Made with Love and <b>ReactJs</b></span>
      </footer>
    </div>
  )
}

export default Footer
