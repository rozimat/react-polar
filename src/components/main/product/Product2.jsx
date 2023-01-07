import React from 'react'
import "./Product.css";
import IMG2 from "../../../images/3.png";

function Product2() {
  return (
    <div className='product'>
      <div className="product__left">
        <h2>Brown bread</h2>
          <p>
            Bon Au Pain is a pioneer in the healthy fast food scene.
            Bon Au Pain is a pioneer in the healthy fast food scene.
            Bon Au Pain is a pioneer in the healthy fast food scene.
          </p>
          <span>$19.55 <del>$22.55</del></span>
          <button>Buy Now</button>
      </div>
      <div className="product__right">
      <img src={IMG2} alt="Icecream" />
      </div>
    </div>
  )
}

export default Product2
