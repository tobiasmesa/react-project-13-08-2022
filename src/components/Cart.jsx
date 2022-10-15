import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import CartItem from "./CartItem";

export const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (!cart.length) {
    return (
      <>
        <div className="ml-[45%] mt-[50px] content-center mt-10">
          <p>Your cart is empty</p>
          <Link to="/">
            <button className=" py-2 px-4 bg-blue-700 font-semibold rounded-xl shadow-sm shadow-gray-300 text-white ">
              Go shopping
            </button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <div className="">
      <div className="mb-10">
        {cart.map((prod) => (
          <CartItem key={prod.id} prod={prod} />
        ))}
      </div>
      <Link
        to="/cart/checkout/"
        className=" py-2 px-4 bg-blue-700 font-semibold rounded-xl shadow-sm shadow-gray-300 text-white mt-30 ml-32 my-2"
      >
        Check Out
      </Link>
      <p className="font-bold text-xl mt-10 ml-32">Total: ${totalPrice()}</p>
    </div>
  );
};
