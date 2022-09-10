import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-gray-50 h-12 shadow-xl flex justify-between p-3 pl-3 text-[#FF8A5B] max-w-screen">
      <Link to="/" className="font-bold text-lg"> LetCommerce </Link>
      <div className="flex space-x-10">
        <Link to="/" className=""> Home </Link> 
        <Link to="/category/smartphones" className=""> Smartphones </Link> 
        <Link to="/category/laptops" className=""> Laptops </Link> 
        <Link to="/category/skincare" className=""> Skincare </Link> 
      
      </div>
      <CartWidget/>
    </nav>
  );
}
export default NavBar;
