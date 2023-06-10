import React, { createContext, useState } from 'react'

import useSetCart from '../hooks/useSetCart'

export const GlobalContext = createContext('')                                                   //creo y exporto un contexto global para que lo puedan usar otros componentes

const GlobalProvider = ({ children }) => {                                                      //declaro que los que van a utilizarlo son sus hijos

    const [loading, setLoading] = useState(true);                                          //spinner disponible para todos los componentes    


    const { addCart, quitFromCart, cartClear, cart } = useSetCart();


    return (
        <GlobalContext.Provider value={{                                                           //dejo disponible el spinner, el catalogo y el carrito para ser utilizados
            loading,
            setLoading,
            cart,
            addCart,
            quitFromCart,
            cartClear

        }}>{children}</GlobalContext.Provider>                                                     //dejo para que lo utilicen sus hijos
    )
}

export default GlobalProvider