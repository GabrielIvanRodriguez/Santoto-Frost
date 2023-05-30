import React from 'react';
import './Item.css';
import { useNavigate } from 'react-router-dom'

const Item = (props) => {

  const { id, imgRoute, name, description, weight, amount, price, stock } = props;

  const navigate = useNavigate();

  return (
    <div>
      <div className="card m-3 " style={{width: '18rem', height: '40rem'}}>
        <img src={imgRoute} height={100000} className="card-img-top" alt="comida"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p>Peso: {weight}</p>
          <p>Unidades: {amount}</p>
          <p>Stock: {stock}</p>
          <p>$ {price}</p>
          
          <button className="btn btn-primary" onClick={ () => navigate(`/item/${id}`) }>Ver más</button>
          <button className="btn btn-primary" onClick={ () => navigate(`/item/${id}`) }><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg></button>
        </div> 
      </div>
    </div>

  )
}

export default Item