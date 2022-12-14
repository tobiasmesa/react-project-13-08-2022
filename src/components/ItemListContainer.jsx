import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
//import productsJson from "../products.json";
import ItemList from "./ItemList"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";


function ItemListContainer() {

const { category } = useParams();

const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore(); // LLAMADA A LA DB

    const productsCollection = collection(db, "items"); // QUERY A LA DB PICKEAR LA COLECCTION Products

    if (category) {
      const queryFilter = query(
        productsCollection,
        where("category", "==", category)
      );
      getDocs(queryFilter).then((res) =>
        setProducts(res.docs.map((item) => ({ id: item.id, ...item.data() })))
      );
    } else 
    {
      getDocs(productsCollection) // hacer consulta
      .then((res) => { // devuelve RES.doc.data() => trae la info
        setProducts(res.docs.map((item) => ({ id: item.id, ...item.data() })));
      });
    }

  }, [category]);

  console.log(products)


  return (
    <div>
      <ItemList products={products}/>
    </div>
  );
}
export default ItemListContainer;
