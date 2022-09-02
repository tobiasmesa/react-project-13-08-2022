import { Fragment } from "react";
import "./App.css";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Fragment>
      <NavBar />
      <ItemListContainer  className="ml-[20%]">
        <ItemCount stock={3}/>
      </ItemListContainer>
    </Fragment>
  );
}

export default App;
