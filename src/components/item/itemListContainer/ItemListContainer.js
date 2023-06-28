import React, { Fragment, useEffect, useContext } from 'react'
import ItemList from '../itemList/ItemList'
import { GlobalContext } from "../../../context/GlobalProvider"
import { useParams } from 'react-router-dom'

import Spinner from "../../spinner/Spinner"
import useGetCatalogue from '../../../hooks/useGetCatalogue'


const ItemListContainer = () => {

    const { category } = useParams();                                                   //me traigo el id de categoria que viene por parametro


    const { loading } = useContext(GlobalContext)                                       //me traigo la variable de estado que renderiza condicionalmente el spinner
    const { getCat, catalogue } = useGetCatalogue();                                    //me traigo las funcion getCat( ) y el catalogo del custom hook useGetCatalogue que realiza la promesa para consultar la base de datos

    useEffect(()=>{                                                                     //dentro de un useEffect para controlar el ciclo del componente, ejecuto la funcion para realizar la promesa
        getCat();
    },[])

    const filtered = category ? catalogue.filter((product) => product.category === category) : catalogue;               //filtro segun la categoria que vino por parametro para renderizar en base a eso


                                                                                                //renderizo spinner si esta cargando, sino renderizo todos los productos seleccionados
    return (
        <Fragment>
            
                {loading && (
                    <Spinner/>
                )}
            <div>
                {!loading && filtered.length > 0 && (
                        
                        <ItemList items={filtered}/>
                )}
            </div>


        </Fragment>
    )
}

export default ItemListContainer