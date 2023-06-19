import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDoc, doc } from "firebase/firestore"
import { db } from '../services/firebaseConfig'
import { GlobalContext } from "../context/GlobalProvider"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const useGetProduct = () => {

    
    const { setLoading } = useContext(GlobalContext);
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    const getProduct = async ({ id }) =>{
        setLoading(true) 
        try{
            const searchProduct = doc(db,"products",id);
            const findProduct = await getDoc(searchProduct);
            let findedProduct = findProduct.data();
            setProduct({id:findedProduct.id, ...findedProduct});
            setLoading(false)
            
        }catch(error){
          setLoading(false);
          toast.error('Producto no encontrado', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate('/')  
        }
    }

  return {
    getProduct,
    product
  }
}

export default useGetProduct
