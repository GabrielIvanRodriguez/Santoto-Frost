import { useContext, useEffect, useState } from 'react';
import './CartWidget.css';
import { CartContext } from '../../../context/CartProvider';
import { Link } from "react-router-dom";

const CartWidget = () => {                                                      //renderizo un icono de carrito con la cantidad de items dentro
    const { cart } = useContext(CartContext)                                    //me traigo el carrito desde el context
    const [itemQuant, setItemQuant] = useState(0);                              //creo una variable de estado para la cantidad de items dentro del carrito

    useEffect(()=>{                                                                             //controlo el ciclo de vida de la longitud del carrito para que se actualice
        const totalQuant = cart.reduce((prev, curr) => prev + curr.quant, 0)                    //en tiempo real
        cart.length > 0 ? setItemQuant(totalQuant) : setItemQuant(0);
    })


    return (

        <div className="w-25 h-25 d-flex justify-content-center align-self-center position-relative">
            <button className="btn btn-primary btn3d btn-xs rounded-circle m-0 p-0">
                <Link className="text-decoration-none justify-content-center align-self-center" to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-cart-fill m-1 p-1" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </Link>
            </button>
            <div className="position-absolute bottom-0 end-0 m-0 w-50 h-50">
                <p className="badge rounded-pill badge-notification bg-info ">{itemQuant}</p>
            </div>



        </div>



    )
}

export default CartWidget