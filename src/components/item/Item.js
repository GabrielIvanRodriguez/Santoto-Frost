import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import './Item.css'

const Item = (props) => {

  const { id, img, name, weight, amount, price, stock } = props;                  //me traigo las propiedades que vienen en props desestructuradas


  const navigate = useNavigate();                                                                   //permito el uso de la funcion navigate()

                                                                                                  //renderizo 1 producto
  return (
    <div>

      <div className="card m-3 " style={{width: '18rem', height: '40rem'}}>
        <img src={img} height={100000} className="card-img-top" alt="comida"/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>Peso: {weight}</p>
          <p>Unidades: {amount}</p>
          <p>Stock: {stock}</p>
          <p>$ {price}</p>
          
          <button className="btn btn-primary m-1 btn3d" onClick={ () => navigate(`/item/${id}`) }>Ver más</button>
      
        </div> 
      </div>
    </div>

  )
}

export default Item