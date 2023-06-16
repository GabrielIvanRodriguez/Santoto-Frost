import React, { createContext, useState} from 'react'
import {alreadyInCart} from "../helpers/index"


export const CartContext = createContext('')                                                   //creo y exporto un contexto global para que lo puedan usar otros componentes

const CartProvider = ({ children }) => {                                                      //declaro que los que van a utilizarlo son sus hijos

    const [cart,setCart] = useState([]);
    console.log(cart);
    const [inCart, setInCart] = useState(false);


    const addCart = (product,quant,id) =>{

        if(alreadyInCart(cart,id)){
            setCart(cart.map(item =>{
                return item.id === id ? {...item, quant:(item.quant + quant)} : item
              }));
            
        }else{
            setCart([...cart, {...product,quant,id}])
        }
    } 
    
    const quitFromCart = (productId) =>{
        let newCart = cart.filter((prod)=> prod.id !== productId);
        setCart(newCart);
    }

    const cartClear = () =>{
        setCart([]);
    }




    return (
        <CartContext.Provider value={{                                                           //dejo disponible el spinner, el catalogo y el carrito para ser utilizados
            cart,
            setCart,
            inCart,
            setInCart,    
            addCart,
            quitFromCart,
            cartClear

        }}>{children}</CartContext.Provider>                                                     //dejo para que lo utilicen sus hijos
    )
}

export default CartProvider