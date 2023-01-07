import React from 'react'
import "./Product.css";
import IMG1 from "../../../images/2.png";

function Product1() {
  return (
    <div className='product'>
      <div className='product__left'>
        <img src={IMG1} alt="Icecream" />
      </div>
      <div className='product__right'>
        <h2>Brown bread</h2>
        <p>
          Bon Au Pain is a pioneer in the healthy fast food scene.
          Bon Au Pain is a pioneer in the healthy fast food scene.
          Bon Au Pain is a pioneer in the healthy fast food scene.
        </p>
        <span>$19.55 <del>$22.55</del></span>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

export default Product1
