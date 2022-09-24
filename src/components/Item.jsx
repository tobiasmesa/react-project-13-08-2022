import { Link } from "react-router-dom";

const Item = (product) => {
  return (
    <Link to={"/item/"+ product.id}>
      <div className=" bg-white border w-72 h-96 m-[5%] grid justify-items-center rounded-xl shadow-2xl">
        <img
          className="p-auto h-48"
          src={product.thumbnail}
          alt={product.name}
        />
        <div className="text-xl font-bold">{product.name}</div>
        <div className="">Precio: ${product.price}</div>
        <button className="bg-blue-500 rounded-md m-auto px-5 text-center">
          {" "}
          Details...{" "}
        </button>
      </div>
    </Link>
  );
};
export default Item;
