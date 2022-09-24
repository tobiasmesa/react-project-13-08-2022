import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import {useCartContext} from "../context/CartContext"



const CartWidget = () => {

  const { totalProducts } = useCartContext();
  
  return (
    <Link to={"/cart"}>
    <div className="pr-10 flex">
      <BsCart className="m-auto"></BsCart>
      <div className="pl-4"> Cart {totalProducts() === 0 || totalProducts() }  </div>
    </div>
    </Link>
  );
};
export default CartWidget;
