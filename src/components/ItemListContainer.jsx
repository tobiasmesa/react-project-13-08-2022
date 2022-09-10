import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import productsJson from "../products.json";
import ItemList from "./ItemList"


function ItemListContainer() {

const { category } = useParams();

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
        setProducts((category)? res.filter((product) => product.category == category):res);
      })
      .catch((err) => console.log(err, "No hay productos!"));
  }, [category]);

  return (
    <div>
      <ItemList products={products}/>
    </div>
  );
}
export default ItemListContainer;
