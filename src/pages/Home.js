import React from 'react'
import ItemListContainer from '../components/item/itemListContainer/ItemListContainer'

const Home = () => {
                                                                        //renderizo un titulo, un subtitulo y llamo al contenedor de la lista de productos que corresponda
                                                                                      //inicialmente con todos los productos
  return (
    <div >
      <div className="d-flex flex-column">
        <h1 className="align-self-start ">Santoto Frost</h1>
        <h2 className="align-self-start ml-5">Calidad bajo cero</h2>
      </div>

      <hr/>
      <ItemListContainer/>
      

    </div>
  )
}

export default Home