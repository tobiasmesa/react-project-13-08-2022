import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer"
import NavBar from "./components/NavBar";
import {Routes, BrowserRouter, Route} from "react-router-dom"
import { Cart } from "./components/Cart";
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:category' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/cart/' element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
