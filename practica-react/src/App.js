import { useEffect, useState } from "react";
import "./App.css";
import ButtonState from "./component/ButtonState";
import Card from "./component/Card.jsx";

const [product, setproduct] = useState([]);
const productsRequested = [
  {
    name: "prod1",
    id: 4,
  },
  {
    name: "prod2",
    id: 3,
  },
];


useEffect(() => {
  const getProducts = new Promise( (res, rej) => 
  {
    res(
      productsRequested
      )
    rej("ERRORS")
  })

}, [])



function App() {
  return (
    <>
      <Card></Card>
      <>{}</>
    </>
  );
}

export default App;
