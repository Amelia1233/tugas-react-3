import React from 'react'
import './CardProduct.css'

const CardProduct = (props) => {
  return (
    <div className="pro" onClick={()=>{
      return alert ("Product " +props.nm+ " dengan harga "+props.hrg+ " merupakan produk dengan kualitas terbaik!!!")
    }}>
    <img src = {props.gbr} alt={props.nm} className = 'gbr'/>
    <p>{props.nm}</p>
    <h3>{props.hrg}</h3>
    </div>
  )
}

export default CardProduct