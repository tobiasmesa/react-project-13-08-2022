import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom";
import {  getDoc, getFirestore, doc } from "firebase/firestore";


const ItemDetailContainer = () => {

  const [items, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore(); // LLAMADA A LA DB
    const productsCollection = doc(db, "items", id); // QUERY A LA DB PICKEAR LA COLECCTION Products
    getDoc(productsCollection)
    .then((res) => setItem(res.data()))
    .catch((err)=>
    {
      return( `Error ${err}`);
    })
    
  }, [id]);

  return <ItemDetail {...items} />;
};

export default ItemDetailContainer;
