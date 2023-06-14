import React, {useContext, useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import ItemCount from '../itemCount/ItemCount';
import { CartContext } from '../../../context/CartProvider';



const ItemDetail = (props) => {
    const { product } = props;                                                  //trae los atributos del objeto product (el producto a renderizar)

    const { addCart } = useContext(CartContext)
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quant) =>{
        addCart(product,quant);
        setGoToCart(true);
    }

    const navigate = useNavigate();

    return (
        <div>
            <p>Santoto Frost - {product.category} - {product.name}</p>
            <br/>                                                                                        
            <img src={product.img} alt="comida" />
            <h1>{product.name}</h1>
            <h2>{product.brand}</h2>
            <p>{product.description}</p>
            <p>Peso: {product.weight}</p>
            <p>Unidades: {product.amount}</p>
            {goToCart ? <Link className="btn btn-success mt-2 mx-2" to='/cart'>Finalizar compra</Link> : <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/> }
            
            <button onClick={() =>navigate(-1)} type="button" className="btn btn-outline-success mt-2">Volver </button>
        </div>
    )
}

export default ItemDetail