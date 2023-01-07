import React from 'react'
import "./Header.css";
import img from "../../images/logo.png";
function Header() {
  return (
    <div className='header'>
      <div className='header__top'>
        <a href="#">
          <img src={img} alt="Polar" />
        </a>
        <div className='header__wrapper'>
          <a href="#">Home</a>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Testimonials</a>
          <a href="#">Contact us</a>
        </div>
        <button className='header__button'>Buy now</button>
      </div>
      <div className='header__bottom'>

      </div>
    </div>
  )
}

export default Header
