import React from 'react'
import img3 from "../../images/icecream2.png";
import "./Details.css";

function Details() {
  return (
    <div className='details'>
      <div className='details__left'>
        <h2>Brown Sugar Oatmea</h2>
        <p>
          Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.
          Together with McDonald’s, Burger King has grown to become synonymous.
        </p>
        <button>See Details</button>
      </div>
      <div className='details__right'>
        <img src={img3} alt="Icecream" />
      </div>
    </div>
  )
}

export default Details
