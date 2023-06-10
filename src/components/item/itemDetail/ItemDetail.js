import React from 'react'
import { useNavigate } from 'react-router-dom'
import ItemCount from '../itemCount/ItemCount';



const ItemDetail = (props) => {
    const { product } = props;                                                  //trae los atributos del objeto product (el producto a renderizar)

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
            <ItemCount item={product}/>
            <button onClick={() => navigate(-1)} type="button" className="btn btn-outline-success">Volver </button>
        </div>
    )
}

export default ItemDetail