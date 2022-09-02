import Item from './Item'
const ItemList = ({products}) => {
  return (
  
    <section className="grid grid-cols-3">
 {products.length ? products.map((product) => <Item key={product.id} {...product}/>): <h2>Cargando...</h2>}
    </section>
  
  )
}

export default ItemList