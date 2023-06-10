import React from 'react'
import GlobalProvider from '../context/GlobalProvider'
import { doc, updateDoc } from "firebase/firestone"




const useUpdateCatalogue = (props) => {

    const { isAdd, stock, quant } = props;
    const nextValue = isAdd ? stock - quant : stock + quant;

    const { setLoading } = GlobalProvider();

    const updateStock = async ({ id })=>{
        const updateProduct = doc(db,"products",id);
        setLoading(true)
        try{
            await updateDoc(updateProduct, {stock:nextValue})
            setLoading(false)
            alert('actualizado')
        } catch(error){
            alert('error, no actualizado')
            setLoading(false)
        }
    }




  return {
    updateStock
  }
}

export default useUpdateCatalogue