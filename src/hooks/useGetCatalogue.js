import {useContext, useState} from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../services/firebaseConfig'                                                      //importo la base de datos que declare en el config de firebase
import { GlobalContext } from "../context/GlobalProvider"

const useSetCatalogue = () => {


    const { setLoading } = useContext(GlobalContext);
    const [catalogue, setCatalogue] = useState([]);                                          //catalogo disponible para todos los componentes




    const getCat = async () =>{         //una funcion asincrónica para traerme el catalogo asi permito que pueda detenerse a resolver la respuesta antes de proceder
        setLoading(true)
        try{                                                                                
            const cat = collection(db,"products")                                           //me traigo el catalogo a través de la funcion collection provista por firebase/firestone diciendo donde buscar (db) y qué traer (productos)
            const data = await getDocs(cat)                                                 //hasta que no termine la funcion getDocs que me trae un documento, no continuo
            const response = data.docs.map( doc =>doc={id:doc.id, ...doc.data()}  )         //una vez llega la respuesta, me la guardo como una copia mapeada del documento que trae objetos del tipo producto
            setCatalogue(response);     
            setLoading(false)                                                    //lo guardo en la variable de estado cataloge
            alert('catalogo cargado')                                                              //dejo de cargar

        } catch(error){                                                                     //en caso de algun error...
            alert('error, no catalogo')                                                                //pagina de error  
            setLoading(false);                                                           //dejo de cargar
        }
    }

  return{
    getCat,
    catalogue
  }
}

export default useSetCatalogue