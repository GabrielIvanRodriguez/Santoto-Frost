import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import {db} from '../services/firebaseConfig'
import { GlobalContext } from "../context/GlobalProvider"
import { collection, addDoc } from "firebase/firestore"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useSendOrder = () => {

  const { setLoading} = useContext(GlobalContext);
  const navigate = useNavigate();

    const loadOrder = async ({ data }) =>{
        setLoading(true);
        const order = {data, orderDate: new Date(), status:"Generada"}
        try{
            const ord = collection(db,"orders");
            const info = await addDoc(ord,order);
            
            setLoading(false);
            toast.success('Orden generada. ID: '+ info.id, {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
        } catch (error){
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