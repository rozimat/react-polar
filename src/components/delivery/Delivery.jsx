import React from 'react'
import "./Delivery.css";
import Img1 from "../../images/Img1.png";
import Img2 from "../../images/Img2.png";
import Img3 from "../../images/Img3.png";
import Img4 from "../../images/Img4.png";

function Delivery() {
  const products =[
    {
      "id" : "1",
      "img" : Img1,
      "title" : "Free Shopping",
      "text" : "Last Chance! Free shipping on all orders ends today."
    },
    {
      "id" : "2",
      "img" : Img2,
      "title" : "Quick Packagin",
      "text" : "Last Chance! Free shipping on all orders ends today."
    },
    {
      "id" : "3",
      "img" : Img3,
      "title" : "100% Money Back",
      "text" : "Last Chance! Free shipping on all orders ends today."
    },
    {
      "id" : "4",
      "img" : Img4,
      "title" : "Delevry",
      "text" : "Last Chance! Free shipping on all orders ends today."
    }
  ]
  return (
    <div className='delivery'>
      {
        products.map( items =>
            <div key={items.id} className='delevry__item'>
              <img src={ items.img } alt="items" />
              <p> { items.title } </p>
              <span> { items.text } </span>
            </div>
          )
      }
    </div>
  )
}

export default Delivery
