import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ItemCount from '../itemCount/ItemCount';
import { CartContext } from '../../../context/CartProvider';
import './ItemDetail.css'



const ItemDetail = (props) => {
    const { product,id } = props;                                                  //trae los atributos del objeto product (el producto a renderizar)

    const { addCart} = useContext(CartContext)

    const [goToCart, setGoToCart] = useState(false);

    const navigate = useNavigate();
    


    const onAdd = (quantity) => {
        addCart(product, quantity,id);
        setGoToCart(true);
    }
    return (
        <div>
            <div>
                <p>Santoto Frost - {product.category} - {product.name}</p>
                <br />
                <img src={product.img} alt="comida" />
                <h1>{product.name}</h1>
                <h2>{product.brand}</h2>
                <p>{product.description}</p>
                <p>Peso: {product.weight}</p>
                <p>Unidades: {product.amount}</p>
                <ItemCount initial={1} item={product} onAdd={onAdd}/>
            </div>
            {goToCart && <Link className="btn btn-primary mt-2 mx-2 btn3d btn-sm" to='/cart'>Finalizar compra</Link>}
            <button onClick={() => navigate(-1)} type="button" className="btn btn-success mt-2 btn-sm btn3d">Volver </button>
        </div >
    )
}

export default ItemDetail