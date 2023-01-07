import React from 'react'
import "./Hero.css";
import img2 from "../../images/1.png";

function Hero() {
  
  return (
    <div className='hero'>
      <div className='hero__left'>
        <span>
        Sweet fun, full of milk.
        </span>
        <h1>
        Feel inside cold with our delicious <span> ice-cream. </span> 
        </h1>
        <p>
          Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful 
          I've been left eating my thoughts, my words.
        </p>
        <button>Buy now</button>
      </div>
      <div className='hero__right'>
        <img src={img2} alt="Icecream" width={597} height={597} />

      </div>
    </div>
  )
}

export default Hero
