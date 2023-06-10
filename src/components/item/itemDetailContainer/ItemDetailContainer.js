import React, { Fragment, useContext, useEffect } from 'react'
import { GlobalContext } from "../../../context/GlobalProvider"
import { useParams } from 'react-router-dom';
import useGetProduct from '../../../hooks/useGetProduct'
import Spinner from '../../spinner/Spinner'
import ItemDetail from '../itemDetail/ItemDetail';



const ItemDetailContainer = () => {


  const { id } = useParams();                                                     //me traigo el id del producto que setea qué producto voy a ver

  const { loading } = useContext(GlobalContext)
  const { product, getProduct } = useGetProduct();

  useEffect( () =>{
    getProduct({id})
  },[])
                                                                               //renderizo spinner si esta cargando, sino llamo al componente que renderiza el producto
  return (
    <Fragment>
      {loading && <Spinner />}

      {!loading && (
        <ItemDetail product={product} />
      )

      }

    </Fragment>
  )
}

export default ItemDetailContainer