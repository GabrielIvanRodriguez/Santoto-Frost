import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from '../itemCount/ItemCount';
import { CartContext } from '../../../context/CartProvider';



const ItemDetail = (props) => {
    const { product } = props;                                                  //trae los atributos del objeto product (el producto a renderizar)

    const {inCart, setInCart} = useContext(CartContext)

    const navigate = useNavigate();   
    setInCart(false);

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
            <ItemCount item={product} inCart={inCart}/>
            <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-success mt-2">Volver </button>
        </div>
    )
}

export default ItemDetail