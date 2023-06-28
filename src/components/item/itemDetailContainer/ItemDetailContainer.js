import React, { Fragment, useContext, useEffect, useState } from 'react'
import { GlobalContext } from "../../../context/GlobalProvider"
import { useParams, useNavigate } from 'react-router-dom';
import ItemDetail from '../itemDetail/ItemDetail';
import { getDoc, doc } from "firebase/firestore"
import { db } from '../../../services/firebaseConfig'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../../spinner/Spinner"



const ItemDetailContainer =() => {

  const { id } = useParams();                                                           //me traigo el id del producto por parametro que setea qué producto voy a ver 

  const { setLoading, loading } = useContext(GlobalContext);                            //me traigo la variable de estado del spinner y su modificador desde el global context
  const [product, setProduct] = useState({});                                           //creo una variable de estado auxiliar para guardar el producto que busco en base de datos
  const navigate = useNavigate();

  const getProduct = async (id) =>{                                                     //a través de una funcion asincronica que le envio el id del producto
        setLoading(true)                                                                //pongo el spinner a cargar
        try{                                                                            //y realizo una consulta a base de datos
            const searchProduct = doc(db,"products",id);                                //en la base de datos db, bajo el identificador products, buscando id
            const findProduct = await getDoc(searchProduct);                            //con un await espero a que se cumpla la promesa de encontrar ese producto a través de la funcion getDoc
            let findedProduct = findProduct.data();                                     //me guardo en una variable el .data() de la respuesta
            setProduct({id:findedProduct.id, ...findedProduct});                        //guardo los datos en la variable de estado con su id, y el resto de atributos 
            setLoading(false)                                                           //dejo de cargar
            
        }catch(error){                                                                  //en caso de que la promesa falle o retorne errores
          navigate('/')  
          toast.error('Producto no encontrado', {                                       //si no encuentro el producto, a través de ReactToastify muestro una notificacion que data esto
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setLoading(false);                                                            //dejo de cargar

        }
    }


  useEffect( () =>{                                                                    //controlo el ciclo del componente poniendo en un useEffect la consulta a base de datos
    getProduct(id)
  },[id])

  return (
    <Fragment>

      {loading && (
          <Spinner/>
      )}
      {!loading && (
        <ItemDetail product={product} id={id} />
      )

      }

    </Fragment>
  )
}

export default ItemDetailContainer