import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, name, price, img}) => {
  return (
    <div className='itemCont'>
        <h2>Name: {name}</h2>
        <img src={img} alt={name} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia dolores molestiae sunt sit? Corrupti sequi officia, perspiciatis, voluptate nulla excepturi sed placeat error omnis, iusto qui! Accusantium assumenda numquam beatae!</p>
        <p>ID: {id}</p>
        <p>Price: {price}</p>
    </div>
  )
}

export default ItemDetail