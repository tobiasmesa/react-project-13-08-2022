import ItemCount from "./ItemCount";

const ItemDetail = ( {name, thumbnail, description, price} ) => {
  return (
    <div className="m-auto border grid justify-items-center">
      <div>{name} </div>
      <img src={thumbnail} alt={name}/>
      <div>{description}</div>
      <div>Price: ${price}</div>
      <ItemCount stock={10}/>
      </div>
  );
};
export default ItemDetail;
