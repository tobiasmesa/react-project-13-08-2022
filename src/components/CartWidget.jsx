import { BsCart } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className="pr-10 flex">
      <BsCart className="m-auto"></BsCart>
      <div className="pl-4"> Cart</div>
    </div>
  );
};
export default CartWidget;
