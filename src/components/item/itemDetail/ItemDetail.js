import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'



const ItemDetail = (props) => {
    const { product } = props;                                                  //trae los atributos del objeto product (el producto a renderizar)

    const navigate = useNavigate();   

    const [cart, setCart] = useState([]);                                       //creo un arreglo en estado para MAS ADELANTE guardar los productos que agrego al carrito
    const [quant, setQuant] = useState(0);                                      //creo una variable de estado que me guarda la cantidad que sume al carrito
    const [canAdd, setCanAdd] = useState(true);                                 //creo una variable de estado booleano para permitir agregar unidades o no
    const [canSub, setCanSub] = useState(false);                                 //creo una variable de estado booleano para permitir restar unidades o no

    const add = () => setQuant (quant+1);                                       //funcion para agregar en button add
    const subtract = () => setQuant(quant-1);                                   //funcion para restar en button subtract

    useEffect ( ()=>{                                                           //validaciones que permiten, en base a la variable de dependencia, apretar los buttons de restar/sumar
        if(quant === product.stock){
            setCanAdd(false)
        }
        if(quant < product.stock){
            setCanAdd(true)
        }
        if(quant === 0 ){
            setCanSub(false)
        }
        if(quant > 0){
            setCanSub(true)
        }
    },[quant])                                                                  //variable de dependencia




    const addToCart = (product) => {                                           //funcion para MAS ADELANTE agregar al carrito
        setCart(product);
        console.log(cart);
    }
                                                                                //renderizo el producto
    return (
        <div>                                                                                         
            <img src={product.imgRoute} alt="comida" />
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>Peso: {product.weight}</p>
            <p>Unidades: {product.amount}</p>
            <p>Cantidades disponibles: {product.stock - quant}</p>
            <button disabled={!canSub} onClick={subtract} type="button" className="btn btn-danger"><i className="bi-cart-dash"></i></button>
            <button onClick={() => addToCart(product)} type="button" className="btn btn-success m-1">Comprar <i className="bi-cart-fill"></i></button>
            <button disabled={!canAdd} onClick={add} type="button" className="btn btn-outline-primary"><i className="bi-cart-plus"></i></button>

            <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-success">Volver </button>
        </div>
    )
}

export default ItemDetail