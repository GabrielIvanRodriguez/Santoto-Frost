import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ItemCount from '../itemCount/ItemCount';
import { CartContext } from '../../../context/CartProvider';
import './ItemDetail.css'



const ItemDetail = (props) => {
    const { product,id } = props;                                                  //trae los atributos del objeto product (el producto a renderizar)

    const { addCart} = useContext(CartContext)                                     // traigo la funcion para añadir al carrito desde el context del carrito

    const [goToCart, setGoToCart] = useState(false);                              //variable de estado booleana que va a renderizar un boton "finalizar la compra" solo si agregue el producto al carrito

    const navigate = useNavigate();
    


    const onAdd = (quantity) => {                                                   //funcion que se ejecuta al clickear en boton "agregar al carrito" del ItemCount que
        addCart(product, quantity,id);                                              //llama a la funcion agregar al carrito pasandole el producto, la cantidad y el id del producto 
        setGoToCart(true);                                                          //seteo para renderizar el boton "finalizar compra" una vez hay productos en el carrito
    }
                                                                                    //renderizo el item seleccionado
    return (
        <div>
            <div>
                <p>Santoto Frost - {product.category} - {product.name}</p>
                <br />
                <img src={product.img} alt="comida" />
                <h3>{product.name}</h3>
                <h4>{product.brand}</h4>
                <p>{product.description}</p>
                <p>Peso: {product.weight}</p>
                <p>Unidades: {product.amount}</p>
                <p>Precio: $ {product.price}</p>
                <ItemCount initial={1} item={product} onAdd={onAdd}/>
            </div>
            {goToCart && <Link className="btn btn-primary mt-2 mx-2 btn3d btn-sm" to='/cart'>Finalizar compra</Link>}
            <button onClick={() => navigate(-1)} type="button" className="btn btn-success mt-2 btn-sm btn3d">Volver </button>
        </div >
    )
}

export default ItemDetail