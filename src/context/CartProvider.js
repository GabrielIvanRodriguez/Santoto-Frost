import React, { createContext, useState} from 'react'
import {alreadyInCart} from "../helpers/index"


export const CartContext = createContext('')                                                   //creo y exporto un contexto global para que lo puedan usar otros componentes

const CartProvider = ({ children }) => {                                                      //declaro que los que van a utilizarlo son sus hijos

    const [cart,setCart] = useState([]);                                                        //creo una variable de estado array para el carrito y su funcion modificadora


    const addCart = (product,quant,id) =>{                                                  //funcion para agregar al carrito que recibe el producto, su id, y la cantidad seleccionada en ItemCount

        if(alreadyInCart(cart,id)){                                                         //pregunto si el producto a agregar ya existe en el carrito
            setCart(cart.map(item =>{                                                       //si ya esta en el carrito, modifico el array del carrito..
                return item.id === id ? {...item, quant:(item.quant + quant)} : item        //buscando el item de carrito que tiene el mismo id que el producto a agregar y modificando su cantidad (sumando la nueva)
              }));
            
        }else{
            setCart([...cart, {...product,quant,id}])                                       //si no esta en el carrito, guardo en el carrito una copia del carrito actual e incluyo el nuevo producto
        }
    } 
    
    const quitFromCart = (productId) =>{                                                    //funcion que quita del carrito un producto
        let newCart = cart.filter((prod)=> prod.id !== productId);                          //a través de un filter del carrito que me guarda un carrito sin ese producto   
        setCart(newCart);                                                                   //y lo guarda en la variable de estado
    }

    const cartClear = () =>{                                                                //funcion que vacia el carrito
        setCart([]);
    }

    return (
        <CartContext.Provider value={{                                                           //dejo disponible el spinner, el catalogo y el carrito para ser utilizados, junto con todas las funciones
            cart,
            setCart,    
            addCart,
            quitFromCart,
            cartClear

        }}>{children}</CartContext.Provider>                                                     //dejo para que lo utilicen sus hijos
    )
}

export default CartProvider