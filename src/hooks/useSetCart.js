import {useState} from 'react'
import { alreadyInCart,setProductTogethers } from '../helpers'

const useSetCart = () => {

    const [cart, setCart] = useState([])

    const addCart = (product) => alreadyInCart(cart,product) ? setCart(setProductTogethers(cart,product)) : setCart([...cart, product])
    
    const quitFromCart = (productId) =>{
        let newCart = cart.filter((e)=> e.id !== productId);
        setCart(newCart);
    }

    const cartClear = () =>{
        setCart([]);
    }

  return {
    cart,
   addCart,
   quitFromCart,
   cartClear 
  }
}

export default useSetCart