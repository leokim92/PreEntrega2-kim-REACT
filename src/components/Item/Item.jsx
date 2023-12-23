import React from 'react';
import './Item.css'
import { Link } from 'react-router-dom';


const Item = ({id, name, price, img}) => {
  return (
    <div className='cardProduct'>
        <img src={img} alt={name} />
        <h3>Name: {name} </h3>
        <p>Price:  {price}</p>
        <p>ID: {id}</p>
        <Link className='btn' to={`/item/${id}`}>View Detail</Link>
    </div>
  )
}

export default Item