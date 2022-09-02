import { useState } from "react";
import { BsPlusLg, BsDashLg } from "react-icons/bs";

const ItemCount = ({stock, initial = 1, onAdd}) => {
  const [counter, setCounter] = useState(initial);

  const addProduct = () => { // Suma
    setCounter(counter === stock ? counter : counter + 1);
  };

  const subProduct = () => { // Resta
    setCounter(counter === 1 ?  counter : counter - 1);
  };

  return (
    <div className="ml-[45%]">
      <div className="flex w-52 h-6 rounded bg-[#007CBE]">
        <button className="m-auto text-white" onClick={subProduct}>
          <BsDashLg />
        </button>
        <div className="w-[158px] m-auto bg-white font-light text-center">
          {counter}
        </div>
        <button className="m-auto text-white" onClick={addProduct}>
          <BsPlusLg />
        </button>
      </div>
      <div>
        <button className="w-52 mt-5 h-6 text-center text-md font-light text-white bg-[#007CBE] rounded" onClick={stock !== 0 ? onAdd = counter : onAdd = 0}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
