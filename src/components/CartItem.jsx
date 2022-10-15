import { useCartContext } from '../context/CartContext';

const CartItem = ( {prod} ) => {

    const { id, name, price, thumbnail, quantity } = prod;
    
    const {removeProduct} = useCartContext();

  return (
    <div className='mt-10 w-48'>
    <img src={thumbnail} alt={name}/>
    <p className=''>{name}</p>
    <p className=''>Unit price: ${price}</p>
    <p className=''>Quantity: {quantity}</p>
    <p className=''>Subtotal: ${quantity * price}</p>
    <button onClick={() => removeProduct(id)} className='py-2 px-4 bg-red-700 font-semibold rounded-xl shadow-sm shadow-gray-300 text-white'>Remove</button>
</div>
  )
}


export default CartItem