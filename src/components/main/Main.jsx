import React from 'react'
import Headermini from './header/Header-mini'
import Product1 from './product/Product1';
import Product2 from './product/Product2';
import Product3 from './product/Product3';
import "./Main.css";

function Main() {
  return (
    <div className='main'>
      <h3>
        Our Products
      </h3>
      <Headermini/>
      <Product1/>
      <Product2/>
      <Product3/>
    </div>
  )
}

export default Main
