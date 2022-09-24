import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";

export const Cart = () => {

    const { cart, totalPrice } = useCartContext();
    
    if (!cart.length) {
        return (
            <>
                <div className='EmptyCart_Container'>
                    <p>Your cart is empty...</p>
                    <Link to='/'><button className='btn-goToShop'>Go shopping</button></Link>
                </div>
            </>
        )
    }

    return (
        <>
        {
            cart.map(prod => <CartItem key={prod.id} prod={prod} />)
        }

        <p className=''>Total: ${totalPrice()}</p>
        </>
    )
}
