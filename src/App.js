import { Fragment } from "react";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <Fragment>
      <NavBar/>
      <ItemListContainer>
        <h1> Prueba </h1>
      </ItemListContainer>
    </Fragment>
  );
}

export default App;
