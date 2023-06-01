import React, { useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'



const ItemDetail = (props) => {
    const { product } = props;
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);
    const [quant, setQuant] = useState(0);
    const [canAdd, setCanAdd] = useState(true);
    const [canSub, setCanSub] = useState(false);

    const add = () => setQuant (quant+1);


    
    const subtract = () => setQuant(quant-1);

    useEffect ( ()=>{
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
    },[quant])




    const addToCart = (product) => {
        setCart(product);
        console.log(cart);
    }

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