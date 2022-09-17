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
    <div className="">
      <div className="flex w-52 h-6 rounded bg-[#007CBE]">
        <button className="m-auto text-white" onClick={subProduct} disabled={counter <= 1}>
          <BsDashLg />
        </button>
        <div className="w-[158px] m-auto bg-white font-light text-center">
          {counter}
        </div>
        <button className="m-auto text-white" onClick={addProduct} disabled={counter >= stock}>
          <BsPlusLg />
        </button>
      </div>
      <div>
        <button className="w-52 mt-5 h-6 text-center text-md font-light text-white bg-[#007CBE] rounded"  disabled={stock <= 0} onClick={() => onAdd(counter)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
