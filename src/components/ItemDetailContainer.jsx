import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import productsJson from "../products.json";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getItem().then((data) => {
      setItem(data);
    });
  }, []);

  const getItem = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(id)
        resolve(productsJson.find(p => p.id == id));
        reject("Error");
      }, 2000);
    });
  };

  return <ItemDetail {...item} />;
};

export default ItemDetailContainer;
