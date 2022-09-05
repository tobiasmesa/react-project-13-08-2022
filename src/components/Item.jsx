const Item = (product) => {
  return (
    <div className="border bg-slate-100 w-[75%] h-[90%] m-10"> 
        <img className="m-auto" src={product.img} alt=""/>
        <div className="text-xl">{product.name}</div>
        <div className="mx-12">Precio:{product.price}</div>
    </div>
  )
}
export default Item