import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import {db} from '../services/firebaseConfig'
import { GlobalContext } from "../context/GlobalProvider"
import { collection, addDoc } from "firebase/firestore"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useSendOrder = () => {

  const { setLoading} = useContext(GlobalContext);                                            //me traigo la variable de estado del globalcontext para renderizar el spinner
  const navigate = useNavigate();

    const loadOrder = async ({ data }) =>{                                                    //a través de una funcion asyncrona para enviar la informacion
        setLoading(true);
        const order = {data, orderDate: new Date(), status:"Generada"}                       // creo un objeto order con los datos del formulario, adjuntando una timestamp y un status
        try{                                                                                //realizo una consulta a base de datos
            const ord = collection(db,"orders");                                            //vinculando a la coleccion orders dentro de db
            const info = await addDoc(ord,order);                                           //esperando a que la orden sea añadida a través de addDoc 
            
            setLoading(false);
            toast.success('Orden generada. ID: '+ info.id, {                                //notificando con react toastify el id de la orden generada
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
        } catch (error){                                                                  //o notificando que falló el envío de la orden y volviendo al incio
          toast.error('Error al enviar orden', {
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

  return{
    loadOrder
  }
}

export default useSendOrder 