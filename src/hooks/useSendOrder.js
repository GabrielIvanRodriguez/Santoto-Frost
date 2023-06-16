import React from 'react'
import {db} from '../services/firebaseConfig'
import GlobalProvider from '../context/GlobalProvider';
import { collection, addDoc } from "firebase/firestore"


const useSendOrder = () => {

    const { setLoading } = GlobalProvider();

    const loadOrder = async ({ data }) =>{
        data.preventDefault();

        setLoading(true);
        try{
            const ord = collection(db,"orders");
            const info = await addDoc(ord,data);
            setLoading(false);
            alert('orden enviada')
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