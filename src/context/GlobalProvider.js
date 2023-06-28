import React, { createContext, useState } from 'react'


export const GlobalContext = createContext('')                                                   //creo y exporto un contexto global para que lo puedan usar otros componentes

const GlobalProvider = ({ children }) => {                                                      //declaro que los que van a utilizarlo son sus hijos

    const [loading, setLoading] = useState(true);                                          //variable de estado para renderizar el spinner condicionalmente    


    return (
        <GlobalContext.Provider value={{                                                           //dejo disponible la variable de estado booleeana y su funcion modificadora
            loading,
            setLoading,
        }}>{children}</GlobalContext.Provider>                                                     //dejo para que lo utilicen sus hijos
    )
}

export default GlobalProvider