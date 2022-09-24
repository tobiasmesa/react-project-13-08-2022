import { useCartContext } from '../context/CartContext';

const CartItem = ( {prod} ) => {

    const { id, name, price, thumbnail, quantity } = prod;
    
    const {removeProduct} = useCartContext();

  return (
    <div className=''>
    <img src={thumbnail} alt={name} className='' />
    <p className=''>{name}</p>
    <p className=''>Unit price: ${price}</p>
    <p className=''>Quantity: {quantity}</p>
    <p className=''>Subtotal: ${quantity * price}</p>
    <button onClick={() => removeProduct(id)} className='btn-remove'>X</button>
</div>
  )
}


export default CartItem