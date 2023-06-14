import { useState, useContext } from 'react'
import { getDoc, doc } from "firebase/firestore"
import { db } from '../services/firebaseConfig'
import { GlobalContext } from "../context/GlobalProvider"

const useGetProduct = () => {

    
    const { setLoading } = useContext(GlobalContext);
    const [product, setProduct] = useState({});

    const getProduct = async ({ id }) =>{
        setLoading(true) 
        try{
            const searchProduct = doc(db,"products",id);
            const findProduct = await getDoc(searchProduct);
            let findedProduct = findProduct.data();
            setProduct({id:findedProduct.id, ...findedProduct});
            setLoading(false)
        }catch(error){
            alert('error, producto no encontrado')
        }
    }

  return {
    getProduct,
    product
  }
}

export default useGetProduct
