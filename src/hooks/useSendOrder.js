import { useContext } from "react"
import {db} from '../services/firebaseConfig'
import { GlobalContext } from "../context/GlobalProvider"
import { collection, addDoc } from "firebase/firestore"


const useSendOrder = () => {

  const { setLoading} = useContext(GlobalContext);

    const loadOrder = async ({ data }) =>{

        setLoading(true);
        try{
            const ord = collection(db,"orders");
            const info = await addDoc(ord,data);
            setLoading(false);
            alert('orden enviada', info)
        } catch (error){
            alert('error, orden no enviada')
            setLoading(false);
        }
    }

  return{
    loadOrder
  }
}

export default useSendOrder 