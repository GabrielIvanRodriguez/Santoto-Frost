import React from 'react'
import ItemListContainer from '../../components/item/itemListContainer/ItemListContainer'
import './Home.css'


const Home = () => {
                                                                        //renderizo un titulo, un subtitulo y llamo al contenedor de la lista de productos que corresponda
                                                                                      //inicialmente con todos los productos
  return (
    <div >
      <div className="d-flex flex-column">
        <div className="d-flex flex-nowrap">
        <img style={{width:'15%'}} src="https://res.cloudinary.com/dnakxwijm/image/upload/v1687142217/santoto-frost/logos/monta%C3%B1aLogo.png" alt="montaña"/>
        <img style={{width:'15%'}} src="https://res.cloudinary.com/dnakxwijm/image/upload/v1687142246/santoto-frost/logos/logoLetras.png" alt="logo"/>
        <img style={{width:'70%', paddingLeft:'50px'}} src="https://res.cloudinary.com/dnakxwijm/image/upload/v1687142775/santoto-frost/logos/rianafbsmr74z44gjcfj.png" alt="calidadbajocero"/>
        </div>
      </div>

      <hr/>
      <ItemListContainer/>
      

    </div>
  )
}

export default Home