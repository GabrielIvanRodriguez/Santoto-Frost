import React from 'react'
import ItemListContainer from '../components/item/itemListContainer/ItemListContainer'

const Home = () => {
                                                                        //renderizo un titulo, un subtitulo y llamo al contenedor de la lista de productos que corresponda
                                                                                      //inicialmente con todos los productos
  return (
    <div>
      <hr></hr>
      <h1>Santoto Frost</h1>
      <h2>Calidad bajo cero</h2>
      <hr/>
      <ItemListContainer/>
      

    </div>
  )
}

export default Home