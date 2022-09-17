import ItemCount from "./ItemCount";
import { useCartContext } from '../context/CartContext';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';



const ItemDetail = ( item ) => {
  const { name, price, thumbnail, stock, description} = item;

  const [cart, setCart] = useState(false);

  const {addProduct} = useCartContext();

  function onAdd(quantity) {
    setCart(true);
      addProduct(item, quantity);
  }

  return (

    <div className="m-auto border grid justify-items-center">
      <div>{name} </div>
      <img src={thumbnail} alt={name}/>
      <div>{description}</div>
      <div>Price: ${price}</div>
      {
      cart
        ? <Link to='/cart'> Proceed to checkout </Link>
        : <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      }
      </div>
  );
};
export default ItemDetail;
