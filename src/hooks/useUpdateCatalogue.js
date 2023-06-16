import React from 'react'
import { GlobalContext } from "../../../context/GlobalProvider"
import { doc, updateDoc } from "firebase/firestone"




const useUpdateCatalogue = (stock) => {

    const { setLoading } = useContext(GlobalContext)

    const updateStock = async ({ id })=>{
        const updateProduct = doc(db,"products",id);
        setLoading(true)
        try{
            await updateDoc(updateProduct, {stock:stock})
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