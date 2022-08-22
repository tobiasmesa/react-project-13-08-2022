import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="bg-gray-50 h-12 shadow-xl flex justify-between p-3 pl-3 text-orange-500 max-w-screen">
      <div className="font-bold text-lg"> LetCommerce </div>
      <div className="flex space-x-10">
        <a href="#" className=""> Home </a> 
        <a href="#" className=""> Account </a>
        <a href="#" className=""> Categories </a>
      </div>
      <CartWidget/>
    </nav>
  );
}
export default NavBar;
