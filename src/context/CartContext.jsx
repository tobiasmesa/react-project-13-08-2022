import React, {useState} from "react";
import { useContext } from "react";


const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    
    const addProduct = (item, quantity) =>{
        if(isInCart(item.id)){
            setCart(cart.map(prod => {
                return prod.id === item.id ? {...prod, quantity: prod.quantity + quantity} : prod
            }));
        } else{
            setCart([...cart, {...item, quantity}]);
        }
    }
    const cleanCart = () => setCart([]);

    const isInCart = (id) => cart.find(prod => prod.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(prod => prod.id !== id));

    const totalPrice = () =>{
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0); 
    }

    const totalProducts = () => {
        return cart.reduce((acum, act) => acum + act.quantity, 0);
    }
    
    return(
        <CartContext.Provider value={{
            cart,
            cleanCart,
            isInCart,
            removeProduct,
            addProduct, 
            totalPrice,
            totalProducts 
        }}>
            {children}
        </CartContext.Provider>
    )
}