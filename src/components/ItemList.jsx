import Item from "./Item";
const ItemList = ({ products }) => {
  return (
    <div className="border grid grid-cols-3 justify-items-center">
      {products.length ? (
        products.map((product) => <Item key={product.id} {...product} />)
      ) : (
        <h2>Cargando...</h2>
      )}
    </div>
  );
};

export default ItemList;
