import React, { Fragment, useEffect, useContext } from 'react'
import ItemList from '../itemList/ItemList'
import { GlobalContext } from "../../../context/GlobalProvider"
import { useParams } from 'react-router-dom'

import Spinner from "../../spinner/Spinner"
import useGetCatalogue from '../../../hooks/useGetCatalogue'


const ItemListContainer = () => {

    const { category } = useParams();                                                   //me traigo el id de categoria que viene por parametro


    const { loading } = useContext(GlobalContext)
    const { getCat, catalogue } = useGetCatalogue();

    useEffect(()=>{
        getCat();
    },[])

    const filtered = category ? catalogue.filter((product) => product.category === category) : catalogue;



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