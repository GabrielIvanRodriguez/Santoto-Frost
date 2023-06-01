import React from 'react';
import { useNavigate } from 'react-router-dom'

const Item = (props) => {

  const { id, imgRoute, name, description, weight, amount, price, stock } = props;                  //me traigo las propiedades que vienen en props desestructuradas

  const navigate = useNavigate();                                                                   //permito el uso de la funcion navigate()

                                                                                                  //renderizo 1 producto
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
          
          <button className="btn btn-primary m-1" onClick={ () => navigate(`/item/${id}`) }>Ver más</button>
      
        </div> 
      </div>
    </div>

  )
}

export default Item