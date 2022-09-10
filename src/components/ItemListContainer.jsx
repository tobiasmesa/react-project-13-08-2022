import { useState } from "react";
import { useEffect } from "react";
import productsJson from "../products.json";
import ItemList from "./ItemList"


function ItemListContainer({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = (data, time) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data) {
            resolve(data);
          } else {
            reject("¡Error!");
          }
        }, time);
      });

    getProducts(productsJson, 3000)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => console.log(err, "No hay productos!"));
  }, []);

  return (
    <div>
      <ItemList products={products}/>
    </div>
  );
}
export default ItemListContainer;
