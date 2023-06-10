import React from 'react'
import GlobalProvider from '../context/GlobalProvider';
import { collection, addDoc } from "firebase/firestone"


const useSendOrder = () => {

    const { setLoading } = GlobalProvider();

    const loadOrder = async ({ data }) =>{

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