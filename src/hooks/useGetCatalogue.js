import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore"
import { db } from '../services/firebaseConfig'                                                      //importo la base de datos que declare en el config de firebase
import { GlobalContext } from "../context/GlobalProvider"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useSetCatalogue = () => {


  const { setLoading } = useContext(GlobalContext);                                         //me traigo la variable para renderizar o no el spinner
  const [catalogue, setCatalogue] = useState([]);                                          //creo una variable de estado para el catalogo

  const navigate = useNavigate();

  const getCat = async () => {                                 //una funcion asincrónica para traerme el catalogo asi permito que pueda detenerse a resolver la respuesta antes de proceder
    setLoading(true)
    try {
      const cat = collection(db, "products")                                              //me traigo el catalogo a través de la funcion collection provista por firebase/firestone diciendo donde buscar (db) y qué traer (productos)
      const data = await getDocs(cat)                                                     //hasta que no termine la funcion getDocs que me trae un documento, no continuo
      const response = data.docs.map(doc => doc = { id: doc.id, ...doc.data() })         //una vez llega la respuesta, me la guardo como una copia mapeada del documento que trae objetos del tipo producto
      setCatalogue(response);                                                            //lo guardo en la variable de estado cataloge  
      setLoading(false)                                                                 //dejo de cargar
    } catch (error) {
      toast.error('Error al cargar el catalogo', {                                      //si falla la promesa renderizo una notificacion de react toastify
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });                                                           
      setLoading(false);
      navigate('/')  
    }
  }
                                                                                      //dejo disponibles la funciones para cargar catalogo y el catalogo
                                                                                    
  return {
    getCat,
    catalogue
  }
}

export default useSetCatalogue