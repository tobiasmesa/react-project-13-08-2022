import { useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useState } from "react";

const Test = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore(); // LLAMADA A LA DB

    const ProductsCollection = collection(db, "Products"); // QUERY A LA DB PICKEAR LA COLECCTION Products
    const category = "";

    if (category) {
      const queryFilter = query(
        ProductsCollection,
        where("category", "==", category)
      );
      getDocs(queryFilter).then((res) =>
        setProducts(res.docs.map((item) => ({ id: item.id, ...item.data() })))
      );
    } else 
    {
      getDocs(ProductsCollection) // hacer consulta
      .then((res) => { // devuelve RES.doc.data() => trae la info
        setProducts(res.docs.map((item) => ({ id: item.id, ...item.data() })));
      });
    }
   
    
  }, []);


  
  console.log(products);

  return <div></div>;
};

export default Test;
