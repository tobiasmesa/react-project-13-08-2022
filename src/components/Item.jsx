const Item = (product) => {
  return (
    <div className="w-52 border bg-slate-100"> 
        <img className="m-auto h-[70%]" src={product.img} alt=""/>
        <div className="text-xl">{product.name}</div>
        <div className="mx-12">Precio:{product.price}</div>
    </div>
  )
}
export default Item