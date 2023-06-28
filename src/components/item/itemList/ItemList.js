import React from 'react'
import Item from "../../../components/item/Item"

const ItemList = ({items}) => {
                                              //renderizo todos los items correspondientes al catalogo seleccionado
  return (  
    <div>
    <div className="d-flex flex-wrap justify-content-center">
      
      {items.map((product) => <Item key={product.id} id={product.id} category={product.category} img={product.img} name={product.name} description={product.description} weight={product.weight} amount={product.amount} price={product.price} stock={product.stock} />)}
    </div>
    </div>
    

  )
}

export default ItemList